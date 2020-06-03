import { crossfade, scale } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

export const transition = crossfade({
	delay: 0,
	duration: 500,
	fallback: scale,
	easing: cubicInOut
});