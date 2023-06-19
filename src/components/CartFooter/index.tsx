import useAppContext from '@/hooks/useAppContext';
import S from './CartFooter.module.css';
import { ProductProps } from '@/@types';
import { priceFormat } from '@/util/priceFormat';

export default function CartFooter() {
	const app = useAppContext();

	const cartItems: ProductProps[] = app.cartItems;

	const totalValue = cartItems.reduce((prev, curr) => {
		return prev + curr.price;
	}, 0);

	const price = priceFormat(totalValue);

	return (
		<footer className={S.footer__contain}>
			<p>{price}</p>
		</footer>
	);
}
