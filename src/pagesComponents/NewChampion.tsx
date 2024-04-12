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
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const NewChampion = () => {
	const [top, setTop] = useState(false);
	const [jg, setJg] = useState(false);
	const [mid, setMid] = useState(false);
	const [adc, setAdc] = useState(false);
	const [sup, setSup] = useState(false);

	const [ad, setAd] = useState(false);
	const [ap, setAp] = useState(false);
	const [tank, setTank] = useState(false);

	const [ranged, setRanged] = useState(false);

	const [name, setName] = useState('');
	const [nameBase, setNameBase] = useState('');

	const toast = useToast();

	const checkFields = () => {
		if (!name || !nameBase) return toast(toastHelper('name'));
		if (!top && !jg && !mid && !adc && !sup) return toast(toastHelper('role'));
		if (!ad && !ap && !tank) return toast(toastHelper('type'));
		return true;
	};

	const fetchAddChampion = async () => {
		if (checkFields() !== true) return;
		try {
			const data = await addChampion({
				name,
				nameBase,
				top,
				jg,
				mid,
				adc,
				sup,
				ad,
				ap,
				tank,
				ranged,
			});
			if (data.status !== 'OK') return toast(toastHelper('alreadyExists'));
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
					value={name}
					textAlign='center'
					onChange={(e) => setName(e.target.value)}
				/>
			</Box>
			<Box mb={10}>
				<Heading textAlign='center' mb={5} size='md'>
					Base Name
				</Heading>
				<Input
					value={nameBase}
					textAlign='center'
					onChange={(e) => setNameBase(e.target.value)}
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
								<Checkbox
									isChecked={top}
									onChange={() => setTop(!top)}
									value='top'
								>
									Top
								</Checkbox>
								<Checkbox isChecked={jg} onChange={() => setJg(!jg)} value='jg'>
									Jg
								</Checkbox>
								<Checkbox
									isChecked={mid}
									onChange={() => setMid(!mid)}
									value='mid'
								>
									Mid
								</Checkbox>
								<Checkbox
									isChecked={adc}
									onChange={() => setAdc(!adc)}
									value='adc'
								>
									Adc
								</Checkbox>
								<Checkbox
									isChecked={sup}
									onChange={() => setSup(!sup)}
									value='sup'
								>
									sup
								</Checkbox>
							</Stack>
						</CheckboxGroup>
					</Box>

					<Box mb={10}>
						<Heading textAlign='center' mb={5} size='md'>
							Damage Type
						</Heading>
						<CheckboxGroup colorScheme='green'>
							<Stack justify='center' direction='row'>
								<Checkbox isChecked={ad} onChange={() => setAd(!ad)} value='ad'>
									Ad
								</Checkbox>
								<Checkbox isChecked={ap} onChange={() => setAp(!ap)} value='ap'>
									Ap
								</Checkbox>
								<Checkbox
									isChecked={tank}
									onChange={() => setTank(!tank)}
									value='mid'
								>
									Tank
								</Checkbox>
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
							isChecked={ranged}
							onChange={() => setRanged(!ranged)}
							value='ranged'
						>
							Ranged
						</Checkbox>
					</Box>

					<Box display='flex' justifyContent='center'>
						<Button onClick={fetchAddChampion} colorScheme='green'>
							Add champion
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default NewChampion;
