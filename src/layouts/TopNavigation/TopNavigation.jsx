import styles from './topNavigation.module.css';
import './animation.css'
import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChatPageTopBar from '@/components/ChatPageTopBar/ChatPageTopBar';
function TopNavigation (props) {
  const location = useLocation();
  const DownloadPage = <div className={styles.abs_position}>DownloadPage</div>;
  const SettingPage = <div className={styles.abs_position}>SettingPage</div>;
  return (
    <div className={styles.topNavigation}>
      <TransitionGroup className={styles.router_wrapper}>
        <CSSTransition 
          timeout={1000} 
          classNames={'show'} 
          key={location.pathname} 
          unmountOnExit={true}
          appear={true}>
          <Routes location={location}>
            <Route path='chatPage' exact element={<ChatPageTopBar onShowDrawer={props.onShowDrawer}/>}/>
            <Route path='download' exact element={DownloadPage}/>
            <Route path='setting' exact element={SettingPage}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};
export default TopNavigation;