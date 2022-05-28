import styles from './Warnning.module.css';
function Warnning (props) {
  return (
    <div className={styles.warnning}>{props.warnMessage}</div>
  )
};
export default Warnning;