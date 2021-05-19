import Image from 'images/image.png'
import styles from 'styles/about.module.css'

export default function about() {
  return (
    <>
        <div className='titles'>
            <h1 className='title'>About me</h1>
            <h2 className='subtitle'>Quien soy</h2>
        </div>
        <div className={'content body'}>
            <div className={styles.section}>
                <img src={Image} alt=""/>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                </p>
            </div>
            <div className={styles.section}>
                <img src={Image} alt=""/>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                </p>
            </div>
            <div className={styles.section}>
                <img src={Image} alt=""/>
                <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                </p>
            </div>
        </div>
    </>
  )
}