import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Naam</label>
        <input id="name" className={styles['form-field']} type="text" name="name" />

        <label htmlFor="email">Emailadres</label>
        <input id="email" className={styles['form-field']} type="email" name="email" required />

        <button className={styles.button} type="submit">Draai aan het rad!</button>
      </form>
  )
}
