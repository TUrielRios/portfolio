import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  const toggleLanguage = () => {
    setIsSpanish(!isSpanish);
  };

  const handleViewCV = () => {
    window.open('/CV TIZIANO RIOS DESARROLLADOR FULL STACK.pdf', '_blank');
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>{isSpanish ? '¡Contáctame!' : 'Contact me!'}</h2>
      <p>{isSpanish ? '¡Estoy emocionado de saber sobre tu próximo proyecto! Hablemos sobre cómo puedo ayudarte.' : "I'm excited to hear about your upcoming project! Let's talk about how can I help you."}</p>
      {/* Add your contact form or contact information here */}
      <p>{isSpanish ? 'Puedes contactarme a través de:' : 'You can reach me via:'} <a href="mailto:riostiziano6@gmail.com">riostiziano6@gmail.com</a></p>
      <p>{isSpanish ? 'O llámame o envíame un mensaje a:' : 'Or give me a call or a message at:'} +54 011 6889-0924</p>
      <p>{isSpanish ? 'Siéntete libre de revisar mi' : 'Feel free to check out my'} <button onClick={handleViewCV}>{isSpanish ? 'CV' : 'CV'}</button>.</p>

      {/* GitHub Icon and Link */}
      <a href="https://github.com/TUrielRios" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className={styles.icon} />
      </a>

      {/* LinkedIn Icon and Link */}
      <a href="https://www.linkedin.com/in/tiziano-rios-049b5b264/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" className={styles.icon} />
      </a>
      <button className={styles.languageButton} onClick={toggleLanguage}>
        {isSpanish ? 'Switch to English' : 'Cambiar a Español'}
      </button>
    </section>
  );
}

export default Contact;
