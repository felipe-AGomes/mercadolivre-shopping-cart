export type SearchProductsInput = {
	query: string;
};

export type ProductProps = {
	id: string;
	title: string;
	price: number;
	thumbnail: string;
	idCart?: string;
};
