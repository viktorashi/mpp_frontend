import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useElementStore from "../stores/ElementStore";
import Element from "../model/Element";

interface OverviewProps {
  init_values?: Element[] | undefined;
}

const Overview: FC<OverviewProps> = ({ init_values }) => {
  const navigate = useNavigate();

  let { resetElements, setElements, elements, deleteElement, handleOpen } =
    useElementStore();

  if (init_values) setElements(init_values);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value != "") {
      const filtered = elements.filter((elem) =>
        elem.name.toLocaleLowerCase().includes(value.toLowerCase())
      );
      setElements(filtered);
    } else {
      resetElements();
    }
  };

  //daca nu merge as sa pui empty list
  useEffect(() => {
    let ignore =false;
    axios.get("http://127.0.0.1:5000/getall").then((response) => {
      if(!ignore)
        // setElements(response.data as Element[]);
        elements = response.data as Element[];
        
        console.log('astea sunt alea del e server')
        console.log(elements)
    });
    return () => {
      ignore= true;
    };
  }, [elements]);


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display={"flex"}>
        <Grid item xs={10}>
          <Typography variant="h4">Mendeleev pe zona</Typography>
        </Grid>
        <Grid item xs={2}>
          <input type="text" onChange={handleFilter} />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            onClick={() => handleOpen()}
            aria-label="add"
            title="add-button"
          >
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      {elements
        .sort((a, b) => b.number - a.number)
        .map((elem) => (
          <Grid key={elem.number} item xs={12} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea
                onClick={() => navigate(`/elements/${elem.number}`)}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={elem.image.url}
                  title={elem.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {`${elem.name} - ${elem.appearance}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {elem.category}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  data-testid="delete"
                  onClick={() => deleteElement(elem.number)}
                >
                  Delete
                </Button>
                <Button size="small" onClick={() => handleOpen(elem)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Overview;
