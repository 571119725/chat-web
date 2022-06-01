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
  };
  const Dialogs = props.converInfor.map(
    (element, id) => {
      let intervalContent = 
      <TransitionGroup className={styles.router_wrapper} key={id}>
        <CSSTransition 
          timeout={700} 
          classNames={'appearLTR'} 
          unmountOnExit={true} 
          appear={true}
          key={element.day}>
          <DateColumn date={element.day}/>
        </CSSTransition>
        {
          element.content.map(
            (ele,id) => {
              let temp;
              if (ele.selfuser) {
                temp = 
                  <CSSTransition 
                    timeout={700} 
                    classNames={'appearLTR'} 
                    unmountOnExit={true} 
                    appear={true}
                    key={id}>
                    <QuestionDialog content={ele.content} time={ele.reply_time.slice(11,16)}/>
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
                      id={ele.msgid}
                      content={ele.content} 
                      time={ele.reply_time.slice(11,16)}
                      evaluation={ele.evaluation}
                      onChooseLevel={props.onChooseLevel}/>
                  </CSSTransition>;
              }
              return (
                temp
              )
            }
          )
        }
      </TransitionGroup>
      return intervalContent;
    }
  );
  return (
    <div className={styles.chat_window}  ref={messageEndRef}>
      <CheckHistoryDialog />
      {Dialogs}
    </div>
  )
}
export default ChatWindow;