import { Action, Mapping, Source, Transformation } from "../types.ts";
import { getPrevNodes } from "./getPrevNodes";


export const getTransformations = (mapping: Mapping): Transformation[] => {
    const transformations: Transformation[] = [];

    mapping.targets.forEach((target) => {
        const lastAction = mapping.actions.find((_) => _.next === target.id);

        if (lastAction) {
            const prevNodes = getPrevNodes(mapping, [], lastAction);
            const uniqueArray = prevNodes.filter(function(item, pos) {
                return prevNodes.indexOf(item) == pos;
            })
            const actionsFiltered: Action[] = uniqueArray.filter((prevNode) => 'prev' in prevNode) as Action[];
            const sources: Source[] = uniqueArray.filter((prevNode) => 'name' in prevNode) as Source[];
            const actions = actionsFiltered.reverse();

            transformations.push({
                actions,
                sources,
                target,
            });
        }
    });

    return transformations;
};