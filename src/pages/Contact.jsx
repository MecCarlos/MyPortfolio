import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/style/contact.css";
import { FaPaperPlane, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation();

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
    if (!formData.name || !formData.surname || !formData.email || !formData.message) {
      alert(t("fillRequiredFields"));
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
        surname: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert(t("submitError"));
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
          <h2>{t("contactMe")}</h2>
          <p className="desc">
            {t("contactDescription")}
          </p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <div className="detail-icon">
                <FaEnvelope />
              </div>
              <div className="detail">
                <div className="detail-title">{t("email")}</div>
                <p className="detail-info">quenumcarlos20@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="detail-icon">
                <FaPhone />
              </div>
              <div className="detail">
                <div className="detail-title">{t("phone")}</div>
                <p className="detail-info">(+229) 01 56 98 31 33</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="detail-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="detail">
                <div className="detail-title">{t("location")}</div>
                <p className="detail-info">{t("cotonouBenin")}</p>
              </div>
            </div>
          </div>
          
          <p className="desc" style={{ marginTop: '2rem' }}>
            {t("responseTime")}
          </p>
        </div>

        {/* Partie droite - Formulaire */}
        <div className="contact-box right-box">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="heading">{t("sendMe")} <span>{t("aMessage")}</span></h3>
              
              <div className="field-box">
                <input
                  type="text"
                  name="name"
                  placeholder={`${t("yourName")} *`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="surname"
                  placeholder={`${t("yourSurname")} *`}
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder={`${t("yourEmail")} *`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder={`${t("subjectOptional")}`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                
                <textarea
                  name="message"
                  placeholder={`${t("yourMessage")} *`}
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
                    {t("sending")}...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="submit-icon" />
                    {t("send")}
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <h3 className="success-title">{t("messageSent")}!</h3>
              <p className="success-text">
                {t("thankYouMessage")}
              </p>
              <button 
                className="success-btn"
                onClick={resetForm}
              >
                {t("sendAnotherMessage")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}