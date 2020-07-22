
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
		title: "A Fledgling's First Flight",
		start: "07 July 2020 03:00:00 PDT",
		end: "14 July 2020 23:59:59 PDT",
		image: "/images/card_10155_s.png",
	},
	{
		title: "July 15 Maintenance",
		start: "15 July 2020 00:00:00 PDT",
		end: "15 July 2020 02:00:00 PDT",
	},
	{
		title: "One Fleeting Summer Night",
		start: "15 July 2020 03:00:00 PDT",
		end: "21 July 2020 23:59:59 PDT",
		image: "/images/card_11184_s.png",
	},
	{
		title: "July 22 Maintenance",
		start: "22 July 2020 00:00:00 PDT",
		end: "22 July 2020 02:00:00 PDT",
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