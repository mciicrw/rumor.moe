<script>
	import Event from './Event.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { transition } from '../helpers/transition.js';
	import { data, time } from '../helpers/stores.js';
	import { whereTypeMatches, byEarlierDate } from '../helpers/utility.js';

	const [send, recieve] = transition;
	const typeNames = {
		ongoing: 'Ongoing',
		upcoming: 'Upcoming',
		ended: 'Ended'
	};

	/** @type {('ongoing'|'upcoming'|'ended')} */
	export let type;
	
	$: filteredData = $data.filter(
		item => whereTypeMatches($time, type, item)
	)
	.sort(
		(a, b) => byEarlierDate(type, a, b)
	);
</script>

<h1 class={type}>
	<span>{typeNames[type]}</span>
</h1>
<section class="event-list">
	{#each filteredData as item (item.id)}
		<div
			animate:flip={{ duration: 500 }}
			in:recieve={{ key: item.id }}
			out:send={{ key: item.id }}
		>
			<Event {item} {type} />
		</div>
	{/each}
	{#if filteredData.length === 0}
		<div
			in:scale={{ delay: 500, duration: 500 }}
			out:scale={{ duration: 250 }}
			class="empty"
		>
			There are no events in this category.
		</div>
	{/if}
</section>

<style>
	h1 {
		font-weight: 300;
		background-color: rgba(255,255,255,.5);
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
		gap: .75em;
		align-items: stretch;

		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}

	.event-list > div {
		display: grid;
	}

	.empty {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		grid-column: 1 / -1;
		padding: 2rem;
		background-color: rgba(237, 242, 247, .5);

		text-align: center;
	}
</style>