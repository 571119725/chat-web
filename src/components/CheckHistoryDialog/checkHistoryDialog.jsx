import styles from './checkHistoryDialog.module.css';
function CheckHistoryDialog (props) {
  return (
    <div className={styles.check_history_dialog} onClick={props.checkHistoryDialog}>
      <span>查看历史记录</span>
    </div>
  )
};
export default CheckHistoryDialog;