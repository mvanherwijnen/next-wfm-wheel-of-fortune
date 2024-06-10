import styles from './FeedbackForm.module.css'
import { useEffect, useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const submitHandler = async () => {
    if (!name) {
      setNameError('Naam is verplicht');
      return;
    }
    setNameError('');
    if (/^[^@]+@[^@]+\.[^@]+$/.test(email) === false) {
      setEmailError('Invalide email');
      return;
    }
    setEmailError('');
    const response = await fetch("/.netlify/functions/lead", {method: 'POST', body: JSON.stringify({name, email})})
    setName('');
    setEmail('');
    window.location.href = `/success?dealId=${(await response.json()).dealId}`
  }
  return (
  <div>
      {nameError ? <div style={{color: 'red'}}>{nameError}</div> : <label htmlFor="name">Naam</label>}
      <input id="name" className={styles['form-field']} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

      {emailError ? <div style={{color: 'red'}}>{emailError}</div> : <label htmlFor="email">E-mailadres</label>}
      <input id="email" className={styles['form-field']} type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

      <button className={styles.button} type="submit" onClick={submitHandler}>Draai aan het rad!</button>
  </div>
  )
}
