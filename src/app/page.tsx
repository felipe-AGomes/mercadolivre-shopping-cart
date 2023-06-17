/* eslint-disable @next/next/no-img-element */
import CartFloat from '@/components/CartFloat';
import GridProducts from '@/components/GridProducts';
// import S from './page.module.css';
import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<GridProducts />
				<CartFloat />
			</main>
		</>
	);
}
