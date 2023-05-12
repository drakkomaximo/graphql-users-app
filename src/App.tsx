import { FC, useContext, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { FormUser, UserInfo } from "./components/ui";
import { IUser } from "./interfaces";
import { UserContext } from "./context/user";
import { useUser } from "./hooks";

const App: FC = () => {
  const { usersList, createUsersList } = useContext(UserContext);
  const { dbUsersList, dbUsersError, isDbUsersLoading } = useUser();

  useEffect(() => {
    if (dbUsersList.length > 0) {
      createUsersList({ users: dbUsersList });
    }
  }, [dbUsersList, createUsersList]);

  if (isDbUsersLoading)
    return (
      <Typography variant="body1" color="primary">
        loading... fff
      </Typography>
    );
  if (dbUsersError)
    return (
      <Typography
        variant="body1"
        color="warning"
      >{`Error... ${dbUsersError.message}`}</Typography>
    );

  return (
    <Grid container display="flex" justifyContent="center" width="100vw">
      <Grid
        item
        xs={5}
        sm={5}
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
        xs={6}
        sm={6}
        md={6}
        lg={6}
        xl={6}
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
              variant="h1"
              color="primary"
              sx={{ textAlign: "center" }}
            >
              Users List
            </Typography>
            <Grid
              container
              display="flex"
              flexDirection="row"
              flexWrap='wrap'
              justifyContent="space-between"
              width="100%"
            >
              {usersList.map((user: IUser) => (
                <UserInfo key={user.id} user={user} />
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default App;
