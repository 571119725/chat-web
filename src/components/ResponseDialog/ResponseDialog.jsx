import styles from './responseDialog.module.css';
import LevelChoose from '@/components/LevelChoose/LevelChoose';
import { useState } from 'react';
import Mask from '@/components/Mask/Mask';
function ResponseDialog (props) {
  const [displayLevel, setDisplayLevel] = useState(false);
  const chooseLevel = (level) => {
    props.onChooseLevel(props.id, level);
  };
  return (
    <div className={styles.response_dialog}>
      <Mask display={displayLevel} clickMask={() => setDisplayLevel(!displayLevel)}/>
      <div className={styles.response_box}>
        <div className={styles.response_infor_title}>
          <div className={styles.response_infor_name}></div>
          <div className={styles.response_operation}>
            <div className='iconfont'
              onClick={() => setDisplayLevel(!displayLevel)}>&#xe611;</div>
            <LevelChoose 
              display={displayLevel}
              evaluation={props.evaluation} 
              onChooseLevel={chooseLevel}
              />
          </div>
        </div>
        <div className={styles.response_infor_body}>
          <div className={styles.response_portrait}><img src={[require('@/assets/2.jpg')]} alt='response_protrait'/></div>
          <div className={styles.response_infor_content}>{props.content}</div>
        </div>
      </div>
      <div className={styles.response_infor_time}>{props.time}</div>
    </div>
  )
};
export default ResponseDialog;