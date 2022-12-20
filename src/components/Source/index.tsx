import React from "react";
import { FC } from "react";
import { Source } from "../../types.ts";
import "./source.css"

interface SourceProps extends Source {
	index: number | string
}

export const SourceComponent: FC<SourceProps> = ({id, name ,index}) => {
    return (
    <div id={`${id}-${index}`} className="source">
        <p>{name}</p>
    </div>
    )
}