import { Grid, Typography, Button, capitalize, Tooltip } from "@mui/material";
import { FC, useContext } from "react";
import { IUser } from "../../interfaces/user";
import { genderIcons, notification, statusChip } from "../../utils";
import { useUser } from "../../hooks";
import { UserContext } from "../../context/user";

type UserInfoProps = {
  user: IUser;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { setUserToUpdate } = useContext(UserContext);
  const { email, gender, id, name, status } = user;
  const { triggerDeleteOldUser, isDeletingUser } = useUser();

  const deleteOldUser = ({ id }: { id: number }) => {
    triggerDeleteOldUser({
      variables: {
        id,
      },
    });
    notification({
      text: "Processando...",
      type: "warning",
    });
  };

  if (user === null) return null;

  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      item
      xs={12}
      sm={12}
      md={12}
      lg={6}
      xl={6}
      sx={{
        border: `1px solid ${gender === "male" ? "blue" : "red"}`,
        padding: "1rem",
        borderRadius: "10px",
        margin: "1rem 0rem",
      }}
    >
      <Grid
        item
        display="flex"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Tooltip title={capitalize(name)}>
          <Typography
            variant="body2"
            color="initial"
            sx={{ fontWeight: "900" }}
          >
            {capitalize(name).slice(0, 10)}
          </Typography>
        </Tooltip>
        {genderIcons({ gender })}
        {statusChip({ status })}
      </Grid>
      <Grid item>
        <Grid
          display="flex"
          width="100%"
          justifyContent="center"
          sx={{ padding: "1rem 0rem" }}
        >
          <Tooltip title={email.toUpperCase()}>
            <Typography variant="body1" color="initial">
              {email.toUpperCase().slice(0, 20)}
            </Typography>
          </Tooltip>
        </Grid>
        <Grid display="flex" width="100%" justifyContent="space-around">
          <Button
            variant="contained"
            color="warning"
            onClick={() =>
              setUserToUpdate({ user: { email, gender, id, name, status } })
            }
            disabled={isDeletingUser}
          >
            Edit Data
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteOldUser({ id })}
            disabled={isDeletingUser}
          >
            Delete Data
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
