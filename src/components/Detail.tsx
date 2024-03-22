import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Element from "../model/Element";
import useElementStore from "../stores/ElementStore";

const Detail = () => {
  const params = useParams();
  const [element, setElement] = useState<Element | undefined>(undefined);
  const { elements } = useElementStore();
  React.useEffect(() => {
    if (params.id)
      setElement(
        elements.find((element) => element.number === parseInt(params.id!))
      );
  }, []);
  return (
    <>
      <Grid container spacing={8}>
        <Grid item xs={15} md={5}>
          <img
            src={element?.image.url} //aratam ai cool ca orice kkt de electroinu de zici ca-i ochij
            alt={element?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Name:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <p>{element?.name || ""}</p>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Details Summary:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <p>{element?.summary || ""}</p>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">
              <b>It was discovered by:</b>
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <p>{element?.discovered_by || ""}</p>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">
            <b>Name coined by</b>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <p>{element?.named_by || ""}</p>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="body1">
            <b>Phase: </b>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <p>{element?.phase || ""}</p>
        </Grid>

        <Grid item xs={2}>
          <Typography variant="body1">
            <b>Category</b>
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <p>{element?.category || ""}</p>
        </Grid>
        <Grid item xs={15} md={5}>
          <img
            src={element?.bohr_model_image} //aratam ai cool ca orice kkt de electroinu de zici ca-i ochij
            alt={element?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
