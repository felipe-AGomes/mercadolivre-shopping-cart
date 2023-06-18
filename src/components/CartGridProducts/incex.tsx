import useAppContext from '@/hooks/useAppContext';
import CartProductItem from '../CartProductItem';
import S from './CartGridProducts.module.css';

export default function CartGridProducts() {
	const { cartItems } = useAppContext();

	return (
		<div className={S.products__contain}>
			{cartItems.map((item) => {
				return (
					<CartProductItem
						key={item.idCart}
						item={item}
					/>
				);
			})}
		</div>
	);
}
