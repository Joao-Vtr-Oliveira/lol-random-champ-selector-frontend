import HomeComponent from '@/pagesComponents/Home';
import { Box } from '@chakra-ui/react';

export default function Home() {
	return (
		<Box className='flex min-h-screen flex-col items-center justify-center p-24'>
			<HomeComponent />
		</Box>
	);
}
