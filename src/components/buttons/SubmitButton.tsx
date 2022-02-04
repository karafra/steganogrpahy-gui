import React, { MouseEvent } from "react";
import Icon from "@mui/icons-material/SendSharp";
import styles from "components/buttons/scss/Buttons.module.scss";

export interface SubmitButtonProps {
  onSuccessCallback: (event: MouseEvent<HTMLElement>) => void | undefined | void[];
  label: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <>
      <div
        className={`${styles.file} ${styles["file--upload"]}`}
        onClick={(event) => props.onSuccessCallback(event)}
      >
        <label htmlFor="upload">
          {props.label} <Icon id="upload" fontSize="large"/>
        </label>
      </div>
    </>
  );
};

export default SubmitButton;
