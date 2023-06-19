export function idGender() {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()_+=-';
	const createId = (length: number) => {
		let idString = '';
		for (let i = 0; i < length; i++) {
			const randomNumber = Math.floor(Math.random() * characters.length);
			idString += characters[randomNumber];
		}
		return idString;
	};
	return { createId };
}
