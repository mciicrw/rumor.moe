
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "400 Day Anniversary Login Bonus",
		start: "28 July 2020 02:00:00 PDT",
		end: "11 August 2020 23:59:59 PDT",
	},
	{
		title: "August Shop",
		start: "01 August 2020 00:00:00 PDT",
		end: "31 August 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "Summer Treasures",
		start: "03 August 2020 02:00:00 PDT",
		end: "11 August 2020 23:59:59 PDT",
		image: "/images/card_26004_s.png",
	},
	{
		title: "August 12 Maintenance",
		start: "12 August 2020 00:00:00 PDT",
		end: "12 August 2020 02:00:00 PDT",
	},
	{
		title: "Version 1.1.12 required",
		start: "12 August 2020 00:00:00 PDT",
		end: null,
	},
	{
		title: "A New Beginning",
		start: "12 August 2020 02:00:00 PDT",
		end: "20 August 2020 23:59:59 PDT",
		image: "/images/card_13014_s.png",
	},
	{
		title: "August 21 Maintenance",
		start: "21 August 2020 00:00:00 PDT",
		end: "21 August 2020 02:00:00 PDT",
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