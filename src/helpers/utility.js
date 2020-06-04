/**
 * Check if the given event matches the given type
 * @param {Date} currentTime 
 * @param {('ongoing'|'upcoming'|'ended')} type 
 * @param {Object} item 
 * @param {string} item.start Event start date string
 * @param {string | null} item.end Event end date string, or null if event does not end
 */
export function whereTypeMatches(currentTime, type, item) {
	const startDate = new Date(item.start);
	const endDate = new Date(item.end);

	let itemType = 'upcoming';

	if (currentTime >= startDate) {
		itemType = 'ongoing';
	}

	if (
		item.end !== null &&
		currentTime >= endDate
	) {
		itemType = 'ended';
	}

	return itemType === type;
};


/**
 * Sort events by their dates
 * @param {('ongoing'|'upcoming'|'ended')} type 
 * @param {Object} a 
 * @param {string} a.start Event start date string
 * @param {string} a.end Event end date string, or null if event does not end
 * @param {Object} b 
 * @param {string} b.start Event start date string
 * @param {string} b.end Event end date string, or null if event does not end
 */
export function byEarlierDate(type, a, b) {
	if (type === 'upcoming') {
		return new Date(a.start).getTime() - new Date(b.start).getTime();
	}
	if (type === 'ended') {
		return new Date(a.end).getTime() - new Date(b.end).getTime();
	}
	// ongoing
	if (a.end === null) return 1;
	if (b.end === null) return -1;
	return new Date(a.end).getTime() - new Date(b.end).getTime();
}