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
		text-align: center;
		background: rgba(255,255,255,.5);
		margin: 1rem 0;
	}
	h1, h2, h4 {
		font-weight: 400;
		margin: 0;
	}
</style>