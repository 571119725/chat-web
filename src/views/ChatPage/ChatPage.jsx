import styles from './chatPage.module.css';
import React,{useEffect, useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import {getHistory, evaluateMessage} from '@/apis';
function ChatPage () {
  const [dialogInfor,setDialogInfor] = useState([]);
  const childRef = React.createRef();
  useEffect(
    () => {
      const infor = {
        userid: sessionStorage.getItem('userId')
      };
      getHistory(infor).then(
        res => {
          // console.log(res);
        }
      )
      childRef.current.scrollToBottom();
    },[dialogInfor,childRef]
  );
  const showContentInfor = (infor) => {
    dialogInfor.push(infor);
    setDialogInfor([...dialogInfor]);
  };
  const chooseLevel = (id, level) => {
    let temp = [...dialogInfor];
    temp.forEach( element => {
      if (element.msgid === id) {
        element.evaluation = level;
      }
    });
    setDialogInfor(temp);
    const infor = {
      msgid: id,
      evaluate: level
    };
    console.log(infor);
    evaluateMessage(infor).then(
      res => console.log(res)
    )
  }
  return (
    <div className={styles.chat_page}>
      <ChatWindow converInfor={dialogInfor} onRef={childRef} onChooseLevel={(id,level) => chooseLevel(id,level)}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;