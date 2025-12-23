<script>
  export let node;
</script>

<g transform="translate({node.x}, {node.y})">
  <rect width="160" height="60" rx="10" ry="10" fill="#e0e0e0" />
  <text x="10" y="35">{node.text}</text>
</g>
