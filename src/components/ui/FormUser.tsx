import { Button, TextField, Typography } from "@mui/material";
import { FC, useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "../../interfaces";
import { initValues, userValidationSchema } from "../../utils";
import { useUser } from "../../hooks";
import { UserContext } from "../../context/user";
import { UserSelect } from ".";

export const FormUser: FC = () => {
  const { userToUpdate } = useContext(UserContext);
  const { triggerCreateNewUser, triggerUpdateOldUser } = useUser();
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: initValues,
    resolver: zodResolver(userValidationSchema),
  });
  const onSubmit = (data: IUser) => {
    if (userToUpdate !== null) {
      triggerUpdateOldUser({
        variables: {
          ...data,
          id: userToUpdate.id,
        },
      });
    } else {
      triggerCreateNewUser({
        variables: {
          ...data,
        },
      });
    }
    reset(initValues);
  };

  useEffect(() => {
    if (userToUpdate !== null) {
      setValue("email", userToUpdate.email);
      setValue("gender", userToUpdate.gender);
      setValue("name", userToUpdate.name);
      setValue("status", userToUpdate.status);
    }else{
      setValue("email", '');
      setValue("gender", '');
      setValue("name", '');
      setValue("status", '');
    }
  }, [userToUpdate, setValue]);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        sx={{ textAlign: "center", marginTop: "2rem" }}
      >
        {userToUpdate !== null ? "Update Old User" : "Create New User"}
      </Typography>
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
        {userToUpdate !== null ? "Update" : "Create"}
      </Button>
    </form>
  );
};
