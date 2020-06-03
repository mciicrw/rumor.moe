<script>
	import EventList from './EventList.svelte';
	import ServerTime from './ServerTime.svelte';
</script>

<header>
	<h1>Magia Record EN Server Schedule</h1>
	<ServerTime />
</header>

<main>
	<EventList type="ongoing" />
	<EventList type="upcoming" />
	<EventList type="ended" />
</main>

<style>
	:global(html) {
		background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
		background-attachment: fixed;
	}
	h1 {
		margin: 0;
		font-weight: 400;
		text-align: center;
	}
</style>