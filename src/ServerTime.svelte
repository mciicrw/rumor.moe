<script>
	import { time } from './stores.js';
	import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

	const timeZone = 'America/Los_Angeles';
	const timePattern = 'MMMM do, HH:mm:ss';
	const zonePattern = 'OOOO'

	$: utcTime = zonedTimeToUtc($time);
	$: zonedTime = utcToZonedTime(utcTime, timeZone);
	$: displayTime = format(zonedTime, timePattern, { timeZone });
	$: displayZone = format(zonedTime, zonePattern, { timeZone });
</script>

<div>
	<h2>
		Current Server Time
	</h2>
	<h1>
		{displayTime}
	</h1>
	<h4>
		{displayZone}, 24 hour time
	</h4>
</div>

<style>
	div {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		background: rgba(255,255,255,.5);
		margin: 1rem 0;
		padding: .5rem 0 1rem;
		text-align: center;
	}
	h1, h2, h4 {
		font-weight: 400;
		margin: 0;
	}
</style>