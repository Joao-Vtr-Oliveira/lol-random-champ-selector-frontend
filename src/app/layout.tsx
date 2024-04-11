import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home Page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={'bg-black text-white'}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
