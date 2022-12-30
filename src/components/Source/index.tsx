import React, { FC } from "react";
import { Source } from "../../types";
import "./source.css";

interface SourceProps extends Source {
  index: number | string;
}

export const SourceComponent: FC<SourceProps> = ({ id, name, index }) => (
  <div id={`${id}-${index}`} className="source">
    <p>{name}</p>
  </div>
);
