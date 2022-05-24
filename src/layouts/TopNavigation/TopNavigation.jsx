import styles from './topNavigation.module.css';
import './animation.css'
import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
function TopNavigation () {
  const location = useLocation();
  const ChatPage = <div>ChatPage</div>;
  const DownloadPage = <div>DownloadPage</div>;
  const SettingPage = <div>SettingPage</div>;
  return (
    <div className={styles.topNavigation}>
      <TransitionGroup className={styles.router_wrapper}>
        <CSSTransition 
          timeout={700} 
          classNames={'show'} key={location.pathname} unmountOnExit={true} appear={true}>
          <Routes>
            <Route path='/' element={ChatPage}/>
            <Route path='/download' element={DownloadPage}/>
            <Route path='/setting' element={SettingPage}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};
export default TopNavigation;