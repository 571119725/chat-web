import styles from './mainContent.module.css';
import './animation.css'
import {ChatPage, DownloadPage, SettingPage, PersonalInforPage} from '@/views/index';
import {Route, Routes, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
function MainContent () {
  const location = useLocation();
  return (
    <div className={styles.main_content}>
      <TransitionGroup className={styles.router_wrapper}>
        <CSSTransition 
          timeout={1000} 
          classNames={'fade'} 
          key={location.pathname} 
          unmountOnExit={true}
          appear={true}>
          <Routes location={location}>
            <Route path='chatPage' exact element={<ChatPage />}/>
            <Route path='download' exact element={<DownloadPage />}/>
            <Route path='setting' exact element={<SettingPage />}/>
            <Route path='personalInfor' exact element={<PersonalInforPage />}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
};

export default MainContent;