import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-container">
        <img src="/hero.jpg" alt="Interior da Clínica de Estética" className="hero-bg" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-subtitle">A sua melhor versão</span>
          <h1 className="hero-title">Realce a sua beleza com a <span>AquaBlue</span></h1>
          <p className="hero-description">
            Especialistas em estética avançada. Agende uma avaliação e descubra 
            o tratamento ideal para as suas necessidades.
          </p>
          
          <div className="hero-buttons">
            <a href="https://wa.me/351913306899" target="_blank" rel="noreferrer" className="btn btn-whatsapp">Agendar pelo WhatsApp</a>
            <a href="#services" className="btn btn-outline" style={{background: 'white', color: 'var(--text-main)', border: '1px solid #e2e8f0'}}>Ver Tratamentos</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
