import styles from './FeedbackForm.module.css'
import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = async () => {
    console.log(JSON.stringify(e.target));
    await fetch("/.netlify/functions/lead", {method: 'POST', body: JSON.stringify({name, email})})
    window.URL = "/success"
  }
  return (
  <div>
      <label htmlFor="name">Naam</label>
      <input id="name" className={styles['form-field']} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Emailadres</label>
      <input id="email" className={styles['form-field']} type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

      <button className={styles.button} type="submit" onClick={submitHandler}>Draai aan het rad!</button>
  </div>
  )
}
