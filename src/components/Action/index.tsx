import React, { useEffect, FC } from "react";
import adjustLine from "../../utils/adjustLine";
import { Action } from "../../types";
import "./action.css";

interface ActionProps extends Action {
  index: number | string;
}

export const ActionComponent: FC<ActionProps> = ({ id, prev, next, index }) => {
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
    <>
      <div id={`${id}-${index}`} className="action">
        <p>{id}</p>
      </div>
      <div id={`line-${next}`} className="line" />
      <div id={`line-${prev[0]}-${id}`} className="line" />
      <div id={`line-${prev[1]}-${id}`} className="line" />
    </>
  );
};
