import styles from './levelChoose.module.css';
function LevelChoose (props) {
  return (
    <div className={props.display ? styles.level_choose:styles.hide_choose}>
      <div 
        className={styles.dian_zan + ' ' + (props.evaluation===1 ? styles.bold_font:'')}
        onClick={() => props.onChooseLevel(1)}>
        <div className='iconfont'>&#xe62a;</div>
      </div>
      <div 
        className={styles.dian_cai + ' ' + (props.evaluation===-1 ? styles.bold_font:'')}
        onClick={() => props.onChooseLevel(-1)}>
        <div className='iconfont'>&#xe604;</div>
      </div>
    </div>
  )
};
export default LevelChoose;