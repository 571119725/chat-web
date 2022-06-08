import styles from './chatPage.module.css';
import React,{useEffect, useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import {getHistoryMsgSingleDay, evaluateMessage} from '@/apis';
import moment from 'moment';
function ChatPage () {
  const [dialogInfor,setDialogInfor] = useState([]);
  const [currentDay, setCurrentDay] = useState('');
  const [inputNewMessage, setInputNewMessage] = useState(false);
  const childRef = React.createRef();
  useEffect(
    () => {
      setCurrentDay(moment().format('YYYY-MM-DD'));
      const infor = {
        userid: sessionStorage.getItem('userId'),
        current_day: moment().format('YYYY-MM-DD'),
        is_today: 1
      };
      getHistoryMsgSingleDay(infor).then(
        res => {
          if(res) {
            const temp = [];
            temp.push({date: res.day, type: -1});
            temp.push(...res.content);
            setDialogInfor([...temp]);
          }
        }
      )
    },[]
  )
  useEffect(
    () => {
      if(inputNewMessage){
        childRef.current.scrollToBottom();
        setInputNewMessage(false);
      }
    },[dialogInfor,childRef]
  );
  const showContentInfor = (infor) => {
    dialogInfor.push(infor);
    setDialogInfor([...dialogInfor]);
    setInputNewMessage(true);
  };
  const checkHistoryDialog = () => {
    const infor = {
      userid: sessionStorage.getItem('userId'),
      current_day: currentDay,
      is_today: 0
    };
    getHistoryMsgSingleDay(infor).then(
      res => {
        if(res) {
          const newData = [];
          newData.push({date: res.day, type: -1});
          newData.push(...res.content);
          const temp = dialogInfor;
          temp.unshift(...newData);
          setDialogInfor([...temp])
          setCurrentDay(res.day);
        }
      }
    )
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
  return (
    <div className={styles.chat_page}>
      <ChatWindow converInfor={dialogInfor} onRef={childRef} onChooseLevel={(id,level) => chooseLevel(id,level)} checkHistoryDialog={checkHistoryDialog}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;