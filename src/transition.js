import { crossfade, scale } from 'svelte/transition';

export const transition = crossfade({
	duration: 500,
	fallback: scale
});