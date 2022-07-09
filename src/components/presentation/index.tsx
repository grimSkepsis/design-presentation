import { Pagination, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Slide } from "./types";
import styles from "./presentation.module.scss";

type Props = {
  slides: Slide[];
};

export function Presentation({ slides }: Props) {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);

  const { title, content } = slides[currSlideIdx];

  function changePage(_: ChangeEvent<unknown>, pageNum: number) {
    setCurrSlideIdx(pageNum - 1);
  }

  return (
    <div className={styles.presentationWrapper}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      <div className={styles.contentWrapper}>{content}</div>
      <div className={styles.footer}>
        <Pagination
          count={slides.length}
          color="primary"
          onChange={changePage}
        />
      </div>
    </div>
  );
}
