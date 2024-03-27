import { Button, Grid, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {} from "../model/Element";
import useElementStore from "../stores/ElementStore";
interface Inputs {
  name: string;
  appearance: string;
  discovered_by: string;
  named_by: string;
  phase: string;
  bohr_model_image: string;
  summary: string;
  category: string;
  image_url: string;
}

const ElementDialog = () => {
  const { opened, handleClose, addElement, editElement, selectedElement } =
    useElementStore();
  const { register, handleSubmit, reset } = useForm<Inputs>({});

  useEffect(() => {
    reset(selectedElement);
  }, [selectedElement]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (selectedElement) {
      editElement({
        ...selectedElement,
        ...data,
      });
    } else {
      addElement({
        number: Math.floor(Math.random() * 1000) + 119,
        image: { url: data.image_url },
        ...data,
      });
    }
    reset();
    handleClose();
  };

  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      fullScreen={false}
    >
      <form style={{ padding: 16 }} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Add a new element</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Appearance"
              fullWidth
              {...register("appearance", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Summary"
              fullWidth
              {...register("summary", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Discovered by"
              fullWidth
              {...register("discovered_by", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Named By:"
              fullWidth
              {...register("named_by", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TextField
                label="Phase:"
                fullWidth
                {...register("phase", { required: true })}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <TextField
                label="Image URL:"
                fullWidth
                {...register("image_url", { required: true })}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
            <Button variant="contained" type="submit" sx={{ mr: 2 }}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

export default ElementDialog;
