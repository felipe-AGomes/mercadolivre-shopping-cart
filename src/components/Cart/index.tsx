import S from './Cart.module.css';
import CartHeader from '../CartHeader';
import CartGridProducts from '../CartGridProducts/incex';
import CartFooter from '../CartFooter';

type Props = {
	className?: string;
};

export default function Cart({ className }: Props) {
	return (
		<div className={`${S.cart__contain} ${S[className ? className : '']}`}>
			<CartHeader />
			<CartGridProducts />
			<CartFooter />
		</div>
	);
}
