import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  const submitHandler = async (e) => {
    console.log(JSON.stringify(e.target));
    await fetch("/.netlify/functions/lead", {method: 'POST', body: JSON.stringify({name: 'Kees', email: 'kees@keesie.nl'})})
    window.URL = "/success"
  }
  return (
      <form onSubmit={submitHandler}>
  
        <label htmlFor="name">Naam</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="email">Emailadres</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <button className={styles.button} type="submit">Draai aan het rad!</button>
      </form>
  )
}
