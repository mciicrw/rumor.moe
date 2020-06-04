<script>
	import EventList from './components/EventList.svelte';
	import ServerTime from './components/ServerTime.svelte';
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
	h1 {
		margin: 0;
		margin-top: 1rem;
		font-weight: 300;
		text-align: center;
	}
</style>