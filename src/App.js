import styles from './App.module.css';
import {SideMenu,MainContent} from '@/layouts/index';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
function App() {
  return (
    <div className={styles.App}>
      <Router>
        <SideMenu />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;