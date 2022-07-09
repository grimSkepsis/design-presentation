import { Forward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import styles from "./good-design-lib.module.scss";

export function GoodDesignLibrarySlide() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionTitles}>
        <Typography variant="h5" component="h3" gutterBottom>
          Base
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Variants
        </Typography>
      </div>

      <div className={styles.exampleContainer}>
        <div>
          <Button variant="contained">Vanilla</Button>
        </div>
        <Forward />
        <div className={styles.goodExamples}>
          <Button variant="contained" style={{ borderRadius: "2rem" }}>
            Rounder
          </Button>

          <Button variant="contained" style={{ boxShadow: "5px 10px #888888" }}>
            Shadier
          </Button>

          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            disableRipple
          >
            Quieter
          </Button>

          <Button variant="contained" className={styles.liveButton}>
            Lively-er
          </Button>
        </div>
      </div>
    </div>
  );
}
