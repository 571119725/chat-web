import styles from './chatPage.module.css';
import React,{useEffect, useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import {getHistory} from '@/apis';
function ChatPage () {
  const [dialogInfor,setDialogInfor] = useState([]);
  const childRef = React.createRef();
  useEffect(
    () => {
      // console.log(dialogInfor);
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
    console.log(dialogInfor, infor)
    // console.log(dialogInfor);
    let convers = [...dialogInfor];
    convers.push(infor);
    console.log(convers);
    setDialogInfor(convers);
  };
  return (
    <div className={styles.chat_page}>
      <ChatWindow converInfor={dialogInfor} onRef={childRef}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;