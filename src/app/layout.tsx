import AppContextProvider from '@/context/AppContext';
import './globals.css';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<AppContextProvider>
				<body className={roboto.className}>{children}</body>
			</AppContextProvider>
		</html>
	);
}
