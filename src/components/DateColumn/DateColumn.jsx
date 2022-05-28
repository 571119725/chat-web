import styles from './dateColumn.module.css';
function DateColumn (props) {
  return (
    <div className={styles.date_column}>
      ——————&nbsp;&nbsp;&nbsp;&nbsp;{props.date}&nbsp;&nbsp;&nbsp;&nbsp;——————
    </div>
  )
};
export default DateColumn;