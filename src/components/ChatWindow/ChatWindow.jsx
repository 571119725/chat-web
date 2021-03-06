import styles from './chatWindow.module.css';
import './animation.css';
import React, { useImperativeHandle, useRef } from 'react';
import QuestionDialog from '@/components/QuestionDialog/QuestionDialog';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import DateColumn from '@/components/DateColumn/DateColumn';
import CheckHistoryDialog from '@/components/CheckHistoryDialog/checkHistoryDialog';
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
    if(element.type === -1){
      temp = 
      <CSSTransition 
        timeout={700} 
        classNames={'appearTTB'} 
        unmountOnExit={true} 
        appear={true}
        key={id}>
        <DateColumn date={element.date}/>
      </CSSTransition>;
    }else {
      if (element.selfuser) {
        temp = 
          <CSSTransition 
            timeout={700} 
            classNames={'appearLTR'} 
            unmountOnExit={true} 
            appear={true}
            key={id}>
            <QuestionDialog 
              content={element.content} 
              time={element.reply_time.slice(11,16)}/>
          </CSSTransition>;
      }else {
        temp = 
          <CSSTransition 
            timeout={700} 
            classNames={'appearRTL'} 
            unmountOnExit={true} 
            appear={true}
            key={id}>
            <ResponseDialog 
              id={element.msgid}
              content={element.content} 
              time={element.reply_time.slice(11,16)}
              evaluation={element.evaluation}
              onChooseLevel={props.onChooseLevel}/>
          </CSSTransition>;
      }
    }
    return (
      temp
    )
  });
  return (
    <div className={styles.chat_window}  ref={messageEndRef}>
      <CheckHistoryDialog checkHistoryDialog={props.checkHistoryDialog}/>
      <TransitionGroup className={styles.router_wrapper}>
        {Dialogs}
      </TransitionGroup>
    </div>
  )
}
export default ChatWindow;