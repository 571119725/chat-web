import styles from './chatPageTopBar.module.css';
import ShowDrawerButton from '../ShowDrawerButton/ShowDrawerButton';
function ChatPageTopBar (props) {
    return (
        <div className={styles.chat_page_top_bar}>
            <div className={styles.chat_info}>
                <ShowDrawerButton onShowDrawer={props.onShowDrawer}/>
                <div className={styles.head_portrait}></div>
                <div className={styles.name_and_signature}>
                    <div className={styles.name}>数字人组</div>
                    <div className={styles.personal_signature}>旨在制作一款聊天机器人</div>
                </div>
            </div>
            <div className={styles.chat_funct_choose}>
                <div className='iconfont'>&#xe611;</div>
            </div>    
        </div>
    )
};
export default ChatPageTopBar;