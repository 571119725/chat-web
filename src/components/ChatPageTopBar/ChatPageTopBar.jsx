import styles from './chatPageTopBar.module.css';
function ChatPageTopBar () {
    const onFunctButtonClick = () => {
        console.log(1111);
    };
    return (
        <div className={styles.chat_page_top_bar}>
            <div className={styles.chat_info}>
                <div className={styles.head_portrait}></div>
                <div className={styles.name_and_signature}>
                    <div className={styles.name}>数字人组</div>
                    <div className={styles.personal_signature}>旨在制作一款聊天机器人</div>
                </div>
            </div>
            <div className={styles.chat_funct_choose} onClick={onFunctButtonClick}>
                <div className='iconfont'>&#xe611;</div>
            </div>    
        </div>
    )
};
export default ChatPageTopBar;