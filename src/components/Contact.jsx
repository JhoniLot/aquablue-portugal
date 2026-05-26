import React from 'react';
import { MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>Pronta para transformar seu dia?</h2>
            <p className="contact-desc">
              Não temos burocracia nem filas de espera. O seu agendamento é feito 
              de forma rápida e direta pelo nosso WhatsApp. Fale com a nossa equipe agora mesmo!
            </p>
            
            <a href="https://wa.me/351913306899" target="_blank" rel="noreferrer" className="btn btn-whatsapp whatsapp-lg">
              <MessageCircle size={24} style={{marginRight: '0.5rem'}} />
              Falar no WhatsApp
            </a>
            
            <div className="contact-details">
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <MapPin size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>Centro Comercial Cruz de Pedra Loja nº43<br/>4700-219 Braga, Portugal</span>
              </div>
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <Clock size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>
                  <b>Terça a Sexta:</b> 09:30 – 13:00 | 14:30 – 19:00<br/>
                  <b>Sábado:</b> 09:30 – 13:00 | 14:30 – 18:00<br/>
                  <b>Dom e Seg:</b> Fechado
                </span>
              </div>
            </div>
          </div>
          
          <div className="contact-image-wrapper">
             <div className="contact-image-placeholder">
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
