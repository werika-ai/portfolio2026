import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

const companies = [
  { name: "IMBURSA", color: "hover:text-blue-600" },
  { name: "SANTANDER ARGENTINA", color: "hover:text-red-600" },
  { name: "BRUBANK", color: "hover:text-purple-600" },
  { name: "BANCO DE CHILE", color: "hover:text-blue-800" }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white border-b border-black/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          {t.experience.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`text-xl md:text-2xl font-bold text-gray-400 transition-colors duration-300 cursor-default ${company.color}`}
            >
              {company.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
