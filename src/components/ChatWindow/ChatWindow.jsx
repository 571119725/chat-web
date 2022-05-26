import styles from './chatWindow.module.css';
import './animation.css';
import React, { useImperativeHandle, useRef } from 'react';
import QuestionDialog from '@/components/QuestionDialog/QuestionDialog';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import ResponseDialog from '@/components/ResponseDialog/ResponseDialog';
function ChatWindow (props) {
  useImperativeHandle(props.onRef, () => {
    return {
      scrollToBottom: scrollToBottom,
    };
  });
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView(false);
    console.log(1);
  }
  const Dialogs = props.converInfor.map( (element,id) => {
    return (
      <CSSTransition 
      timeout={700} 
      classNames={'appear'} 
      unmountOnExit={true} 
      appear={true}
      key={id}>
        <QuestionDialog questionInfor={element.questionInfor} time={element.time}/>
      </CSSTransition>
    )
  });
  return (
    <div className={styles.chat_window}>
      <TransitionGroup className={styles.router_wrapper}>
        {Dialogs}
      </TransitionGroup>
      <div ref={messageEndRef}></div>
    </div>
  )
}
export default ChatWindow;