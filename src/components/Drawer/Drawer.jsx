import styles from './drawer.module.css';
import SideMenuBar from '../SideMenuBar/SideMenuBar';
function Drawer (props) {
  return (
    <div>
      <div className={props.showDrawer ? styles.show_drawer:styles.hide_drawer} onClick={props.onHideDrawer}></div>
      <div className={props.showDrawer ? styles.drawer_in:styles.drawer_out}>
        <SideMenuBar />
      </div>
    </div>
  )
};
export default Drawer;