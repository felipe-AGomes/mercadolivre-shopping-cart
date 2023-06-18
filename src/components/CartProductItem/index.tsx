/* eslint-disable @next/next/no-img-element */
import { BsCartDash } from 'react-icons/bs';

import S from './CartProductItem.module.css';
import { ProductProps } from '@/@types';
import useAppContext from '@/hooks/useAppContext';

type Props = {
	item: ProductProps;
};

export default function CartProductItem({ item }: Props) {
	const { cartItems, setCartItems } = useAppContext();

	const image = item.thumbnail.replace(/-.\.jpg/, '-W.jpg');

	const handleClick = (id: string) => {
		setCartItems(cartItems.filter((item) => item.idCart !== id));
	};

	return (
		<div className={S.cartItem__contain}>
			<div className={S.image__contain}>
				<img
					src={image}
					alt={item.title}
				/>
			</div>
			<div className={S.description__contain}>
				<p>R$ {item.price},00</p>
				<h4>{item.title}</h4>
			</div>
			<div className={S.cartIcon}>
				<BsCartDash
					size={28}
					style={{ cursor: 'pointer' }}
					onClick={() => handleClick(item.idCart ? item.idCart : '')}
				/>
			</div>
		</div>
	);
}
