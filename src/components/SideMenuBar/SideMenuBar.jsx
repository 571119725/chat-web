import styles from './sideMenuBar.module.css';
import { NavLink } from "react-router-dom";
function SideMenuBar () {
  return (
    <div className={styles.side_menu_bar}>
      <NavLink 
        to='/info' 
        className={styles.web_logo} 
        title='关于'>
        <img src={[require('@/assets/Logo.png')]} alt='logo'/>
      </NavLink>
      <div className={styles.funct_box}>
        <NavLink 
          to='/'
          title='聊天界面' 
          className={({isActive}) =>  
            styles.funct_choice + " " + 
            styles.funct_choice_message + ' ' + 
            (isActive ? styles.active_choice:'')}>
          <div className='iconfont'>&#xe89c;</div>
        </NavLink>
        <NavLink 
          to='/download'
          title='客户端下载'  
          className={({isActive}) =>  styles.funct_choice + " " + (isActive ? styles.active_choice:'')}>
          <div className='iconfont'>&#xe60e;</div>
        </NavLink>
        <NavLink 
          to='/setting'
          title='设置' 
          className={({isActive}) =>  styles.funct_choice + " " + (isActive ? styles.active_choice:'')}>
          <div className='iconfont'>&#xeb8d;</div>
        </NavLink>
      </div>
      <NavLink 
        to='/user_space'
        title='个人空间'
        className={({isActive}) =>  styles.user_icon + " " + (isActive ? styles.active_choice:'')}>
        <div className='iconfont'>&#xe788;</div>
      </NavLink>
    </div>
  )
};
export default SideMenuBar;