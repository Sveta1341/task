import React, { FC } from "react";
import { Target } from "../../types";
import "./target.css";

interface TargetProps extends Target {
  index: number | string;
}

export const TargetComponent: FC<TargetProps> = ({ id, name, index }) => (
  <div id={`${id}-${index}`} className="target">
    <p>{name}</p>
  </div>
);
