'use client';

import { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

type AppContextProps = {
	cart: boolean;
	setCart: (newValue: boolean) => void;
};

export const AppContext = createContext<AppContextProps>({
	cart: false,
	setCart() {},
});

export default function AppContextProvider({ children }: Props) {
	const [cart, setCart] = useState(false);

	return (
		<AppContext.Provider value={{ cart, setCart }}>
			{children}
		</AppContext.Provider>
	);
}
