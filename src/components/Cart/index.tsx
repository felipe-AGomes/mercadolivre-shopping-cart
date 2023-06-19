import CartHeader from '../CartHeader';
import CartGridProducts from '../CartGridProducts/incex';
import CartFooter from '../CartFooter';
import useAppContext from '@/hooks/useAppContext';
import CartEmpty from '../CartEmpty';
import S from './Cart.module.css';

type Props = {
	className?: string;
};

export default function Cart({ className }: Props) {
	const { cartItems } = useAppContext();

	return (
		<div className={`${S.cart__contain} ${S[className ? className : '']}`}>
			<CartHeader />
			{cartItems.length !== 0 && <CartGridProducts />}
			{cartItems.length === 0 && <CartEmpty />}
			<CartFooter />
		</div>
	);
}
