export function addNode(tree, x, y) {
  const id = crypto.randomUUID();
  tree.nodes.push({
    id,
    x,
    y,
    text: 'Новая реплика'
  });
  return id;
}

export function addLink(tree, sourceId, targetId) {
  tree.links.push({
    id: crypto.randomUUID(),
    source: sourceId,
    target: targetId
  });
}
