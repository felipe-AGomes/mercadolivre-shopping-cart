import CartProductItem from '../CartProductItem';
import S from './CartGridProducts.module.css';

export default function CartGridProducts() {
	return (
		<div className={S.products__contain}>
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
			<CartProductItem />
		</div>
	);
}
