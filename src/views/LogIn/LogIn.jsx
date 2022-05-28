import styles from './login.module.css';
import { useNavigate } from "react-router-dom";
import Warnning from '@/components/Warnning/Warnning';
import { useState } from 'react';
import { createUser } from '@/apis';
function LogIn () {
  const [userName, setUserName] = useState('');
  const [warnning, setWarnning] = useState('');
  const nav = useNavigate();
  const logInCheck = () => {
    if(userName === ''){
      setWarnning('User name cannot be empty!');
      setTimeout(setWarnning,5000,'');
    }else {
      const infor = {
        username: userName.replace(/[\r\n]/g, '')
      };
      createUser(infor).then(
        res => {
          sessionStorage.setItem('userId', res.id);
          sessionStorage.setItem('userName', res.username);
          nav('/mainPage/chatPage');
        }
      )
    }
  };
  return (
    <div className={styles.log_in}>
      <div className={styles.log_in_title}>Hello !</div>
      <div className={styles.username_input}>
        <input 
        placeholder='USERNAME!' 
          onChange={(e) => setUserName(e.target.value)}
          onKeyUp={(e) => {
            if(e.keyCode === 13) {
              logInCheck();
            };
          }}/>
        <Warnning warnMessage={warnning}/>
      </div>
      <div className={styles.log_in_button} onClick={logInCheck}>LOGIN</div>
    </div>
  )
};
export default LogIn;