// Contact.js
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
        <h2>Contact me!</h2>
        <p>I'm excited to hear about your upcoming project! Let's talk about how I can help you.</p>
        {/* Add your contact form or contact information here */}
        <p>You can reach me via: <a href="mailto:riostiziano6@gmail.com">riostiziano6@gmail.com</a></p>
        <p>Or give me a call or message at: +54 011 6889-0924</p>
        <p>Feel free to check out my <a href="https://www.flipsnack.com/5AA7B699E8C/cv-tiziano-rios-full-stack-developer/full-view.html" target="_blank" rel="noopener noreferrer">CV</a>.</p>
                {/* GitHub Icon and Link */}
                <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className={styles.icon} />
        </a>

        {/* LinkedIn Icon and Link */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" className={styles.icon} />
        </a>
    </section>
  );
}

export default Contact;
