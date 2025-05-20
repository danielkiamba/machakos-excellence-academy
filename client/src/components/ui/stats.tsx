interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

const Stats = ({ stats }: StatsProps) => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold font-poppins mb-2">{stat.value}</div>
              <p className="text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
