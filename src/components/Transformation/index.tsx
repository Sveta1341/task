import { css } from "@emotion/css";
import React, { FC } from "react";

import { v4 as uuidv4 } from "uuid";
import { Transformation } from "../../types";
import { ActionNode } from "../Action";
import { SourceNode } from "../Source";
import { TargetNode } from "../Target";

export const TransformationNode: FC<Transformation> = ({
  sources,
  target,
  actions,
}) => {
  const index = uuidv4();
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        margin: 20px;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {sources.map((source) => (
          <SourceNode
            index={index}
            key={source.id}
            id={source.id}
            name={source.name}
          />
        ))}
      </div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        `}
      >
        {actions.map((action) => (
          <ActionNode
            index={index}
            key={action.id}
            id={action.id}
            prev={action.prev}
            next={action.next}
          />
        ))}
      </div>
      <div className="targets">
        <TargetNode index={index} id={target.id} name={target.name} />
      </div>
    </div>
  );
};
