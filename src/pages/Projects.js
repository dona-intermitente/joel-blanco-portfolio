import React from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CloseIcon from 'images/close.svg'
import Data from 'data/ProjectsData'
import styles from 'styles/projects.module.css'

export default function Proyects() {
  const [open, setOpen] = React.useState(false);

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='titles'>
          <h1 className='title'>My Projects</h1>
          <h2 className='subtitle'>Trabajos</h2>
      </div>
      <div className='content'>
        {Data.map(p => (
        <>  
          <div className={styles.proyect} onClick={modalOpen}>
            <button className={'body '+ styles.overlay}>
              <p>{p.title}</p>
            </button>
            <img src={p.img} alt=''/>
          </div>
          <Modal
          className={styles.modal}
          open={open}
          onClose={modalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          >
            <Fade in={open}>
              <div className={styles.paper}>
                <div className={styles.close} onClick={modalClose}>
                  <img src={CloseIcon} alt=""></img>
                </div>
                <div className={styles.images}>
                  {p.content.map (i => (
                    <img src={i.img2} alt=''/>
                  ))}
                </div>
                <div className={styles.text}>
                  <p className='titles title'>{p.title}</p>
                  <p className='body'>{p.text}</p>
                </div>
              </div>
            </Fade>
          </Modal>
        </>
        ))}
      </div>
    </>
  );
}