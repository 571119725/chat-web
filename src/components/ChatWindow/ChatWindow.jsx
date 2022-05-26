import styles from './chatWindow.module.css';
import {useImperativeHandle} from 'react';
import QuestionDialog from '@/components/QuestionDialog/QuestionDialog';
import ResponseDialog from '@/components/ResponseDialog/ResponseDialog';
function ChatWindow ({cRef}) {
  useImperativeHandle(cRef, () => ({
    showConversation: (infor) => {
      console.log(infor);
    }
  }));
  return (
    <div className={styles.chat_window}>
      <QuestionDialog />
      <ResponseDialog />
      <QuestionDialog />
      <ResponseDialog />
      <QuestionDialog />
      <ResponseDialog />
      <QuestionDialog />
      <QuestionDialog />
      <ResponseDialog />
      <QuestionDialog />
      <QuestionDialog />
      <QuestionDialog />
      <QuestionDialog />
      <QuestionDialog />
      <QuestionDialog />
      <QuestionDialog />
    </div>
  )
}
export default ChatWindow;