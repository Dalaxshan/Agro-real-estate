import { Building } from "lucide-react";

const categories = [
  { name: "Houses", count: "2,340", color: "bg-blue-50", iconColor: "text-primary-500" },
  { name: "Apartments", count: "1,870", color: "bg-purple-50", iconColor: "text-purple-500" },
  { name: "Villas", count: "640", color: "bg-emerald-50", iconColor: "text-emerald-500" },
  { name: "Land", count: "3,120", color: "bg-amber-50", iconColor: "text-amber-500" },
  { name: "Commercial", count: "890", color: "bg-rose-50", iconColor: "text-rose-500" },
  { name: "Industrial", count: "210", color: "bg-cyan-50", iconColor: "text-cyan-500" },
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">BROWSE BY CATEGORY</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark mb-4">Explore Property Types</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Find exactly what you&apos;re looking for. Browse through our diverse categories of properties.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-6 text-center cursor-pointer group shadow-sm hover:shadow-xl border border-gray-100">
              <div className={`w-16 h-16 mx-auto mb-4 ${cat.color} group-hover:bg-primary-500 rounded-2xl flex items-center justify-center transition-all duration-300`}>
                <Building className={`w-8 h-8 ${cat.iconColor} group-hover:text-white transition-colors`} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-400">{cat.count} listings</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
