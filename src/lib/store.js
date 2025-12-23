import { writable } from 'svelte/store';

export const dialogTree = writable({
  nodes: [],
  links: []
});
