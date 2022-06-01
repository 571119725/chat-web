import styles from './chatPage.module.css';
import React,{useEffect, useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import {getHistoryMsgSingleDay, evaluateMessage} from '@/apis';
import moment from 'moment';
function ChatPage () {
  const [dialogInfor,setDialogInfor] = useState([]);
  const childRef = React.createRef();
  const getHistoryMsg = (date, isToday) => {
    const infor = {
      userid: sessionStorage.getItem('userId'),
      current_day: date,
      is_today: isToday
    };
    getHistoryMsgSingleDay(infor).then(
      res => {
        if(res){
          const infor = {
            content: res['content'],
            day: res['day']
          };
          let temp = [...dialogInfor];
          temp.unshift(infor);
          setDialogInfor(temp);
        }
      }
    );
  };
  const showContentInfor = (infor) => {
    if(moment().format('YYYY-MM-DD') === dialogInfor[dialogInfor.length-1].day){
      dialogInfor[dialogInfor.length-1].content.push(infor);
      setDialogInfor([...dialogInfor]);
    }else {
      const temp = {
        day: moment().format('YYYY-MM-DD'),
        content: [infor]
      };
      setDialogInfor(temp);
    }
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
    evaluateMessage(infor);
  };
  const getPreviousHistory = () => {
    console.log(1111);
  }
  useEffect(
    () => {
      getHistoryMsg(moment().format('YYYY-MM-DD'),1);
    },[]
  );
  useEffect(
    () => {
      childRef.current.scrollToBottom();
    },[dialogInfor,childRef]
  );
  return (
    <div className={styles.chat_page}>
      <ChatWindow 
        onRef={childRef}
        converInfor={dialogInfor}  
        onChooseLevel={(id,level) => chooseLevel(id,level)} 
        onGetHistory={getPreviousHistory}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;