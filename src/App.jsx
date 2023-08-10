import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Add from "./components/Add";

function App() {
  const [mode, setMode]= useState('light');
  const themeMode = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <Box>
        <CssBaseline />
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add mode={mode}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
