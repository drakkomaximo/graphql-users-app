import {
  Button,
  TextField,
  FormLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser, RadioOptionsTypes } from "../../interfaces";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_USER } from "../../graphqlQueries";
import { radioOptions, userValidationSchema } from "../../utils";

/* type FormUserProps = {}; */

export const FormUser: FC /* <FormUserProps> */ = () => {
  const [triggerCreateNewUser, {error: createNewUserError}] = useMutation(CREATE_NEW_USER);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IUser>({
    resolver: zodResolver(userValidationSchema),
  });
  const onSubmit = (data: IUser) => {
    triggerCreateNewUser({
      variables: {
        ...data,
      },
    });

    if(createNewUserError){
      console.log(createNewUserError.message)
      return
    }
    
    reset();
  };

  const generateRadioOptions = ({ type }: { type: RadioOptionsTypes }) => {
    return radioOptions({ type }).map((singleOption) => (
      <FormControlLabel
        key={singleOption.id}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
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
          <FormControl error={!!(errors && errors.gender)}>
            <FormLabel id="gender-radio">Gender</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              {generateRadioOptions({ type: "gender" })}
            </RadioGroup>
            {errors && errors.gender && (
              <FormHelperText>{errors.gender.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
      <Controller
        name={"status"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl error={!!(errors && errors.status)}>
            <FormLabel id="status-radio">Status</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              {generateRadioOptions({ type: "status" })}
            </RadioGroup>
            {errors && errors.status && (
              <FormHelperText>{errors.status.message}</FormHelperText>
            )}
          </FormControl>
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
