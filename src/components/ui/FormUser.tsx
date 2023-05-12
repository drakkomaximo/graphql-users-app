import { Button, TextField, FormLabel } from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "../../interfaces";
import { initValues, userValidationSchema } from "../../utils";
import UserSelect from "./UserSelect";
import { useUser } from "../../hooks";

export const FormUser: FC = () => {
  const { triggerCreateNewUser } = useUser();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: initValues,
    resolver: zodResolver(userValidationSchema),
  });
  const onSubmit = (data: IUser) => {
    triggerCreateNewUser({
      variables: {
        ...data,
      },
    });
    reset(initValues);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <FormLabel component="legend">Create New User</FormLabel>
      <Controller
        name={"name"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            sx={{ marginTop: "1rem" }}
            onChange={onChange}
            value={value}
            label={"name"}
            error={!!(errors && errors.name)}
            helperText={errors && errors.name ? errors.name.message : ""}
          />
        )}
      />
      <Controller
        name={"email"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            sx={{ marginTop: "1rem" }}
            onChange={onChange}
            value={value}
            label={"email"}
            error={!!(errors && errors.email)}
            helperText={errors && errors.email ? errors.email.message : ""}
          />
        )}
      />
      <Controller
        name={"gender"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <UserSelect
            error={!!(errors && errors.gender)}
            errorMessage={errors && errors.gender ? errors.gender.message : ""}
            onChange={onChange}
            typeSelect="gender"
            value={value}
          />
        )}
      />
      <Controller
        name={"status"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <UserSelect
            error={!!(errors && errors.status)}
            errorMessage={errors && errors.status ? errors.status.message : ""}
            onChange={onChange}
            typeSelect="status"
            value={value}
          />
        )}
      />
      <Button
        sx={{ marginTop: "1rem" }}
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        Submit
      </Button>
    </form>
  );
};
