import styles from "@/styles/TypeLabel.module.scss";
import classNames from "classnames";

function TypeLabel({ type }: { type: string }) {
  return (
    <li className={classNames(styles.container, styles[`${type}`])}>{type}</li>
  );
}

export default TypeLabel;
