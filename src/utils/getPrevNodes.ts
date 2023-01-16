import { Action, Mapping, Source } from "../types";

export const getPrevNodes = (
  mapping: Mapping,
  nodes: (Source | Action)[],
  currentNode: Source | Action,
): (Source | Action)[] => {
  const prevNodes: (Source | Action)[] = [];

  if ("prev" in currentNode) {
    // eslint-disable-next-line array-callback-return
    currentNode.prev.map((id) => {
      const actions = mapping.actions.filter((action) => action.id === id);
      const sources = mapping.sources.filter((source) => source.id === id);
      const nextNode = [...sources, ...actions][0];

      prevNodes.push(
        ...getPrevNodes(mapping, [...nodes, currentNode], nextNode),
      );
    });
  } else {
    prevNodes.push(
      ...mapping.sources.filter((source) => source.id === currentNode.id),
    );
  }

  return [...nodes, ...prevNodes];
};
