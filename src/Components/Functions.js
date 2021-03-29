export const seconds = () => {
	return new Date();
};

export const daytime = () => {
	let i = seconds().getHours();

	return i >= 5
		? i >= 12
			? i >= 16
				? i >= 21
					? "Night"
					: "Evening"
				: "Afternoon"
			: "Morning"
		: "Night";
};

export const random = (i) => {
	return parseInt(Math.random(seconds()) * i);
};
