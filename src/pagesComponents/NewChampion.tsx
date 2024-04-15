'use client';

import { addChampion } from '@/requests/script';
import toastHelper from '@/utils/toastHelper';
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Input,
	Stack,
	Tooltip,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import {useRouter} from 'next/navigation';
import { ChampionReturn } from '@/types/championReturn';
import { championEmptyBase, rolesArray, damageTypesArray } from '@/utils/championInfo';

const NewChampion = () => {
	const [champion, setChampion] = useState<ChampionReturn>(championEmptyBase);

	const toast = useToast();
	const { push } = useRouter();

	const checkFields = () => {
		if (!champion.name || !champion.nameBase) return toast(toastHelper('name'));
		if (!champion.top && !champion.jg && !champion.mid && !champion.adc && !champion.sup) return toast(toastHelper('role'));
		if (!champion.ad && !champion.ap && !champion.tank) return toast(toastHelper('type'));
		return true;
	};

	const checkFieldsForInput = () => {
		if (!champion.name || !champion.nameBase) return false
		if (!champion.top && !champion.jg && !champion.mid && !champion.adc && !champion.sup) return false
		if (!champion.ad && !champion.ap && !champion.tank) return false
		return true;
	};

	const fetchAddChampion = async () => {
		if (checkFields() !== true) return;
		try {
			const data = await addChampion(champion);
			if (data.status !== 'OK') return toast(toastHelper('alreadyExists'));
			push('/list');
			return toast(toastHelper('championAdded'));
		} catch (error) {
			toast(toastHelper('error'));
		}
	};

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				New Champion:
			</Heading>
			<Box mb={10}>
				<Heading textAlign='center' mb={5} size='md'>
					Name
				</Heading>
				<Input
					value={champion.name}
					textAlign='center'
					onChange={(e) =>
						setChampion({ ...champion, name: e.target.value })
					}
				/>
			</Box>
			<Box mb={10}>
				<Heading textAlign='center' mb={5} size='md'>
				<Tooltip label="How the name is in the league of graphs URL" aria-label='Base Name'>
					Base Name (?)
				</Tooltip>
				</Heading>
				<Input
					value={champion.nameBase}
					textAlign='center'
					onChange={(e) =>
						setChampion({ ...champion, nameBase: e.target.value })
					}
				/>
			</Box>
			<Box display='flex'>
				<Box>
					<Box mb={10}>
						<Heading textAlign='center' mb={5} size='md'>
							Roles
						</Heading>
						<CheckboxGroup colorScheme='green'>
							<Stack justify='center' direction='row'>
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
						<Heading textAlign='center' mb={5} size='md'>
							Damage Type
						</Heading>
						<CheckboxGroup colorScheme='green'>
							<Stack justify='center' direction='row'>
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
						<Heading textAlign='center' mb={5} size='md'>
							Ranged
						</Heading>
						<Checkbox
							colorScheme='green'
							isChecked={champion.ranged}
							onChange={() =>
								setChampion({ ...champion, ranged: !champion.ranged })
							}
							value='ranged'
						>
							Ranged
						</Checkbox>
					</Box>

					<Box display='flex' justifyContent='center'>
						<Button isDisabled={!checkFieldsForInput()} onClick={fetchAddChampion} colorScheme='green'>
							Add champion
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default NewChampion;
