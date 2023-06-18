/* eslint-disable @next/next/no-img-element */
import { BsCartPlus } from 'react-icons/bs';
import S from './ProductItem.module.css';
import { ProductProps } from '@/@types';
import useAppContext from '@/hooks/useAppContext';

type Props = {
	product: ProductProps;
};

export default function ProductItem({ product }: Props) {
	const { setCartItems, cartItems } = useAppContext();
	const image = product.thumbnail.replace(/-.\.jpg$/, '-W.jpg');

	const handleClick = (product: ProductProps) => {
		setCartItems([
			...cartItems,
			{ ...product, idCart: cartItems.length.toString() },
		]);
	};

	return (
		<div className={S.product__card}>
			<div className={S.image__contain}>
				<img
					src={image}
					alt={product.title}
				/>
			</div>
			<div className={S.description__contain}>
				<p>R$ {product.price},00</p>
				<h2>{product.title}</h2>
			</div>
			<div className={S.cartIcon}>
				<BsCartPlus
					size={28}
					style={{ cursor: 'pointer' }}
					onClick={() => handleClick(product)}
				/>
			</div>
		</div>
	);
}
