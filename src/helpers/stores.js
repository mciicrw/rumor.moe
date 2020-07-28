
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "July Shop",
		start: "01 July 2020 00:00:00 PDT",
		end: "31 July 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "Rebel of a Dawnless Land",
		start: "22 July 2020 02:00:00 PDT",
		end: "02 August 2020 23:59:59 PDT",
		image: "/images/card_40264_s.png",
	},
	{
		title: "Melissa Uncap",
		start: "22 July 2020 02:00:00 PDT",
		end: null,
		image: "/images/card_40235_s.png",
	},
	{
		title: "July 28 Maintenance",
		start: "28 July 2020 00:00:00 PDT",
		end: "28 July 2020 02:00:00 PDT",
	},
	{
		title: "Rebel of a Dawnless Land (Part 2)",
		start: "28 July 2020 02:00:00 PDT",
		end: "02 August 2020 23:59:59 PDT",
		image: "/images/card_40265_s.png",
	},
	{
		title: "400 Day Anniversary Set",
		start: "28 July 2020 02:00:00 PDT",
		end: "02 August 2020 23:59:59 PDT",
	},
	{
		title: "Bonus Ticket Campaign",
		start: "28 July 2020 02:00:00 PDT",
		end: "02 August 2020 23:59:59 PDT",
	},
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
		title: "August 03 Maintenance",
		start: "03 August 2020 00:00:00 PDT",
		end: "03 August 2020 02:00:00 PDT",
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