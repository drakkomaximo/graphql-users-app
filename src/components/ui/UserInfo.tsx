import { Grid, Typography, Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { IUser } from "../../interfaces/user";
import { GET_USER_BY_ID } from "../../graphqlQueries";

type UserInfoProps = {
  user: IUser;
};

export const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { email, gender, id } = user;
  const [triggerFindUser, { data, error }] =
    useLazyQuery(GET_USER_BY_ID);
  const [userData, setUserData] = useState<IUser | null>(null);

  const showUser = ({ userId }: { userId: number }) => {
    console.log(userId)
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
          {userData.email}
        </Typography>
        <Typography variant="h6" color="initial">
          {userData.gender}
        </Typography>
      </Grid>
    );
  }

  if (user === null) return null;
  if (error) return <h1>Error: {error.message}</h1>

  return (
    <Grid>
      <Typography variant="h6" color="initial">
        {email}
      </Typography>
      <Typography variant="h6" color="initial">
        {gender}
      </Typography>
      <Button variant="contained" onClick={() => showUser({ userId: id })}>
        Show Data
      </Button>
    </Grid>
  );
};
