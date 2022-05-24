import styles from './mainContent.module.css';
import './animation.css'
import {ChatPage, DownloadPage, SettingPage} from '@/views/index';
import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
function MainContent () {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.main_content}>
      <TransitionGroup className={styles.router_wrapper}>
        <CSSTransition 
          timeout={1000} 
          classNames={'fade'} key={location.pathname} unmountOnExit={true} appear={true}>
          <Routes location={location}>
            <Route path='/' element={<ChatPage />}/>
            <Route path='/download' element={<DownloadPage />}/>
            <Route path='/setting' element={<SettingPage />}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};

export default MainContent;