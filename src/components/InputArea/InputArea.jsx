import styles from './inputArea.module.css';
import { createFromIconfontCN } from '@ant-design/icons';
import React,{useState} from 'react';
function InputArea () {
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3424375_g0bod7x3bw5.js', // 在 iconfont.cn 上生成
  });
  const [inputContent, setInputContent] = useState('');
  const sendMessage = () => {
    setInputContent('');
    console.log(inputContent);
  }
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
            if(e.code === 'Enter') {
              sendMessage();
            };
          }}/>
      </div>
      <div className={styles.send_message} onClick={sendMessage}>
        <MyIcon type="icon-fasong" className={styles.icons}/>
      </div>
    </div>
  )
};
export default InputArea;