import styles from './questionDialog.module.css';
function QuestionDialog (props) {
  return (
    <div className={styles.question_dialog}>
      <div className={styles.question_infor_time}>{props.time}</div>
      <div className={styles.question_box}>
        <div className={styles.question_infor_title}>
          <div className={styles.question_operation}>
            <div className='iconfont'>&#xe611;</div>
          </div>
          <div className={styles.question_infor_name}></div>
        </div>
        <div className={styles.question_infor_body}>
          <div className={styles.question_infor_content}>{props.content}</div>
          <div className={styles.question_portrait}></div>
        </div>
      </div>
    </div>
  )
};
export default QuestionDialog;