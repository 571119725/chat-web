import styles from './responseDialog.module.css';
function ResponseDialog (props) {
  return (
    <div className={styles.response_dialog}>
      <div className={styles.response_box}>
        <div className={styles.response_infor_title}>
          <div className={styles.response_infor_name}>数字人组</div>
          <div className={styles.response_operation}>
            <div className='iconfont'>&#xe611;</div>
          </div>
        </div>
        <div className={styles.response_infor_body}>
          <div className={styles.response_portrait}></div>
          <div className={styles.response_infor_content}>{props.responseInfor}</div>
        </div>
      </div>
      <div className={styles.response_infor_time}>{props.time}</div>
    </div>
  )
};
export default ResponseDialog;