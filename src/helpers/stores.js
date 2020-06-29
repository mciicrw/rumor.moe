
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "June Shop",
		start: "01 June 2020 00:00:00 PDT",
		end: "30 June 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "Main Story Ch10 Ep 4",
		start: "22 June 2020 01:00:00 PDT",
		end: null,
		image: "/images/card_10014_s.png",
	},
	{
		title: "June 25 Maintenance",
		start: "25 June 2020 00:00:00 PDT",
		end: "25 June 2020 02:00:00 PDT",
	},
	{
		title: "The Last Magia",
		start: "25 June 2020 02:00:00 PDT",
		end: "28 June 2020 23:59:59 PDT",
		image: "/images/card_10012_s.png",
		theme: "dark",
	},
	{
		title: "Ultimate Madoka Fate Weave",
		start: "25 June 2020 02:00:00 PDT",
		end: "28 June 2020 23:59:59 PDT",
		image: "/images/card_21014_s.png",
	},
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
		title: "June 29 Maintenance",
		start: "29 June 2020 00:00:00 PDT",
		end: "29 June 2020 02:00:00 PDT",
	},
	{
		title: "Main Story Ch10 Ep 5",
		start: "29 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_10144_s.png",
	},
	{
		title: "Cherry Blossom Dreams",
		start: "29 June 2020 02:00:00 PDT",
		end: "06 July 2020 23:59:59 PDT",
		image: "/images/card_30435_s.png",
	},
	{
		title: "Another Story Chapter 10",
		start: "29 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_10074_s.png",
	},
	{
		title: "Ashley Taylor Doppel release",
		start: "29 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_30525_s.png",
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