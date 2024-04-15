'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
	customPurple: '#570FA0',
	customPinky: '#FA2083',
}

const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
