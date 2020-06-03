<script>
	import { time } from './stores.js';

	export let target;
	export let text;

	const ONE_DAY    = 24 * 60 * 60;
	const ONE_HOUR   = 60 * 60;
	const ONE_MINUTE = 60;

	const pluralize = (value, unit) => {
		if (value === 1) return unit;
		return `${unit}s`;
	}

	$: remaining = new Date(target) - $time;
	$: totalSeconds = Math.floor(remaining) / 1000;
	$: days = Math.floor(totalSeconds / ONE_DAY);
	$: hours = Math.floor(totalSeconds % ONE_DAY / ONE_HOUR);
	$: minutes = Math.floor(totalSeconds % ONE_HOUR / ONE_MINUTE);
	$: seconds = Math.floor(totalSeconds % ONE_MINUTE);
</script>

<div class="timer">
	{#if text}
		<div class="timer-header">
			{text}
		</div>
	{/if}
	{#if days > 0}
		<div class="value">{days}</div>
		<div class="unit">{pluralize(days, 'day')}</div>
	{/if}
	{#if days > 0 || hours > 0}
		<div class="value">{hours}</div>
		<div class="unit">{pluralize(hours, 'hour')}</div>
	{/if}
	{#if days > 0 || hours > 0 || minutes > 0}
		<div class="value">{minutes}</div>
		<div class="unit">{pluralize(minutes, 'minute')}</div>
	{/if}
	{#if days > 0 || hours > 0 || minutes > 0 || seconds > 0}
		<div class="value">{seconds}</div>
		<div class="unit">{pluralize(seconds, 'second')}</div>
	{/if}
</div>

<style>
	.timer {
		display: grid;
		grid-column-gap: 3px;
		grid-template-columns: 2em 1fr;
	}
	.timer-header {
		grid-column: span 2;
	}
	.value {
		text-align: right;
	}
	.unit {
		text-align: left;
	}
</style>
