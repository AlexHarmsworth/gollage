export const updateURLParam = (key, value) => {
	const search = new URLSearchParams(window.location.search);
	search.set(key, value);
	window.history.replaceState(null, document.title, `${window.location.pathname}?${search}`)
}

export const getURLParam = (key) => {
	const search = new URLSearchParams(window.location.search);
	const value = search.get(key);
	return value;
}