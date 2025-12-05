import { useState } from "react";
import "../assets/style/contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactDetails = [
    {
      id: 1,
      icon: <FaPhone />,
      title: "Téléphone / Whathsapp",
      detail: "(+229) 01 56 98 31 33"
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email",
      detail: "quenumcarlos20@icloud.com"
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      detail: "Cotonou, fidjrossè - center"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Réinitialisation après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="page contact">
      {/* Dégradé similaire aux autres pages */}
      <div className="contact-gradient-overlay"></div>
      
      <div className="contact-container">
        {/* Partie gauche - Informations de contact */}
        <div className="contact-box left-box">
          <h2>Travaillons ensemble</h2>
          <p className="desc">
            Vous avez un projet en tête ou souhaitez discuter d'une collaboration ? 
            Je suis toujours ouvert à de nouvelles opportunités et serai ravi 
            de concrétiser vos idées avec vous.
          </p>

          {contactDetails.map((item) => (
            <div className="contact-detail" key={item.id}>
              <div className="detail-icon">
                {item.icon}
              </div>
              <div className="detail">
                <p className="detail-title">{item.title}</p>
                <p className="detail-info">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partie droite - Formulaire */}
        <div className="contact-box right-box">
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <FaCheckCircle />
              </div>
              <h3 className="success-title">Message envoyé !</h3>
              <p className="success-text">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <button 
                className="success-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="heading">Contactez-<span>moi !</span></h2>
              
              <div className="field-box">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nom complet"
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Adresse email"
                  required
                />
                
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                  required
                />
                
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet du message"
                  required
                />
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="submit-icon" />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}