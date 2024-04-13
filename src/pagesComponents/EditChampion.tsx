'use client';

import { deleteChampion, getSpecificChampion, updateChampion } from '@/requests/script';
import { ChampionReturn } from '@/types/championReturn';
import { PageParams } from '@/types/pageParams';
import {
	Box,
	Button,
	Checkbox,
	CheckboxGroup,
	Heading,
	Input,
	Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';

const EditChampion = ({ params }: PageParams) => {
	const [champion, setChampion] = useState<ChampionReturn>();
  const [info, setInfo] = useState<boolean | 'error'>(false);

  const { push } = useRouter();

	const getChamp = async () => {
    try {
      const data = await getSpecificChampion(params.name);
      console.log(data);
      setChampion(data);
      if(data === null) setInfo('error');
    } catch(error) {
      setInfo('error');
    }
	};

	useEffect(() => {
		getChamp();
	}, []);

  const fetchUpdate = async () => {
    console.log(champion);
    if(!champion) return;
    const data = await updateChampion(champion);
    console.log(data);
    push('/')
  }

  const fetchDelete = async () => {
    if(!champion) return;
    const data = await deleteChampion(champion.name);
    console.log(data);
    push('/')
  }

  if(info === 'error') return <p>Internal Error</p>
	if (!champion) return <p>Loading</p>;

	return (
		<Box>
			<Heading textAlign='center' mb={10}>
				{champion.name}:
			</Heading>
			<Box mb={10}>
				<Heading textAlign='center' mb={5} size='md'>
					Base Name
				</Heading>
				<Input
					value={champion.nameBase}
					textAlign='center'
					onChange={(e) => setChampion({...champion, nameBase: e.target.value})}
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
									isChecked={champion.top}
									onChange={() =>
										setChampion({ ...champion, top: !champion.top })
									}
								>
									Top
								</Checkbox>
								<Checkbox
									isChecked={champion.jg}
									onChange={() =>
										setChampion({ ...champion, jg: !champion.jg })
									}
								>
									Jg
								</Checkbox>
								<Checkbox
									isChecked={champion.mid}
									onChange={() =>
										setChampion({ ...champion, mid: !champion.mid })
									}
								>
									Mid
								</Checkbox>
								<Checkbox
									isChecked={champion.adc}
									onChange={() =>
										setChampion({ ...champion, adc: !champion.adc })
									}
								>
									Adc
								</Checkbox>
								<Checkbox
									isChecked={champion.sup}
									onChange={() =>
										setChampion({ ...champion, sup: !champion.sup })
									}
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
								<Checkbox
									isChecked={champion.ad}
									onChange={() =>
										setChampion({ ...champion, ad: !champion.ad })
									}
								>
									Ad
								</Checkbox>
								<Checkbox
									isChecked={champion.ap}
									onChange={() =>
										setChampion({ ...champion, ap: !champion.ap })
									}
								>
									Ap
								</Checkbox>
								<Checkbox
									isChecked={champion.tank}
									onChange={() =>
										setChampion({ ...champion, tank: !champion.tank })
									}
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
							isChecked={champion.ranged}
							onChange={() =>
								setChampion({ ...champion, ranged: !champion.ranged })
							}
						>
							Ranged
						</Checkbox>
					</Box>

					<Box display='flex' justifyContent='center'>
						<Button
							// isDisabled={!checkFieldsForInput()}
							onClick={fetchUpdate}
							colorScheme='green'
              mr={5}
						>
							Update champion
						</Button>
						<Button
							// isDisabled={!checkFieldsForInput()}
							onClick={fetchDelete}
							colorScheme='red'
						>
							Delete champion
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default EditChampion;
