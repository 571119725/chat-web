import styles from './chatPage.module.css';
import { createFromIconfontCN } from '@ant-design/icons';

function ChatPage () {
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3424375_g0bod7x3bw5.js', // 在 iconfont.cn 上生成
  });
  return (
    <div className={styles.chat_page}>
      <div className={styles.chat_window}></div>
      <div className={styles.chat_funct_bar}>
        <div>
          <div className='iconfont'>&#xe600;</div>
        </div>
        <div>
          <div className='iconfont'>&#xe8ba;</div>
        </div>
        <div>
          <div className='iconfont'>&#xe601;</div>
        </div>
        <div>
          <input />
        </div>
        <div>
          <MyIcon type="icon-fasong" className={styles.icons}/>
        </div>
      </div>
    </div>
  )
};
export default ChatPage;