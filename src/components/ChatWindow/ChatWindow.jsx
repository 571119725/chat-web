import styles from './chatWindow.module.css';
import './animation.css';
import React, { useImperativeHandle, useRef } from 'react';
import QuestionDialog from '@/components/QuestionDialog/QuestionDialog';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import DateColumn from '@/components/DateColumn/DateColumn';
// import CheckHistoryDialog from '@/components/CheckHistoryDialog/checkHistoryDialog';
import ResponseDialog from '@/components/ResponseDialog/ResponseDialog';
function ChatWindow (props) {
  useImperativeHandle(props.onRef, () => {
    return {
      scrollToBottom: scrollToBottom,
    };
  });
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current.scrollTo({
      top: messageEndRef.current.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  const Dialogs = props.converInfor.map( (element,id) => {
    let temp;
    if (element.selfuser) {
      temp = 
        <CSSTransition 
          timeout={700} 
          classNames={'appearLTR'} 
          unmountOnExit={true} 
          appear={true}
          key={id}>
          <QuestionDialog content={element.content} time={element.time}/>
        </CSSTransition>;
    }else {
      temp = 
        <CSSTransition 
          timeout={700} 
          classNames={'appearLTR'} 
          unmountOnExit={true} 
          appear={true}
          key={id}>
          <ResponseDialog content={element.content} time={element.time}/>
        </CSSTransition>;
    }
    return (
      temp
    )
  });
  return (
    <div className={styles.chat_window}  ref={messageEndRef}>
      {/* <CheckHistoryDialog /> */}
      <TransitionGroup className={styles.router_wrapper}>
        {Dialogs}
      </TransitionGroup>
      {/* <DateColumn date='2020-10-13'/> */}
    </div>
  )
}
export default ChatWindow;