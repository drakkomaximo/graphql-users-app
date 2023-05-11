import { FC } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import GET_USERS from "./graphqlServices/getUsers";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const App: FC = () => {
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading)
    return (
      <Typography variant="body1" color="primary">
        loading...
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
      {data.users.nodes.map((user: any) => (
        <Typography key={user.id} variant="h1" color="secondary" sx={{ fontSize: 20 }}>
          {user.name} - {user.email} - {user.gender} - {user.status}
        </Typography>
      ))}
    </Grid>
  );
};

export default App;
