import S from './Cart.module.css';
import HeaderCart from '../HeaderCart';
import CartGridProducts from '../CartGridProducts/incex';
import CartFooter from '../CartFooter';

export default function Cart() {
	return (
		<div className={S.cart__contain}>
			<HeaderCart />
			<CartGridProducts />
			<CartFooter />
		</div>
	);
}
