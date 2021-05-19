import { BrowserRouter as Router, Link } from 'react-router-dom'
import Logo from 'images/logo.png'
import styles from 'styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <img className={styles.logo} src={Logo} alt=""/>
      <div>
        <h1 className='title'>Joel Blanco</h1>
        <h2 className='subtitle'>Developer Full stack</h2>
      </div>
      <button className={'body-bold '+ styles.button}>
        <Router>
          <Link href='/contact'>Contact</Link>
        </Router>
      </button>
    </div>
  )
}