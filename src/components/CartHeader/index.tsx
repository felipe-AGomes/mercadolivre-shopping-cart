'use client';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import S from './CartHeader.module.css';
import useAppContext from '@/hooks/useAppContext';

export default function CartHeader() {
	const { setCartIsOpen } = useAppContext();

	return (
		<header className={S.header__contain}>
			<h3>Carrinho de compras</h3>
			<div className={S.closeIcon__contain}>
				<AiOutlineCloseCircle
					size={28}
					style={{ cursor: 'pointer' }}
					onClick={() => setCartIsOpen(false)}
				/>
			</div>
		</header>
	);
}
