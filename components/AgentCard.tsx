import { FC } from 'react';
import Image from 'next/image';

interface AgentCardProps {
  agent: {
    name: string;
    image: string;
    description: string;
  };
}

const AgentCard: FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src={agent.image}
          alt={agent.name}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold">{agent.name}</h3>
          <p className="text-gray-500">Real Estate Agent</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{agent.description}</p>
      <button className="w-full bg-primary-500 text-white py-2 rounded-lg font-semibold hover:bg-primary-600 transition">
        Contact Agent
      </button>
    </div>
  );
};

export default AgentCard;
