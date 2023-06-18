import useAppContext from '@/hooks/useAppContext';
import ProductItem from '../ProductItem';
import S from './GridProducts.module.css';

export default function GridProducts() {
	const { products } = useAppContext();

	return (
		<div className={S.products__contain}>
			{products.map((product) => {
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
