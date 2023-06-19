import useAppContext from '@/hooks/useAppContext';
import ProductItem from '../ProductItem';
import S from './GridProducts.module.css';
import { ProductProps } from '@/@types';

export default function GridProducts() {
	const { products } = useAppContext();
	const results = products?.results;

	return (
		<div className={S.products__contain}>
			{results &&
				results.map((product) => {
					return (
						<ProductItem
							key={product.id}
							product={product}
						/>
					);
				})}
		</div>
	);
}
