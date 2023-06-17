import { AiOutlineCloseCircle } from 'react-icons/ai';

import S from './HeaderCart.module.css';

export default function HeaderCart() {
	return (
		<header className={S.header__contain}>
			<h3>Carrinho de compras</h3>
			<div className={S.closeIcon__contain}>
				<AiOutlineCloseCircle
					size={28}
					style={{ cursor: 'pointer' }}
				/>
			</div>
		</header>
	);
}
