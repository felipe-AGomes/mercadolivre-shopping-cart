'use client';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import S from './CartFloat.module.css';
import useAppContext from '@/hooks/useAppContext';
import CartNumber from '../CartNumber';

export default function CartFloat() {
	const { setCart } = useAppContext();

	return (
		<div className={S.cartFloat__contain}>
			<div className={S.cart}>
				<AiOutlineShoppingCart
					size={28}
					onClick={() => setCart(true)}
				/>
			</div>
			<CartNumber style={{ background: 'var(--blue)' }} />
		</div>
	);
}
