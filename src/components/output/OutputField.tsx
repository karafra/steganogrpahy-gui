import React from "react";
import styles from "components/output/scss/Output.module.scss";

export interface OutputFieldProps {
  payload: string;
}

const OutputField = (props: OutputFieldProps) => {
  if (props.payload.length) {
    return (
      <div className={styles.container}>
          <div className={styles.outputTitle}> Output </div>
          <div className={styles.payload}>
            {props.payload}
          </div>
      </div>
    );
  }
  return <></>
};

export default OutputField;
