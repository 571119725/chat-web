import styles from './chatPage.module.css';
import React,{useState} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
import moment from 'moment';
function ChatPage () {
  const [dialogInfor,setDialogInfor] = useState([]);
  const childRef = React.createRef();
  const showContentInfor = (infor) => {
    let convers = [...dialogInfor];
    const temp = {
      questionInfor: infor,
      time: moment().format('HH:mm:ss')
    }
    convers.push(temp);
    setDialogInfor(convers);
    childRef.current.scrollToBottom();
  }
  return (
    <div className={styles.chat_page}>
      <ChatWindow converInfor={dialogInfor} onRef={childRef}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;