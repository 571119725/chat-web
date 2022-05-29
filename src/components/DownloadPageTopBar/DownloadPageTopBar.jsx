import styles from './downloadPageTopBar.module.css';
import ShowDrawerButton from '../ShowDrawerButton/ShowDrawerButton';
function DownloadPageTopBar (props) {
  return (
    <div className={styles.download_page_top_bar}>
        <ShowDrawerButton onShowDrawer={props.onShowDrawer}/>
        <div className={styles.tip_title}>
          <span>客户端下载</span>
        </div>
    </div>
  )
};
export default DownloadPageTopBar;