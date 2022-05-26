import styles from './questionDialog.module.css';
function QuestionDialog () {
  return (
    <div className={styles.question_dialog}>
      <div className={styles.question_infor_time}>10:43</div>
      <div className={styles.question_box}>
        <div className={styles.question_infor_title}>
          <div className={styles.question_operation}>
            <div className='iconfont'>&#xe611;</div>
          </div>
          <div className={styles.question_infor_name}>我</div>
        </div>
        <div className={styles.question_infor_body}>
          <div className={styles.question_infor_content}>1111ssssssssssssssssssssssssssssssssssssssssssssssssssssss1111</div>
          <div className={styles.question_portrait}></div>
        </div>
      </div>
    </div>
  )
};
export default QuestionDialog;