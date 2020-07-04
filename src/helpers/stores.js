
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "Daily Free 10x Premium Fate Weave",
		start: "25 June 2020 02:00:00 PDT",
		end: "04 July 2020 23:59:59 PDT",
	},
	{
		title: "1 Year Anniversary Campaign",
		start: "25 June 2020 02:00:00 PDT",
		end: "06 July 2020 23:59:59 PDT",
		theme: "dark",
	},
	{
		title: "Cherry Blossom Dreams",
		start: "29 June 2020 02:00:00 PDT",
		end: "06 July 2020 23:59:59 PDT",
		image: "/images/card_30435_s.png",
	},
	{
		title: "Ashley Taylor Fate Weave",
		start: "29 June 2020 02:00:00 PDT",
		end: "06 July 2020 23:59:59 PDT",
		image: "/images/card_30524_s.png",
	},
	{
		title: "1 Year Anniversary Login Bonus",
		start: "29 June 2020 02:00:00 PDT",
		end: "06 July 2020 23:59:59 PDT",
		theme: "dark",
	},
	{
		title: "July Shop",
		start: "01 July 2020 00:00:00 PDT",
		end: "31 July 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "Aniplex Online Fest",
		start: "04 July 2020 09:30:00 PDT",
		end: "05 July 2020 23:00:00 PDT",
		image: "/images/aof.png",
	},
	{
		title: "Aniplex Online Fest: Magia Record Panel",
		start: "04 July 2020 12:15:00 PDT",
		end: "04 July 2020 13:00:00 PDT",
		image: "/images/aof_magireco.png",
		theme: "dark",
	},
	{
		title: "July 07 Maintenance",
		start: "07 July 2020 00:00:00 PDT",
		end: "07 July 2020 02:00:00 PDT",
	},
];

let id = 0;
export const data = writable(
	events.map(event => {
		return {
			id: id++,
			...event
		}
	})
);

export const time = readable(new Date(), function start(set) {
	let interval;
	setTimeout(() => {
		interval = setInterval(() => {
			set(new Date());
		}, 500);
	}, 1000 - new Date().getMilliseconds());

	return function stop() {
		clearInterval(interval);
	}
});