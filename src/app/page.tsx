'use client';
/* eslint-disable @next/next/no-img-element */
import Cart from '@/components/Cart';
import CartFloat from '@/components/CartFloat';
import GridProducts from '@/components/GridProducts';
import HeaderPage from '@/components/HeaderPage';
import useAppContext from '@/hooks/useAppContext';
import { useEffect } from 'react';

export default function Home() {
	const { cart, windowWIdth, setWindowWidth } = useAppContext();

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	});

	console.log(windowWIdth);
	const cartAndWidthLess700 = cart && windowWIdth < 700;

	return (
		<>
			<HeaderPage />
			<main
				style={
					cartAndWidthLess700
						? {
								height: 'calc(100vh - 200px)',
								overflow: 'hidden',
						  }
						: {}
				}
			>
				<GridProducts />
				<CartFloat />
				<Cart className={cart ? 'active' : ''} />
			</main>
		</>
	);
}
