import styles from './MainPage.module.css';
import {SideMenu,MainContent} from '@/layouts/index';
import TopNavigation from '@/layouts/TopNavigation/TopNavigation.jsx';
import Drawer from '@/components/Drawer/Drawer';
import { useState } from 'react';
function MainPage () {
  const [showDrawer,setShowDrawer] = useState(false);
  return (
    <div className={styles.main_page}>
      <SideMenu />
      <div className={styles.content_box}> 
        <TopNavigation onShowDrawer={() => setShowDrawer(!showDrawer)}/>
        <MainContent />
      </div>
      <Drawer showDrawer={showDrawer} onHideDrawer={() => setShowDrawer(!showDrawer)}/>
    </div>
  )
};
export default MainPage;