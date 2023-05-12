import { FC, useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { FormUser, PacManLoader, UserInfo } from "./components/ui";
import { IUser } from "./interfaces";
import { UserContext } from "./context/user";
import { useUser } from "./hooks";

const App: FC = () => {
  const { usersList, createUsersList } = useContext(UserContext);
  const { dbUsersList, dbUsersError, isDbUsersLoading } = useUser();

  useEffect(() => {
    if (dbUsersList.length > 0 && usersList.length === 0) {
      createUsersList({ users: dbUsersList });
    }
  }, [dbUsersList, createUsersList, usersList]);

  if (isDbUsersLoading)
    return (
      <PacManLoader />
    );
  if (dbUsersError)
    return (
      <Typography
        variant="body1"
        color="warning"
      >{`Error... ${dbUsersError.message}`}</Typography>
    );

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid
        item
        md={5}
        lg={5}
        xl={5}
        sx={{ padding: "0rem 2rem" }}
      >
        <FormUser />
      </Grid>
      <Grid
        item
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        xs={12}
        sm={12}
        md={7}
        lg={7}
        xl={7}
        sx={{ padding: "0rem 2rem" }}
      >
        {usersList.length > 0 && (
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{ textAlign: "center", marginTop: '2rem' }}
            >
              Users List
            </Typography>
            <Grid
              container
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
              width="100%"
            >
              {usersList.map((user: IUser) => (
                <UserInfo key={user.id}  user={user} />
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default App;
