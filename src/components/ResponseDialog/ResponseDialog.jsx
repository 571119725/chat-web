import styles from './responseDialog.module.css';
function ResponseDialog () {
  return (
    <div className={styles.response_dialog}>
      <div className={styles.response_box}>
        <div className={styles.response_infor_title}>
          <div className={styles.response_infor_time}>10:43</div>
          <div className={styles.response_operation}>
            <div className='iconfont'>&#xe611;</div>
          </div>
        </div>
        <div className={styles.response_infor_body}>
          <div className={styles.response_portrait}></div>
          <div className={styles.response_infor_content}>1111ssssssssssssssssssssssssssssssssssssssssssssssssssssss1111</div>
        </div>
      </div>
    </div>
  )
};
export default ResponseDialog;