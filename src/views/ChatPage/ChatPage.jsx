import styles from './chatPage.module.css';
import moment from 'moment';
import React,{useEffect, useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import {getHistory} from '@/apis';
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
          console.log(res);
        }
      )
      childRef.current.scrollToBottom();
    },[dialogInfor,childRef]
  );
  const showContentInfor = (infor) => {
    let convers = [...dialogInfor];
    const temp = {
      content: infor,
      fromUserId: sessionStorage.getItem('userId'),
      toUserId: 1,
      time: moment().format('HH:mm')
    };
    convers.push(temp);
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