import { Grid, TextField, Typography } from "@mui/material";
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={element?.bohr_model_image}
            alt={element?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Appearence:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField disabled={true} value={element?.appearance || ""} />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Dicovered By:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField
                disabled={true}
                value={element?.discovered_by || ""}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
