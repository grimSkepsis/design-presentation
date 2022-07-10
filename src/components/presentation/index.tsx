import { IconButton, Pagination, Typography, useTheme } from "@mui/material";
import { ChangeEvent, createContext, useContext, useState } from "react";
import { Slide } from "./types";
import styles from "./presentation.module.scss";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useKeyPress } from "../../hooks/useKeyPress";

type Props = {
  slides: Slide[];
};

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function Presentation({ slides }: Props) {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);

  const { title, content } = slides[currSlideIdx];

  function changePage(_: ChangeEvent<unknown>, pageNum: number) {
    setCurrSlideIdx(pageNum - 1);
  }
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  useKeyPress(["a", "d", "D", "d", "t", "T"], (key: string) => {
    if ((key === "a" || key === "A") && currSlideIdx > 0) {
      setCurrSlideIdx(currSlideIdx - 1);
    } else if (
      (key === "d" || key === "D") &&
      currSlideIdx < slides.length - 1
    ) {
      setCurrSlideIdx(currSlideIdx + 1);
    } else if (key === "t" || key === "T") {
      colorMode.toggleColorMode();
    }
  });

  return (
    <main className={`${styles.presentationWrapper}`}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      <div className={styles.contentWrapper}>{content}</div>
      <div className={styles.footer}>
        <Pagination
          count={slides.length}
          color="primary"
          onChange={changePage}
          page={currSlideIdx + 1}
        />
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>
    </main>
  );
}
