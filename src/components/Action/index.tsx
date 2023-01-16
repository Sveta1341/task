import React, { useEffect, FC } from "react";
import { css } from "@emotion/css";
import adjustLine from "../../utils/adjustLine";
import { Action } from "../../types";

interface ActionProps extends Action {
  index: number | string;
}

const line = css`
  position: absolute;
  width: 1px;
  background-color: black;
  z-index: 1;
`;
const circle = css`
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 14px;
`;

export const ActionNode: FC<ActionProps> = ({ id, prev, next, index }) => {
  useEffect(() => {
    const act = document.getElementById(`${id}-${index}`);
    const line1 = document.getElementById(`line-${next}`);
    const line2 = document.getElementById(`line-${prev[0]}-${id}`);
    const line3 = document.getElementById(`line-${prev[1]}-${id}`);
    const from = document.getElementById(`${prev[0]}-${index}`);
    const from2 = document.getElementById(`${prev[1]}-${index}`);
    const to = document.getElementById(`${next}-${index}`);

    adjustLine(act, to, line1);
    adjustLine(act, from, line2);

    if (from2) {
      adjustLine(act, from2, line3);
    }
  }, []);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        margin-right: 30px;
      `}
    >
      <div id={`${id}-${index}`} className={circle} />
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          border: 1.5px solid black;
          border-radius: 40px;
          height: 30px;
          z-index: 10;
          background-color: aqua;
        `}
      >
        <p>{id}</p>
      </div>
      <div className={circle} />
      <div id={`line-${next}`} className={line} />
      <div id={`line-${prev[0]}-${id}`} className={line} />
      <div id={`line-${prev[1]}-${id}`} className={line} />
    </div>
  );
};
