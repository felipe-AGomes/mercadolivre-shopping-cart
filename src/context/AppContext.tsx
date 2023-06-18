'use client';

import { ProductProps } from '@/@types';
import { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

type AppContextProps = {
	cartItems: ProductProps[] | [];
	cartIsOpen: boolean;
	windowWIdth: number;
	products: ProductProps[] | [];
	setCartItems: (newValue: ProductProps[] | []) => void;
	setProducts: (newValue: ProductProps[] | []) => void;
	setWindowWidth: (newValue: number) => void;
	setCartIsOpen: (newValue: boolean) => void;
};

export const AppContext = createContext<AppContextProps>({
	cartIsOpen: false,
	windowWIdth: 0,
	products: [],
	cartItems: [],
	setCartItems() {},
	setProducts() {},
	setCartIsOpen() {},
	setWindowWidth() {},
});

export default function AppContextProvider({ children }: Props) {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [windowWIdth, setWindowWidth] = useState<number>(0);
	const [products, setProducts] = useState<ProductProps[] | []>([]);
	const [cartItems, setCartItems] = useState<ProductProps[] | []>([]);

	return (
		<AppContext.Provider
			value={{
				cartItems,
				cartIsOpen,
				windowWIdth,
				products,
				setCartItems,
				setCartIsOpen,
				setWindowWidth,
				setProducts,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
