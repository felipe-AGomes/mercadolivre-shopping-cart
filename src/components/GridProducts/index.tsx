import ProductItem from '../ProductItem';
import S from './GridProducts.module.css';

export default function GridProducts() {
	return (
		<div className={S.products__contain}>
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
			<ProductItem />
		</div>
	);
}
