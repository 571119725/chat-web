import styles from './topNavigation.module.css';
import './animation.css'
import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ChatPageTopBar from '@/components/ChatPageTopBar/ChatPageTopBar';
import DownloadPageTopBar from '@/components/DownloadPageTopBar/DownloadPageTopBar';
import SettingPageTopBar from '@/components/SettingPageTopBar/SettingPageTopBar';
function TopNavigation (props) {
  const location = useLocation();
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
            <Route path='download' exact element={<DownloadPageTopBar onShowDrawer={props.onShowDrawer}/> }/>
            <Route path='setting' exact element={<SettingPageTopBar onShowDrawer={props.onShowDrawer} />}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};
export default TopNavigation;