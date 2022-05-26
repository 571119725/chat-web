import styles from './chatPage.module.css';
import InputArea from '@/components/InputArea/InputArea';
import ChatWindow from '@/components/ChatWindow/ChatWindow';
function ChatPage () {
  return (
    <div className={styles.chat_page}>
      <ChatWindow />
      <InputArea />
    </div>
  )
};
export default ChatPage;