'use client';
/* eslint-disable @next/next/no-img-element */
import Cart from '@/components/Cart';
import CartFloat from '@/components/CartFloat';
import GridProducts from '@/components/GridProducts';
import HeaderPage from '@/components/HeaderPage';
import useAppContext from '@/hooks/useAppContext';
import { generateDigitalSignature } from 'assinatura-digital';
import { useEffect } from 'react';

export default function Home() {
	const { cartIsOpen, windowWIdth, setWindowWidth } = useAppContext();
	console.clear();
	const transformedSignature = generateDigitalSignature(
		'felipe-dev',
		'falmeidagomes13@gmail.com',
		'Bem-vindo ao meu site! Sinta-se à vontade para explorar e desenvolver com paixão!',
	);
	console.log(...transformedSignature);
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	});
	const cartAndWidthLess700 = cartIsOpen && windowWIdth < 700;
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
				<Cart className={cartIsOpen ? 'active' : ''} />
			</main>
		</>
	);
}
