import { daytime } from "./Functions.js";

let data = {
	Morning: importAll(
		require.context("../images/morning", false, /\.(png|jpe?g|svg)$/)
	),
	Afternoon: importAll(
		require.context("../images/afternoon", false, /\.(png|jpe?g|svg)$/)
	),
	Evening: importAll(
		require.context("../images/evening", false, /\.(png|jpe?g|svg)$/)
	),
	Night: importAll(
		require.context("../images/night", false, /\.(png|jpe?g|svg)$/)
	),
};

function importAll(r) {
	let images = [];
	r.keys().forEach((item, index) => (images[index] = r(item)));
	return images;
}

export const retarray = () => {
	let i = daytime();
	return data[i];
};
