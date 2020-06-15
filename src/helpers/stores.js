
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
		title: "The Last Magia Campaign",
		start: "05 June 2020 02:00:00 PDT",
		end: "24 June 2020 23:59:59 PDT",
		image: "/images/card_10025_s.png",
	},
	{
		title: "Mitama's Special Training: Iroha",
		start: "15 June 2020 02:00:00 PDT",
		end: "18 June 2020 23:59:59 PDT",
		image: "/images/card_10013_s.png",
	},
	{
		title: "Iroha's Doppel Challenge",
		start: "15 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_10015_s.png",
	},
	{
		title: "Touka Satomi Fate Weave",
		start: "15 June 2020 02:00:00 PDT",
		end: "24 June 2020 23:59:59 PDT",
		image: "/images/card_10075_s.png",
	},
	{
		title: "Last Magia Login Bonus",
		start: "15 June 2020 02:00:00 PDT",
		end: "24 June 2020 23:59:59 PDT",
	},
	{
		title: "Main Story Ch10 Ep 1-2",
		start: "15 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_10055_s.png",
	},
	{
		title: "June 19 Maintenance",
		start: "19 June 2020 00:00:00 PDT",
		end: "19 June 2020 01:00:00 PDT",
	},
	{
		title: "Nemu Hiiragi Fate Weave",
		start: "19 June 2020 01:00:00 PDT",
		end: "24 June 2020 23:59:59 PDT",
		image: "/images/card_10075_s.png",
	},
	{
		title: "Main Story Ch10 Ep 3",
		start: "19 June 2020 01:00:00 PDT",
		end: null,
		image: "/images/card_10035_s.png",
	},
	{
		title: "June 22 Maintenance",
		start: "22 June 2020 00:00:00 PDT",
		end: "22 June 2020 01:00:00 PDT",
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
		title: "June 29 Maintenance",
		start: "29 June 2020 00:00:00 PDT",
		end: "29 June 2020 02:00:00 PDT",
	},
	{
		title: "Another Story Chapter 10",
		start: "29 June 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_10074_s.png",
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