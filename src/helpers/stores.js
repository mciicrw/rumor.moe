
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
		title: "End of Magia Pass sales",
		start: "30 August 2020 23:59:59 PDT",
		end: null,
	},
	{
		title: "All Event Stories Unlocked in Archive",
		start: "31 August 2020 00:02:00 PDT",
		end: null,
	},
	{
		title: "August 31 Maintenance",
		start: "31 August 2020 00:00:00 PDT",
		end: "31 August 2020 02:00:00 PDT",
	},
	{
		title: "Mitama Training: Iroha & Yachiyo",
		start: "31 August 2020 02:00:00 PDT",
		end: "10 September 2020 23:59:59 PDT",
		image: "images/card_13015_s.png",
	},
	{
		title: "End of All Magia Stone Sales",
		start: "10 September 2020 23:59:59 PDT",
		end: null,
	},
	{
		title: "September Shop",
		start: "01 September 2020 00:00:00 PDT",
		end: "29 September 2020 23:59:59 PDT",
		image: "/images/card_10174_s.png",
	},
	{
		title: "September 11 Maintenance",
		start: "11 September 2020 00:00:00 PDT",
		end: "11 September 2020 02:00:00 PDT",
	},
	{
		title: "Final Mirrors Ranking",
		start: "11 September 2020 02:00:00 PDT",
		end: "17 September 2020 23:59:59 PDT",
		image: "images/card_10425_s.png",
	},
	{
		title: "End of Operations",
		start: "29 September 2020 23:59:59 PDT",
		end: null,
		image: "images/kamihama.png",
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