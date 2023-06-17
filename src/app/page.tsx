'use client';
/* eslint-disable @next/next/no-img-element */
import Cart from '@/components/Cart';
import CartFloat from '@/components/CartFloat';
import GridProducts from '@/components/GridProducts';
import HeaderPage from '@/components/HeaderPage';
import useAppContext from '@/hooks/useAppContext';

export default function Home() {
	const { cart } = useAppContext();

	return (
		<>
			<HeaderPage />
			<main
				style={
					cart
						? {
								height: 'calc(100vh - 200px)',
								overflow: 'hidden',
						  }
						: {}
				}
			>
				<GridProducts />
				<CartFloat />
				{cart && <Cart />}
			</main>
		</>
	);
}
