import { AgentReturn, AgentRole } from '@/types/agentReturn';

export const rolesAgentArray: AgentRole[] = ['controller', 'duelist', 'initiator', 'sentinel'];

export const agentBase: AgentReturn = {
  name: 'Name of the Agent',
  controller: false,
  duelist: false,
  initiator: false,
  sentinel: false
};
