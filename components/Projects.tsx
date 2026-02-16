import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  { title: "Skyline Towers", loc: "Colombo 02", price: "25M", prog: 65, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", tag: "UPCOMING", tagColor: "bg-accent" },
  { title: "Emerald Gardens", loc: "Battaramulla", price: "18M", prog: 85, img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80", tag: "SELLING NOW", tagColor: "bg-green-500" },
  { title: "Palm Residencies", loc: "Negombo", price: "15M", prog: 30, img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80", tag: "PRE-LAUNCH", tagColor: "bg-purple-500" }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/20 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">NEW DEVELOPMENTS</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Ongoing Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Invest in the future with our latest real estate developments across Sri Lanka.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="card-hover group relative rounded-3xl overflow-hidden h-96">
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className={`${proj.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {proj.tag}
                </span>
              </div>
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-2xl font-bold mb-1">{proj.title}</h3>
                <p className="text-gray-300 mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> {proj.loc}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-accent font-bold">Starting from LKR {proj.price}</p>
                  <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-dark transition">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent rounded-full transition-all duration-1000" 
                    style={{ width: `${proj.prog}%` }} 
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{proj.prog}% Complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
