import { css } from "@emotion/css";
import React, { FC } from "react";
import { Source } from "../../types";

interface SourceProps extends Source {
  index: number | string;
}

export const SourceNode: FC<SourceProps> = ({ id, name, index }) => {
  return (
    <div
      id={`${id}-${index}`}
      className={css`
        width: 200px;
        border: 1.5px solid black;
        margin: 30px;
        height: 50px;
        background-color: aquamarine;
        z-index: 10;
      `}
    >
      <p>{name}</p>
    </div>
  );
};
