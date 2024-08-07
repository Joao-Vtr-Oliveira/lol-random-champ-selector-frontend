'use client';

import {
	deleteChampion,
	getSpecificChampion,
	updateChampion,
} from '@/requests/lolRequests';
import { ChampionReturn } from '@/types/championReturn';
import { PageParams } from '@/types/pageParams';
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Img,
	Input,
	Stack,
	Tooltip,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toastHelper from '@/utils/toastHelper';
import { rolesArray, damageTypesArray } from '@/utils/championInfo';
import { specifChampionName } from '@/utils/specificChampioName';

const EditChampion = ({ params }: PageParams) => {
	const [champion, setChampion] = useState<ChampionReturn>();
	const [info, setInfo] = useState<boolean | 'error'>(false);

	const { push } = useRouter();
	const toast = useToast();

	const getChamp = async () => {
		try {
			const data = await getSpecificChampion(params.name);
			setChampion(data);
			if (data === null) setInfo('error');
		} catch (error) {
			setInfo('error');
		}
	};

	useEffect(() => {
		getChamp();
	}, []);

	const checkFields = () => {
		if (!champion) return;
		if (!champion.nameBase) return toast(toastHelper('name'));
		if (
			!champion.top &&
			!champion.jg &&
			!champion.mid &&
			!champion.adc &&
			!champion.sup
		)
			return toast(toastHelper('role'));
		if (!champion.ad && !champion.ap && !champion.tank)
			return toast(toastHelper('type'));
		return true;
	};

	const checkFieldsForInput = () => {
		if (!champion) return;
		if (!champion.name || !champion.nameBase) return false;
		if (
			!champion.top &&
			!champion.jg &&
			!champion.mid &&
			!champion.adc &&
			!champion.sup
		)
			return false;
		if (!champion.ad && !champion.ap && !champion.tank) return false;
		return true;
	};

	const fetchUpdate = async () => {
		if (checkFields() !== true) return;
		try {
			if (!champion) return;
			const data = await updateChampion(champion);
			if (data.status !== 'OK') return toast(toastHelper('error'));
			push('/list');
			return toast(toastHelper('championUpdated'));
		} catch (error) {
			toast(toastHelper('error'));
		}
	};

	const fetchDelete = async () => {
		try {
			if (!champion) return;
			const data = await deleteChampion(champion.name);
			if (data.status !== 'OK') return toast(toastHelper('error'));
			push('/list');
			return toast(toastHelper('championDeleted'));
		} catch (error) {
			toast(toastHelper('error'));
		}
	};

	if (info === 'error') return <p>Internal Error</p>;
	if (!champion) return <p>Loading</p>;

	const name = specifChampionName(champion.name);
	const link = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;

	return (
		<Box p={[2, 4, 6]} maxW="container.lg" mx="auto">
			<Heading
				textAlign='center'
				my={5}
				fontSize={['xl', '2xl', '3xl']}
			>
				{champion.name}:
			</Heading>
			<Box
				display='flex'
				justifyContent='center'
				mb={5}
			>
				<Img
					src={link}
					borderRadius={10}
					_hover={{ border: '2px solid #570FA0' }}
					width={['80%', '70%', '60%']}
					height='auto'
					objectFit='cover'
				/>
			</Box>
			<Box mb={10}>
				<Heading
					textAlign='center'
					mb={5}
					fontSize={['md', 'lg']}
				>
					<Tooltip
						label='How the name is in the league of graphs URL'
						aria-label='Base Name'
					>
						Base Name (?)
					</Tooltip>
				</Heading>
				<Input
					value={champion.nameBase}
					textAlign='center'
					onChange={(e) =>
						setChampion({ ...champion, nameBase: e.target.value })
					}
					size='lg'
				/>
			</Box>
			<Box>
				<Heading
					textAlign='center'
					mb={5}
					fontSize={['md', 'lg']}
				>
					Roles
				</Heading>
				<CheckboxGroup colorScheme='green'>
					<Stack
						justify='center'
						direction={['row']}
						spacing={4}
					>
						{rolesArray.map((role) => (
							<Checkbox
								key={role}
								isChecked={champion[role]}
								onChange={() =>
									setChampion({ ...champion, [role]: !champion[role] })
								}
							>
								{role}
							</Checkbox>
						))}
					</Stack>
				</CheckboxGroup>
			</Box>

			<Box mb={10}>
				<Heading
					textAlign='center'
					mb={5}
					fontSize={['md', 'lg']}
				>
					Damage Type
				</Heading>
				<CheckboxGroup colorScheme='green'>
					<Stack
						justify='center'
						direction={['row']}
						spacing={4}
					>
						{damageTypesArray.map((type) => (
							<Checkbox
								key={type}
								isChecked={champion[type]}
								onChange={() =>
									setChampion({ ...champion, [type]: !champion[type] })
								}
							>
								{type}
							</Checkbox>
						))}
					</Stack>
				</CheckboxGroup>
			</Box>

			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				mb={10}
			>
				<Heading
					textAlign='center'
					mb={5}
					fontSize={['md', 'lg']}
				>
					Ranged
				</Heading>
				<Checkbox
					colorScheme='green'
					isChecked={champion.ranged}
					onChange={() =>
						setChampion({ ...champion, ranged: !champion.ranged })
					}
				>
					Ranged
				</Checkbox>
			</Box>

			<Box
				display='flex'
				flexDirection={['column', 'row']}
				justifyContent='center'
				alignItems='center'
				gap={4}
			>
				<Button
					isDisabled={!checkFieldsForInput()}
					onClick={fetchUpdate}
					colorScheme='green'
					mr={[0, 4]}
					mb={[4, 0]}
					width={['100%', 'auto']}
				>
					Update champion
				</Button>
				<Button
					onClick={fetchDelete}
					colorScheme='red'
					width={['100%', 'auto']}
				>
					Delete champion
				</Button>
			</Box>
		</Box>
	);
};

export default EditChampion;
