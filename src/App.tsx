import { ColorModeContext, Presentation } from "./components/presentation";
import { getSlides } from "./data";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useMemo, useState } from "react";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Presentation slides={getSlides()} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
