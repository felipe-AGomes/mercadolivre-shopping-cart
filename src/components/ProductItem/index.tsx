/* eslint-disable @next/next/no-img-element */
import { BsCartPlus } from 'react-icons/bs';

import { ProductProps } from '@/@types';
import { priceFormat } from '@/util/priceFormat';
import useAddCartItem from '@/hooks/useAddCartItem';
import S from './ProductItem.module.css';

type Props = {
	product: ProductProps;
};

export default function ProductItem({ product }: Props) {
	const { addItem } = useAddCartItem();

	const image = product.thumbnail.replace(/-.\.jpg$/, '-W.jpg');
	const price = priceFormat(product.price);

	return (
		<div className={S.product__card}>
			<div className={S.image__contain}>
				<img
					src={image}
					alt={product.title}
				/>
			</div>
			<div className={S.description__contain}>
				<p>{price}</p>
				<h2>{product.title}</h2>
			</div>
			<div className={S.cartIcon}>
				<BsCartPlus
					size={28}
					style={{ cursor: 'pointer' }}
					onClick={() => addItem(product)}
				/>
			</div>
		</div>
	);
}
