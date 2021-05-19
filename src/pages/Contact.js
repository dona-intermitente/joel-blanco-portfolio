import styles from 'styles/contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
        <div className='titles'>
            <h1 className='title'>Contact</h1>
            <h2 className='subtitle'>Contáctame</h2>
        </div>
        <form className={'body '+ styles.form}>
          <label for='name'>
            <p>Nombre :</p>
            <input id='name' type='text'/>
          </label>
          <label for='email'>
            <p>Email :</p>
            <input id='email' type='emal'/>
          </label>
          <label className={styles.msg} for='msg'>
            <p>Mensaje :</p>
            <textarea id='msg'/>          
          </label>
          <button className='body' type='submit'>Enviar</button>
        </form>
    </div>
  )
}