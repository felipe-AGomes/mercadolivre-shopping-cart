/* eslint-disable @next/next/no-img-element */
import { BsCartDash } from 'react-icons/bs';

import S from './CartProductItem.module.css';

export default function CartProductItem() {
	return (
		<div className={S.cartItem__contain}>
			<div className={S.image__contain}>
				<img
					src='http://http2.mlstatic.com/D_960487-MLA54126902851_032023-W.jpg'
					alt=''
				/>
			</div>
			<div className={S.description__contain}>
				<p>R$ 990,00</p>
				<h4>Motorola Moto G32 Dual Sim 128 Gb 4 Gb Ram Preto</h4>
			</div>
			<div className={S.cartIcon}>
				<BsCartDash
					size={28}
					style={{ cursor: 'pointer' }}
				/>
			</div>
		</div>
	);
}
