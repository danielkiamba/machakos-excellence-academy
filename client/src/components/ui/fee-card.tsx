import { Link } from "wouter";
import { type Fee } from "@shared/schema";

interface FeeCardProps {
  fee: Fee;
}

const FeeCard = ({ fee }: FeeCardProps) => {
  return (
    <div className={`bg-neutral-100 rounded-lg overflow-hidden border border-gray-200 ${fee.isPopular ? 'shadow-lg relative' : 'hover:shadow-md transition duration-300'}`}>
      {fee.isPopular && (
        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <div className="bg-primary text-white py-4 px-6 text-center">
        <h3 className="font-poppins font-bold text-xl">{fee.title}</h3>
        <p className="text-sm text-gray-200">{fee.subtitle}</p>
      </div>
      <div className="p-6">
        <div className="text-center mb-6">
          <span className="text-3xl font-bold font-poppins text-primary">KSh {fee.amount}</span>
          <span className="text-gray-600">/{fee.period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {fee.features.map((feature, index) => (
            <li className="flex items-start" key={index}>
              <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/fees#${fee.title.toLowerCase().replace(/\s+/g, '-')}-details`}>
          <a className="block text-center bg-secondary hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            View Details
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeeCard;
