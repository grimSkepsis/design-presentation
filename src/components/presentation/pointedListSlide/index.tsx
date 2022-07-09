import styles from "./pointed-list-slide.module.scss";
type Props = {
  leftList?: string[];
  rightList?: string[];
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
};
export function PointedListSlide({
  leftList,
  rightList,
  leftContent,
  rightContent,
}: Props) {
  return (
    <div className={styles.wrapper}>
      {leftList && (
        <ul>
          {leftList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
