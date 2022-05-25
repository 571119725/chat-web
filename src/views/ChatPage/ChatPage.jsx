import styles from './chatPage.module.css';
import InputArea from '@/components/InputArea/InputArea';
function ChatPage () {
  return (
    <div className={styles.chat_page}>
      <div className={styles.chat_window}></div>
      <InputArea />
    </div>
  )
};
export default ChatPage;