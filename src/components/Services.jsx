import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Droplets, Smile, Fingerprint, Activity, Heart, Star, Sun, Wind, Gem, Scissors, Eye } from 'lucide-react';
import './Services.css';

const services = [
  { id: 1, name: 'Microneedling', icon: <Activity size={24} />, desc: 'Renovação celular e estimulação de colagénio.' },
  { id: 2, name: 'Limpeza facial', icon: <Droplets size={24} />, desc: 'Pele livre de impurezas, macia e hidratada.' },
  { id: 3, name: 'Epilação a laser', icon: <Sun size={24} />, desc: 'Pele lisa com tecnologia indolor.' },
  { id: 4, name: 'Epilação a cera', icon: <Wind size={24} />, desc: 'Método tradicional com cera hipoalergênica.' },
  { id: 5, name: 'Epilação a linha', icon: <Scissors size={24} />, desc: 'Design perfeito e remoção precisa.' },
  { id: 6, name: 'Unhas de gel e Verniz gel', icon: <Gem size={24} />, desc: 'Unhas impecáveis e duradouras.' },
  { id: 7, name: 'Drenagem Linfática', icon: <Fingerprint size={24} />, desc: 'Redução de retenção de líquidos e toxinas.' },
  { id: 8, name: 'Massagem Terapêutica', icon: <Heart size={24} />, desc: 'Alívio de dores e tensões musculares.' },
  { id: 9, name: 'Massagem de relaxamento', icon: <Smile size={24} />, desc: 'Momento puro de tranquilidade.' },
  { id: 10, name: 'Lifting de Pestanas', icon: <Eye size={24} />, desc: 'Olhar marcante com pestanas curvadas.' },
  { id: 11, name: 'Hidragloss', icon: <Sparkles size={24} />, desc: 'Lábios hidratados e revitalizados.' },
  { id: 12, name: 'Browlamination', icon: <Star size={24} />, desc: 'Sobrancelhas alinhadas e volumosas.' },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Os Nossos Tratamentos</h2>
        <p className="section-subtitle">Descubra a nossa gama completa de serviços pensados para realçar a sua beleza natural.</p>
        
        <div className="services-grid">
          {services.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="service-card"
            >
              <div className="service-icon">{item.icon}</div>
              <h3 className="service-title">{item.name}</h3>
              <p className="service-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
