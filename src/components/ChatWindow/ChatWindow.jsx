import styles from './chatWindow.module.css';
import './animation.css';
import React, { useImperativeHandle, useRef } from 'react';
import QuestionDialog from '@/components/QuestionDialog/QuestionDialog';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getHistory } from '@/apis/apis';
// import ResponseDialog from '@/components/ResponseDialog/ResponseDialog';
function ChatWindow (props) {
  useImperativeHandle(props.onRef, () => {
    getHistory().then(
      res => {
        console.log(res);
      }
    )
    return {
      scrollToBottom: scrollToBottom,
    };
  });
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current.scrollTo({
      top: messageEndRef.current.scrollHeight,
      left: 100,
      behavior: 'smooth'
    });
  }
  const Dialogs = props.converInfor.map( (element,id) => {
    return (
      <CSSTransition 
      timeout={700} 
      classNames={'appearLTR'} 
      unmountOnExit={true} 
      appear={true}
      key={id}>
        <QuestionDialog questionInfor={element.questionInfor} time={element.time}/>
      </CSSTransition>
    )
  });
  return (
    <div className={styles.chat_window}  ref={messageEndRef}>
      <TransitionGroup className={styles.router_wrapper}>
        {Dialogs}
      </TransitionGroup>
    </div>
  )
}
export default ChatWindow;