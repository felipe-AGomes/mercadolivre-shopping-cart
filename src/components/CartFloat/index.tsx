import { AiOutlineShoppingCart } from 'react-icons/ai';

import S from './CartFloat.module.css';

export default function CartFloat() {
	return (
		<div className={S.cartFloat__contain}>
			<div className={S.cart}>
				<AiOutlineShoppingCart size={28} />
			</div>
			<div className={S.cartNumber}>
				<p>5</p>
			</div>
		</div>
	);
}
