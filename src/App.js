import styles from './App.module.css';
import {SideMenu,MainContent} from '@/layouts/index';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNavigation from '@/layouts/TopNavigation/TopNavigation.jsx';
function App() {
  return (
    <div className={styles.App}>
      <Router>
        <SideMenu />
        <div className={styles.content_box}> 
          <TopNavigation />
          <MainContent />
        </div>
      </Router>
    </div>
  );
}

export default App;