export type AgentReturn = {
  name: string;
  controller: boolean;
  sentinel: boolean;
  initiator: boolean;
  duelist: boolean;
}

export type AgentRole = 'controller' | 'sentinel' | 'initiator' | 'duelist';