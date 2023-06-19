/* eslint-disable @next/next/no-img-element */
import { BsCartDash } from 'react-icons/bs';

import { ProductProps } from '@/@types';
import { priceFormat } from '@/util/priceFormat';
import useAddCartItem from '@/hooks/useAddCartItem';
import S from './CartProductItem.module.css';

type Props = {
	item: ProductProps;
};

export default function CartProductItem({ item }: Props) {
	const { removeItem } = useAddCartItem();
	const image = item.thumbnail.replace(/-.\.jpg/, '-W.jpg');

	const price = priceFormat(item.price);

	return (
		<div className={S.cartItem__contain}>
			<div className={S.image__contain}>
				<img
					src={image}
					alt={item.title}
				/>
			</div>
			<div className={S.description__contain}>
				<p>{price}</p>
				<h4>{item.title}</h4>
			</div>
			<div className={S.cartIcon}>
				<BsCartDash
					size={28}
					style={{ cursor: 'pointer' }}
					onClick={() => removeItem(item.idCart ? item.idCart : '')}
				/>
			</div>
		</div>
	);
}
