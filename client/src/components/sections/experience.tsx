import { motion } from "framer-motion";

const companies = [
  { name: "Google", color: "hover:text-blue-500" },
  { name: "Airbnb", color: "hover:text-rose-500" },
  { name: "Spotify", color: "hover:text-green-500" },
  { name: "Stripe", color: "hover:text-indigo-500" },
  { name: "Netflix", color: "hover:text-red-600" }
];

export default function Experience() {
  return (
    <section className="py-16 bg-white border-b border-black/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Trusted by innovative companies</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`text-2xl md:text-3xl font-bold text-gray-400 transition-colors duration-300 cursor-default ${company.color}`}
            >
              {company.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
