import styles from './chatPage.module.css';
import React,{useState, useRef} from 'react';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
function ChatPage () {
  const [converInfor,setConverInfor] = useState([]);
  const childRef = useRef();
  const showContentInfor = (infor) => {
    let conversation = converInfor;
    conversation.push(infor);
    setConverInfor(conversation);
    childRef.current.showConversation(converInfor);
  }
  return (
    <div className={styles.chat_page}>
      <ChatWindow cRef={childRef}/>
      <InputArea getInputContentInfor={showContentInfor}/>
    </div>
  )
};
export default ChatPage;