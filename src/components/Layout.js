import styles from 'styles/layout.module.css'

export default function Layout(props) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.block}>
            {props.children}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.block}>
            
        </div>
      </div>
    </div>
  );
}