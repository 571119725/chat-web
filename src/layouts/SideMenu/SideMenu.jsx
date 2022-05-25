import styles from './sideMenu.module.css';
// import { NavLink } from "react-router-dom";
import SideMenuBar from '../../components/SideMenuBar/SideMenuBar';
function SideMenu () {
  return (
    <div className={styles.side_menu}>
      <SideMenuBar />
    </div>
  )
};
export default SideMenu;