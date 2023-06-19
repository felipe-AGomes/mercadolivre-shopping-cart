export function priceFormat(price: number) {
	let priceString = `R$ ${price.toFixed(2).toString().replace('.', ',')}`;
	if (priceString.includes(',')) {
		if (priceString.indexOf(',') === priceString.length - 2) {
			priceString += '0';
		}
	} else {
		priceString += ',00';
	}
	return priceString;
}
