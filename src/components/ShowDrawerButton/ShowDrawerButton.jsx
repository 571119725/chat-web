import styles from './showDrawerButton.module.css';
function ShowDrawerButton () {
  let showMask = false;
  const onChangeMaskShow = () => {
    showMask = !showMask;
    console.log(showMask);
  };
  return (
    <div className={styles.show_drawer_button}>
      <div className='iconfont' onClick={onChangeMaskShow}>&#xe6a1;</div>
      <div className={(showMask ? styles.mask_show:'')}></div>
    </div>
  )
};
export default ShowDrawerButton;