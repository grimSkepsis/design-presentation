import vanillaExample from "./vanilla.png";
import vainllaExample2 from "./vanilla2.png";
import styles from "./vanilla.module.scss";

type Props = {
  state: number;
};
export function VanillaVisualCard({ state }: Props) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.card}
        src={state < 4 ? vanillaExample : vainllaExample2}
        alt="Vanilla visual card"
      />
      {state >= 1 && (
        <div className={styles.titleSectionHighlight}>
          <div className={styles.label}>Title Section</div>
        </div>
      )}
      {state >= 2 && (
        <div className={styles.visualSectionHighlight}>
          <div className={styles.label}>Visual Section</div>
        </div>
      )}
      {state >= 3 && (
        <div className={styles.summarySectionHighlight}>
          <div className={styles.label}>Summary Section</div>
        </div>
      )}
    </div>
  );
}
