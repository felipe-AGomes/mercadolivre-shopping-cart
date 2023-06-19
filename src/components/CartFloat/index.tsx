'use client';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import useAppContext from '@/hooks/useAppContext';
import CartNumber from '../CartNumber';
import S from './CartFloat.module.css';

export default function CartFloat() {
	const { setCartIsOpen } = useAppContext();

	return (
		<div
			className={S.cartFloat__contain}
			onClick={() => setCartIsOpen(true)}
		>
			<div className={S.cart}>
				<AiOutlineShoppingCart size={28} />
			</div>
			<CartNumber style={{ background: 'var(--blue)' }} />
		</div>
	);
}
