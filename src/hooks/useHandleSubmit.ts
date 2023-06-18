import { ProductProps, SearchProductsInput } from '@/@types';
import useAppContext from './useAppContext';

export default function useHandleSubmit() {
	const { setProducts } = useAppContext();
	const searchProductsSubmit = async (e: SearchProductsInput) => {
		const response = (await fetch(
			`https://api.mercadolibre.com/sites/MLB/search?q=${e.query}`,
		)) as any;
		const data = await response.json();

		setProducts(data.results as ProductProps[]);
	};

	return { searchProductsSubmit };
}
