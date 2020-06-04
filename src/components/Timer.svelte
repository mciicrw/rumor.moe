<script>
	import { time } from '../helpers/stores.js';

	export let target;
	export let text;

	const ONE_DAY    = 24 * 60 * 60;
	const ONE_HOUR   = 60 * 60;
	const ONE_MINUTE = 60;

	const pluralize = (value, unit) => {
		if (value === 1) return unit;
		return `${unit}s`;
	}

	let highestUnit = 'seconds';

	$: remaining = new Date(target) - $time;
	$: totalSeconds = Math.floor(remaining) / 1000;
	$: days = Math.floor(totalSeconds / ONE_DAY);
	$: hours = Math.floor(totalSeconds % ONE_DAY / ONE_HOUR);
	$: minutes = Math.floor(totalSeconds % ONE_HOUR / ONE_MINUTE);
	$: seconds = Math.floor(totalSeconds % ONE_MINUTE);
	$: {
		if (seconds > 0) {
			highestUnit = 'seconds';
		}
		if (minutes > 0) {
			highestUnit = 'minutes';
		}
		if (hours > 0) {
			highestUnit = 'hours'
		}
		if (days > 0) {
			highestUnit = 'days';
		}
	}
</script>

<div class="timer">
	{#if text}
		<div class="timer-header">
			{text}
		</div>
	{/if}
	{#if days > 0}
		<div class="value" class:important={highestUnit === 'days'}>
			{days}
		</div>
		<div class="unit" class:important={highestUnit === 'days'}>
			{pluralize(days, 'day')}
		</div>
	{/if}
	{#if days > 0 || hours > 0}
		<div class="value" class:important={highestUnit === 'hours'}>
			{hours}
		</div>
		<div class="unit" class:important={highestUnit === 'hours'}>
			{pluralize(hours, 'hour')}
		</div>
	{/if}
	{#if days > 0 || hours > 0 || minutes > 0}
		<div class="value" class:important={highestUnit === 'minutes'}>
			{minutes}
		</div>
		<div class="unit" class:important={highestUnit === 'minutes'}>
			{pluralize(minutes, 'minute')}
		</div>
	{/if}
	{#if days > 0 || hours > 0 || minutes > 0 || seconds > 0}
		<div class="value" class:important={highestUnit === 'seconds'}>
			{seconds}
		</div>
		<div class="unit" class:important={highestUnit === 'seconds'}>
			{pluralize(seconds, 'second')}
		</div>
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
		font-weight: 300;
		font-variant-numeric: tabular-nums;
	}
	.unit {
		text-align: left;
		font-weight: 300;
	}
	.important {
		font-weight: 400;
	}
</style>
