'use client';

import { Box, Icon, Text } from '@chakra-ui/react';
import { IoDice } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { verifyRoute } from '@/utils/verifyRoute';
import { hoverBtn } from '@/utils/hoverBtn';
import { FaList } from "react-icons/fa6";


const Header = () => {
  const pathname = usePathname();

  return(
    <Box w={'100%'} className='h-1/6 bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800' display='flex' justifyContent='space-around' alignItems='center' textColor='black'>
      <Link href={'/'}>
        <Icon boxSize={8} color={verifyRoute(pathname, '/') ? '#FA2083' : 'white'} _hover={verifyRoute(pathname, '/') ? {} : hoverBtn} as={IoDice} />
      </Link>
      <Link href={'/'}>
        <Text color={verifyRoute(pathname, '/') ? '#FA2083' : 'white'} textDecoration={verifyRoute(pathname, '/') ? 'underline' : 'none'} fontFamily='fantasy'>LoL Random Champ Selector</Text>
      </Link>
      <Box>
        <Link href={'/list'}>
          <Icon color={verifyRoute(pathname, '/list') ? '#FA2083' : 'white'} _hover={verifyRoute(pathname, '/list') ? {} : hoverBtn} boxSize={8} mr={3} as={FaList} />
        </Link>
        <Link href={'/new'}>
          <Icon color={verifyRoute(pathname, '/new') ? '#FA2083' : 'white'} _hover={verifyRoute(pathname, '/new') ? {} : hoverBtn} boxSize={8} mr={3} as={FaPlus} />
        </Link>
      </Box>
    </Box>
  )
}

export default Header;