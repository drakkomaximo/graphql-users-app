import { Grid, Typography, Button, capitalize, Tooltip } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { IUser } from "../../interfaces/user";
import { GET_USER_BY_ID } from "../../graphqlQueries";
import { genderIcons, statusChip } from "../../utils";

type UserInfoProps = {
  user: IUser;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { email, gender, id, name, status } = user;
  const [triggerFindUser, { data, error }] = useLazyQuery(GET_USER_BY_ID);
  const [userData, setUserData] = useState<IUser | null>(null);

  const showUser = ({ userId }: { userId: number }) => {
    console.log(userId);
    triggerFindUser({
      variables: {
        userId: 1513712,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setUserData(data.user);
    }
  }, [data]);

  if (userData) {
    return (
      <Grid>
        <Typography variant="h6" color="initial">
          {userData.name}
        </Typography>
        <Typography variant="h6" color="initial">
          {userData.email}
        </Typography>
        <Typography variant="h6" color="initial">
          {userData.gender}
        </Typography>
      </Grid>
    );
  }

  if (user === null) return null;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      width="48%"
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
            onClick={() => showUser({ userId: id })}
          >
            Edit Data
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => showUser({ userId: id })}
          >
            Delete Data
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
