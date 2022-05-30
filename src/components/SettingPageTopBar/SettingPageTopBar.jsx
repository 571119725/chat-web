import styles from './settingPageTopBar.module.css';
import ShowDrawerButton from '../ShowDrawerButton/ShowDrawerButton';
function SettingPageTopBar (props) {
  return (
    <div className={styles.setting_page_top_bar}>
      <ShowDrawerButton onShowDrawer={props.onShowDrawer}/>
      <div className={styles.tip_title}>
        <span>设置</span>
      </div>
    </div>
  )
};
export default SettingPageTopBar;