import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          render={({ field }) => <TextField label={label} {...field} />}
          control={control}
          name={name}
          defaultValue=""
          fullWidth
          required={required}
          error={isError}
        />
      </Grid>
    </>
  );
};

export default FormInput;
