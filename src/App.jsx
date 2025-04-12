import { Button, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Typography
        variant="h1"
        sx={{
          color: "red",
        }}>
        Welcome
      </Typography>
      <Button
        onClick={() => alert("Button is clicked")}
        size="medium"
        color="info"
        sx={{
          margin: 3,
        }}
        variant="contained">
        Get Starts
      </Button>
    </div>
  );
}

export default App;
