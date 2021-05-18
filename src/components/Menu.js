import React from 'react';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom'
import MenuIcon from 'images/menu.svg'
import CloseIcon from 'images/close.svg'
import styles from 'styles/menu.module.css'
import Data from 'data/MenuData.js'

export default function MenuBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <React.Fragment>
      <div className={ styles.hamburger } onClick={handleClick}>
        <img src={MenuIcon} alt=""></img>
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '25%',
            height: '100%',
            maxHeight: '100%',
            display: 'flex',
            position: 'initial',
            alignItems: 'center',
            justifyContent: 'center'
          },
        }}
        MenuListProps={{
          style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            flexDirection: 'column',
          }
        }}
      >
        <span className={styles.close} onClick={handleClose}>
          <img src={CloseIcon} alt=""></img>
        </span>
        <div className={styles.item}>
          {Data.map (d => (
            <NavLink exact to={d.url} onClick={handleClose} activeStyle={{fontWeight: "bold"}}>
                {d.title}
            </NavLink>
          ))}
        </div>
      </Menu>
    </React.Fragment>
  );
}