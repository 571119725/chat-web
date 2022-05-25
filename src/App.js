import styles from './App.module.css';
import {SideMenu,MainContent} from '@/layouts/index';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNavigation from '@/layouts/TopNavigation/TopNavigation.jsx';
import Drawer from './components/Drawer/Drawer';
import { useState } from 'react';
function App() {
  const [showDrawer,setShowDrawer] = useState(false);
  return (
    <div className={styles.App}>
      <Router>
        <SideMenu />
        <div className={styles.content_box}> 
          <TopNavigation onShowDrawer={() => setShowDrawer(!showDrawer)}/>
          <MainContent />
        </div>
        <Drawer showDrawer={showDrawer} onHideDrawer={() => setShowDrawer(!showDrawer)}/>
      </Router>
    </div>
  );
}

export default App;