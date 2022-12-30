import React from "react";
import { FC } from "react";
import { Target } from "../../types.ts";
import  './target.css';

interface TargetProps extends Target {
	index: number | string
}

export const TargetComponent: FC<TargetProps> = ({id, name, index}) => {
    return (
    <div id={`${id}-${index}`} className="target" >
        <p>{name}</p>
    </div>
    )
}