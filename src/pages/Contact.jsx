import { useState, useEffect } from "react";
import "../assets/style/contact.css";
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [theme, setTheme] = useState('light');

  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ici, tu intégreras ton véritable service d'envoi d'email
      // Par exemple : EmailJS, Formspree, ou ton backend
      
      console.log("Données du formulaire:", formData);
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="page contact">
      <div className="contact-gradient-overlay"></div>
      
      <div className="contact-container">
        {/* Partie gauche - Informations de contact */}
        <div className="contact-box left-box">
          <h2>Contactez-moi</h2>
          <p className="desc">
            N'hésitez pas à me contacter pour discuter de votre projet, 
            demander un devis ou simplement échanger sur vos besoins.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <div className="detail-icon">
                <FaEnvelope />
              </div>
              <div className="detail">
                <div className="detail-title">Email</div>
                <p className="detail-info">quenumcarlos20@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="detail-icon">
                <FaPhone />
              </div>
              <div className="detail">
                <div className="detail-title">Téléphone</div>
                <p className="detail-info">(+229) 01 56 98 31 33</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="detail-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="detail">
                <div className="detail-title">Localisation</div>
                <p className="detail-info">Cotonou, Bénin</p>
              </div>
            </div>
          </div>
          
          <p className="desc" style={{ marginTop: '2rem' }}>
            Je m'efforce de répondre à tous les messages dans les 24 heures.
            Pour les demandes urgentes, privilégiez l'appel téléphonique.
          </p>
        </div>

        {/* Partie droite - Formulaire */}
        <div className="contact-box right-box">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="heading">Envoyez-moi <span>un message</span></h3>
              
              <div className="field-box">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet (optionnel)"
                  value={formData.subject}
                  onChange={handleChange}
                />
                
                <textarea
                  name="message"
                  placeholder="Votre message *"
                  value={formData.message}
                  onChange={handleChange}
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
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="submit-icon" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3 className="success-title">Message envoyé !</h3>
              <p className="success-text">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <button 
                className="success-btn"
                onClick={resetForm}
              >
                Envoyer un autre message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}