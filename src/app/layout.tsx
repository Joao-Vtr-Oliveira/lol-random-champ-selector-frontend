import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lol-random-selector',
	description: 'Front-end of my lol API',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-screen'}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
