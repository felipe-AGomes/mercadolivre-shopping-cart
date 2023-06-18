import { HiOutlineSearch } from 'react-icons/hi';

import S from './HeaderPage.module.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartNumber from '../CartNumber';
import useAppContext from '@/hooks/useAppContext';

export default function HeaderPage() {
	const { cart, setCart } = useAppContext();

	return (
		<header className={S.header__contain}>
			<form className={S.form__contain}>
				<input
					type='search'
					placeholder='Pesquisar...'
				/>
				<button type='submit'>
					<HiOutlineSearch size={28} />
				</button>
			</form>
			<div
				className={`${S.cartIcon__contain} ${cart ? S.active : ''}`}
				onClick={() => setCart(!cart)}
			>
				<AiOutlineShoppingCart size={28} />
				<CartNumber
					style={{
						background: 'var(--orange)',
						top: '5px',
						left: '5px',
						width: '15px',
						height: '15px',
					}}
				/>
			</div>
		</header>
	);
}
