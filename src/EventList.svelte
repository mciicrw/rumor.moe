<script>
	import { data, time } from './stores.js';
	import Event from './Event.svelte';
	import { flip } from 'svelte/animate';
	import { transition } from './transition.js';

	const [send, recieve] = transition;
	const typeNames = {
		ongoing: 'Ongoing',
		upcoming: 'Upcoming',
		ended: 'Ended'
	};

	/** @type {('ongoing'|'upcoming'|'ended')} */
	export let type;
	
	$: filteredData = $data.filter(item => {
		const startDate = new Date(item.start);
		const endDate = new Date(item.end);

		let itemType = 'upcoming';

		if ($time > startDate) {
			itemType = 'ongoing';
		}

		if (
			item.end !== null &&
			$time > endDate
		) {
			itemType = 'ended';
		}

		return itemType === type;
	})
	.sort((a, b) => {
		if (type === 'upcoming') {
			return new Date(a.start) - new Date(b.start);
		}
		if (type === 'ended') {
			return new Date(a.end) - new Date(b.end);
		}
		// ongoing
		if (a.end === null) return -1;
		if (b.end === null) return 1;
		return 0;
	});
</script>

<h1 class:upcoming={type==='upcoming'} class:ongoing={type==='ongoing'} class:ended={type==='ended'}>
	<span>{typeNames[type]}</span>
</h1>
<section class="event-list">
	{#each filteredData as item (item.id)}
		<div animate:flip={{ duration: 500 }} in:recieve={{ key: item.id }} out:send={{ key: item.id }}>
			<Event {item} {type} />
		</div>
	{/each}
</section>

<style>
	h1 {
		font-weight: 300;
		background-color: rgba(255,255,255,.5);
		/* background-image: linear-gradient(to right, rgba(255,255,255,.5), rgba(255,255,255,0)); */
		padding: 0 1.5rem .25rem;
		margin: 0;

		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	}
	h1 > span {
		display: block;
		max-width: 1500px;
		margin: 0 auto;
	}
	.event-list {
		max-width: 1500px;

		margin: 1rem auto 2rem;
		padding: 0 .5rem;

		display: grid;
		grid-column-gap: .75em;
		grid-row-gap: .75em;
		align-items: stretch;

		grid-template-columns: 1fr;
	}
	@media (min-width: 500px) {
		.event-list {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (min-width: 750px) {
		.event-list {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media (min-width: 980px) {
		.event-list {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
	}
	@media (min-width: 1200px) {
		.event-list {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}

	.event-list > div {
		display: grid;
	}
</style>