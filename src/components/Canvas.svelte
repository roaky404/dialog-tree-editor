<script>
  import { dialogTree } from '../lib/store';
  import Node from './Node.svelte';
  import Link from './Link.svelte';

  let tree;
  dialogTree.subscribe(v => tree = v);

  function getNode(id) {
    return tree.nodes.find(n => n.id === id);
  }
</script>

<svg width="100%" height="100%">
  {#each tree.links as link}
    <Link source={getNode(link.source)} target={getNode(link.target)} />
  {/each}

  {#each tree.nodes as node}
    <Node node={node} />
  {/each}
</svg>
