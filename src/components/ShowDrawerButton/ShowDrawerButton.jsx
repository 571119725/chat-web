import styles from './showDrawerButton.module.css';
function ShowDrawerButton (props) {
  return (
    <div className={styles.show_drawer_button}>
      <div className='iconfont' onClick={props.onShowDrawer}>&#xe6a1;</div>
    </div>
  )
};
export default ShowDrawerButton;