<script>
	import Timer from './Timer.svelte';
	
	export let item;
	export let type;

	function applyStyles(node) {
		if (item.image) {
			node.style.backgroundImage += `url('${item.image}')`;
		}
	}
</script>

<div class="event" use:applyStyles class:has-image={item.image} class:dark={'dark' === item.theme}>
	<div>
		<span class="title">{item.title}</span>
	</div>
	{#if type === 'upcoming'}
		<Timer text="Starts in" target={item.start} />
	{:else if type === 'ended'}
		<p>Event has ended</p>
	{:else if item.end === null}
		<p>Event has started</p>
	{:else}
		<Timer text="Ends in" target={item.end} />
	{/if}
</div>

<style>
	.event {
		display: grid;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
		padding: 1rem;
		background-color: #EDF2F7;
	}
	.event.dark {
		background-color: #4A5568;
		color: #F7FAFC;
	}
	.event.has-image {
		background-color: #F7FAFC;

		background-repeat: no-repeat;
		background-position: right top;
		background-size: contain;
	}
	.event.has-image.dark {
		background-color: #2D3748;
	}
	.title {
		font-weight: 500;
		padding: 2px 6px 2px 0;
	}
	.has-image .title {
		background-color: rgba(247,250,252,.9);
	}
	.has-image.dark .title {
		background-color: rgba(45,55,72,.9);
	}
</style>