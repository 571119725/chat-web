import styles from './login.module.css';
function LogIn () {
  return (
    <div className={styles.log_in}>
      <div className={styles.log_in_title}>Hello !</div>
      <div className={styles.username_input}>
        <input placeholder='USERNAME!'/>
      </div>
      <div className={styles.log_in_button}>LOGIN</div>
    </div>
  )
};
export default LogIn;