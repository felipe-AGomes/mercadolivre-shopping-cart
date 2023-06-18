'use client';

import { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

type AppContextProps = {
	cart: boolean;
	windowWIdth: number;
	setWindowWidth: (newValue: number) => void;
	setCart: (newValue: boolean) => void;
};

export const AppContext = createContext<AppContextProps>({
	cart: false,
	windowWIdth: 0,
	setCart() {},
	setWindowWidth() {},
});

export default function AppContextProvider({ children }: Props) {
	const [cart, setCart] = useState(false);
	const [windowWIdth, setWindowWidth] = useState<number>(0);

	return (
		<AppContext.Provider value={{ cart, windowWIdth, setCart, setWindowWidth }}>
			{children}
		</AppContext.Provider>
	);
}
