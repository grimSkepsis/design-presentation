import newEx from "./newExample.png";
import newEx2 from "./newExample2.png";
import styles from "./newExample.module.scss";

type Props = {
  state: number;
};

export function NewExample({ state }: Props) {
  return (
    <div className={styles.wrapper}>
      {state > 6 ? (
        <img
          className={styles.newCard}
          src={newEx2}
          alt="New example cards, more variations"
        />
      ) : (
        <>
          <img className={styles.newCard} src={newEx} alt="New example cards" />
          {state > 0 && (
            <div className={styles.linkSectionHighlight}>
              <div className={styles.label}>Link Section</div>
            </div>
          )}
          {state > 1 && (
            <div className={styles.summarySectionHighlight}>
              <div className={styles.label}>Summary Section</div>
            </div>
          )}

          {state > 2 && (
            <>
              <div
                className={`${styles.headerSectionHighlight} ${styles.left}`}
              >
                <div className={styles.label}>Title Section</div>
              </div>
              <div
                className={`${styles.headerSectionHighlight} ${styles.center}`}
              >
                <div className={styles.label}>Title Section</div>
              </div>
              <div
                className={`${styles.headerSectionHighlight} ${styles.right}`}
              >
                <div className={styles.label}>Title Section</div>
              </div>
            </>
          )}
          {state > 3 && (
            <>
              <div
                className={`${styles.filterSectionHighlight} ${styles.left}`}
              >
                <div className={styles.label}>Filter Section</div>
              </div>
              <div
                className={`${styles.filterSectionHighlight} ${styles.center}`}
              >
                <div className={styles.label}>Filter Section</div>
              </div>
              <div
                className={`${styles.filterSectionHighlight} ${styles.right}`}
              >
                <div className={styles.label}>Filter Section</div>
              </div>
            </>
          )}

          {state > 5 && (
            <>
              <div
                className={`${styles.visualSectionHighlight} ${styles.left}`}
              >
                <div className={styles.label}>Visual Section</div>
              </div>
              <div
                className={`${styles.visualSectionHighlight} ${styles.center}`}
              >
                <div className={styles.label}>Visual Section</div>
              </div>
              <div
                className={`${styles.visualSectionHighlight} ${styles.right}`}
              >
                <div className={styles.label}>Visual Section</div>
              </div>
            </>
          )}

          {state > 4 && (
            <div
              className={`${styles.legendSectionHighlight} ${styles.center}`}
            >
              <div className={styles.label}>Legend Section</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
