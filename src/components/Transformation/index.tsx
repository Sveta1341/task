import React from "react";
import { FC } from "react";
import { Transformation } from "../../types.ts";
import { ActionComponent } from "../Action";
import { SourceComponent } from "../Source";
import { TargetComponent } from "../Target";
import { v4 as uuidv4 } from 'uuid';

export const TransformationComponent: FC<Transformation> = ({sources,target,actions}) => {
	const index = uuidv4();
    return (
    <div className="transformation">
        <div className="sources">
        {sources.map((source)=> (<SourceComponent index={index} key={source.id} id={source.id} name={source.name}/>))}
        </div>
        <div className="actions">
        {actions.map((action)=> <ActionComponent index={index} key={action.id} id={action.id} prev={action.prev} next={action.next}/>)}
        </div>
        <div className="targets">
        <TargetComponent index={index} id={target.id} name={target.name}/> 
        </div>
    </div>
    )
}