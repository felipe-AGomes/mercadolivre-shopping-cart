'use client';

import { ProductProps } from '@/@types';
import { createContext, useState, useEffect } from 'react';

type Props = {
	children: React.ReactNode;
};

type ApiResponse = {
	site_id: string;
	country_default_time_zone: string;
	query: string;
	paging: any;
	results: ProductProps[];
	sort: Record<string, string>;
	available_sorts: [Record<string, string>];
	filters: [Record<string, string>];
	available_filters: [Record<string, string>];
};

type AppContextProps = {
	cartItems: ProductProps[] | [];
	cartIsOpen: boolean;
	windowWIdth: number;
	currentQuery: string;
	products: ApiResponse | null;
	setCurrentQuery: (newValue: string) => void;
	setCartItems: (newValue: ProductProps[] | []) => void;
	setProducts: (newValue: ApiResponse | null) => void;
	setWindowWidth: (newValue: number) => void;
	setCartIsOpen: (newValue: boolean) => void;
};

export const AppContext = createContext<AppContextProps>({
	cartIsOpen: false,
	windowWIdth: 0,
	products: null,
	cartItems: [],
	currentQuery: '',
	setCurrentQuery() {},
	setCartItems() {},
	setProducts() {},
	setCartIsOpen() {},
	setWindowWidth() {},
});

export default function AppContextProvider({ children }: Props) {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [windowWIdth, setWindowWidth] = useState<number>(0);
	const [products, setProducts] = useState<ApiResponse | null>(null);
	const [cartItems, setCartItems] = useState<ProductProps[] | []>([]);
	const [currentQuery, setCurrentQuery] = useState<string>('');

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	});

	return (
		<AppContext.Provider
			value={{
				cartItems,
				cartIsOpen,
				windowWIdth,
				products,
				currentQuery,
				setCurrentQuery,
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
