'use client';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import useAppContext from '@/hooks/useAppContext';
import CartNumber from '../CartNumber';
import S from './CartFloat.module.css';

export default function CartFloat() {
	const { setCartIsOpen } = useAppContext();

	return (
		<div className={S.cartFloat__contain}>
			<div className={S.cart}>
				<AiOutlineShoppingCart
					size={28}
					onClick={() => setCartIsOpen(true)}
				/>
			</div>
			<CartNumber style={{ background: 'var(--blue)' }} />
		</div>
	);
}
