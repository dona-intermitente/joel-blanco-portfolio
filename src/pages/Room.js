import ThreeScene from 'components/Model';
import styles from 'styles/room.module.css'

export default function Room() {
  return (
    <>
      <div className={styles.room}>
        <ThreeScene/>
        <div className={"body " + styles.text}>Haz clic para navegar</div>
      </div>
    </>
  );
}