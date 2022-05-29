import styles from './mask.module.css'
function Mask (props) {
  return (
    <div className={props.display ? styles.mask:styles.hide} onClick={props.clickMask}></div>
  )
};
export default Mask;