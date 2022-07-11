import { Forward } from "@mui/icons-material";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./bad-design-lib.module.scss";
import example from "./bad-design-code.png";

type Props = {
  state?: number;
};

export function BadDesignLibrarySlide({ state = 0 }: Props) {
  const [value, setValue] = useState(0);
  const [classApplied, setClassApplied] = useState(false);
  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  useEffect(() => {
    setClassApplied(true);
    const timeout = setTimeout(() => {
      setClassApplied(false);
    }, 500);

    return () => {
      clearInterval(timeout);
    };
  }, [value]);

  return (
    <div className={styles.wrapper}>
      {state === 1 && <img src={example} alt="bad-example-code" />}
      <div className={styles.exampleContainer}>
        <div>
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleChange}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
        <Forward />
        <div className={styles.goodExamples}>
          <Tabs
            aria-label="basic tabs example"
            value={value}
            onChange={handleChange}
            className={`${styles.newTabAnimation} ${
              classApplied ? "tab-select" : ""
            }`}
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
