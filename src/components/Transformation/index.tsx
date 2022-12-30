import React, { FC } from "react";

import { v4 as uuidv4 } from "uuid";
import { Transformation } from "../../types";
import { ActionComponent } from "../Action";
import { SourceComponent } from "../Source";
import { TargetComponent } from "../Target";

export const TransformationComponent: FC<Transformation> = ({
  sources,
  target,
  actions,
}) => {
  const index = uuidv4();
  return (
    <div className="transformation">
      <div className="sources">
        {sources.map((source) => (
          <SourceComponent
            index={index}
            key={source.id}
            id={source.id}
            name={source.name}
          />
        ))}
      </div>
      <div className="actions">
        {actions.map((action) => (
          <ActionComponent
            index={index}
            key={action.id}
            id={action.id}
            prev={action.prev}
            next={action.next}
          />
        ))}
      </div>
      <div className="targets">
        <TargetComponent index={index} id={target.id} name={target.name} />
      </div>
    </div>
  );
};
