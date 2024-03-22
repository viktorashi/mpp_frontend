import AddIcon from "@mui/icons-material/Add";
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
import useDogStore from "../stores/ElementStore";

const Overview = () => {
  const navigate = useNavigate();
  const { elements, deleteElement, handleOpen } = useDogStore();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display={"flex"}>
        <Grid item xs={10}>
          <Typography variant="h4">Mendeleev pe zona</Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleOpen()} aria-label="add">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      {elements.map((elem) => (
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
              <Button size="small" onClick={() => deleteElement(elem.number)}>
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
