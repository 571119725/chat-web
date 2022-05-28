import styles from './levelChoose.module.css';
function LevelChoose () {
  return (
    <div className={styles.level_choose}>
      <div className={styles.dian_zan}>
        <div className='iconfont'>&#xe62a;</div>
      </div>
      <div className={styles.dian_cai}>
        <div className='iconfont'>&#xe604;</div>
      </div>
    </div>
  )
};
export default LevelChoose;