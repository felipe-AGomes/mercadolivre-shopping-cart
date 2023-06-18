import S from './Cart.module.css';
import CartHeader from '../CartHeader';
import CartGridProducts from '../CartGridProducts/incex';
import CartFooter from '../CartFooter';

export default function Cart() {
	return (
		<div className={S.cart__contain}>
			<CartHeader />
			<CartGridProducts />
			<CartFooter />
		</div>
	);
}
