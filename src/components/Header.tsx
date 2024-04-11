'use client';

import { Box, Icon, Text } from '@chakra-ui/react';
import { IoHome } from "react-icons/io5";
import { IoDice } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { verifyRoute } from '@/utils/verifyRoute';
import { hoverBtn } from '@/utils/hoverBtn';


const Header = () => {
  const pathname = usePathname();

  return(
    <Box w={'100%'} className='h-1/6' display='flex' justifyContent='space-around' alignItems='center' textColor='black' bg='white'>
      <Link href={'/'}>
        <Icon boxSize={8} color={verifyRoute(pathname, '/') ? '#FA2083' : 'black'} _hover={verifyRoute(pathname, '/') ? {} : hoverBtn} as={IoHome} />
      </Link>
      <Link href={'/'}>
        <Text color={verifyRoute(pathname, '/') ? '#FA2083' : 'black'} textDecoration={verifyRoute(pathname, '/') ? 'underline' : 'none'} fontFamily='fantasy'>LoL Random Champ Selector</Text>
      </Link>
      <Box>
        <Link href={'/random'}>
          <Icon color={verifyRoute(pathname, '/random') ? '#FA2083' : 'black'} _hover={verifyRoute(pathname, '/random') ? {} : hoverBtn} boxSize={8} mr={3} as={IoDice} />
        </Link>
        <Link href={'/new'}>
          <Icon color={verifyRoute(pathname, '/new') ? '#FA2083' : 'black'} _hover={verifyRoute(pathname, '/new') ? {} : hoverBtn} boxSize={8} mr={3} as={FaPlus} />
        </Link>
      </Box>
    </Box>
  )
}

export default Header;