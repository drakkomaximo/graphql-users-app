import { FC } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "./graphqlQueries";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { FormUser, UserInfo } from "./components/ui";
import { IUser } from "./interfaces";

const App: FC = () => {
  const active = true;
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading)
    return (
      <Typography variant="body1" color="primary">
        loading... fff
      </Typography>
    );
  if (error)
    return (
      <Typography
        variant="body1"
        color="warning"
      >{`Error... ${error.message}`}</Typography>
    );

  return (
    <Grid>
      {active ? (
        <FormUser />
      ) : (
        <>
          {data.users.nodes.map((user: IUser) => (
            <UserInfo key={user.id} user={user} />
          ))}
        </>
      )}
    </Grid>
  );
};

export default App;
