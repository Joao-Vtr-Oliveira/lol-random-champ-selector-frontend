import { AgentReturn } from '@/types/agentReturn';
import { rolesAgentArray } from '@/utils/agentInfo';
import { createAgentArray } from '@/utils/createArray';
import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';

const AgentCard = ({ agent }: { agent: AgentReturn }) => {  
  const roles = createAgentArray(rolesAgentArray, agent);

	return (
		<Card display={'flex'} mb={10} flexDirection={'column'}>
			<CardHeader textAlign='center'>
				<Heading fontSize='2xl' color='customPurple'>{agent.name}</Heading>
			</CardHeader>
			<CardBody>
				<Box fontWeight='bold' textAlign='center'>Role: {roles.join(', ')}</Box>
			</CardBody>
      {/* <CardFooter>
        <Box margin='auto'>
          {champion.nameBase !== '-' &&
          <Link href={`/champion/${champion.nameBase}`}>
            <Button colorScheme='yellow'>Edit</Button>
          </Link>
          }
        </Box>
      </CardFooter> */}
		</Card>
	);
};

export default AgentCard;
