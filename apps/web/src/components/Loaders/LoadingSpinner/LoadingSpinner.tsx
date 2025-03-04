import React from "react";
import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loading_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
