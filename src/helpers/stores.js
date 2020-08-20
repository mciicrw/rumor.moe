
import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

const events = [
	{
		title: "August Shop",
		start: "01 August 2020 00:00:00 PDT",
		end: "31 August 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
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
	{
		title: "The Flowers' Lament",
		start: "21 August 2020 02:00:00 PDT",
		end: "30 August 2020 23:59:59 PDT",
		image: "/images/card_30264_s.png",
	},
	{
		title: "Sarasa Hanna Fate Weave",
		start: "21 August 2020 02:00:00 PDT",
		end: "30 August 2020 23:59:59 PDT",
		image: "/images/card_30185_s.png",
	},
	{
		title: "August 31 Maintenance",
		start: "31 August 2020 00:00:00 PDT",
		end: "31 August 2020 02:00:00 PDT",
	},
	{
		title: "September Shop",
		start: "01 September 2020 00:00:00 PDT",
		end: "30 September 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
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