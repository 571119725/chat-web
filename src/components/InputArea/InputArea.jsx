import styles from './inputArea.module.css';
import { createFromIconfontCN } from '@ant-design/icons';
import React,{useState} from 'react';
import { sendMessage } from '@/apis/apis';
import moment from 'moment';
function InputArea (props) {
  const [inputContent, setInputContent] = useState('');
  const pushMessage = () => {
    const temp = {
      content: inputContent.replace(/[\r\n]/g, ''),
      fromUserId: sessionStorage.getItem('userId'),
      toUserId: 1,
      reply_time: moment().format('YYYY-MM-DDTHH:mm'),
      selfuser: true
    };
    props.getInputContentInfor(temp);
    setInputContent('');
    sendMessage(temp).then(
      res => {
        props.getInputContentInfor(res);
      }
    )
  };
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3424375_g0bod7x3bw5.js', // 在 iconfont.cn 上生成
  });
  return (
    <div className={styles.chat_funct_bar}>
      <div className={styles.chat_funct_choose}>
        <div className={styles.chat_funct}>
          <div className='iconfont'>&#xe600;</div>
        </div>
        <div className={styles.chat_funct}>
          <div className='iconfont'>&#xe8ba;</div>
        </div>
        <div className={styles.chat_funct}>
          <div className='iconfont'>&#xe601;</div>
        </div>
      </div>
      <div className={styles.input_area}>
        <textarea 
          className={styles.text_area} 
          placeholder='Type your message here, press enter to send.'
          value={inputContent}
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
          onKeyUp={(e) => {
            if(e.keyCode === 13) {
              pushMessage();
            };
          }}/>
      </div>
      <div className={styles.send_message} onClick={pushMessage}>
        <MyIcon type="icon-fasong" className={styles.icons}/>
      </div>
    </div>
  )
};
export default InputArea;