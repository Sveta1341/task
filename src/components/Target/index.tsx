import React, { FC } from "react";
import { css } from "@emotion/css";
import { Target } from "../../types";

interface TargetProps extends Target {
  index: number | string;
}

export const TargetNode: FC<TargetProps> = ({ id, name, index }) => {
  return (
    <div
      id={`${id}-${index}`}
      className={css`
        width: 200px;
        border: 1.5px solid black;
        margin: 10px;
        height: 50px;
        background-color: aquamarine;
        z-index: 10;
        position: relative;
      `}
    >
      <p>{name}</p>
    </div>
  );
};
