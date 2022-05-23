import styles from './App.css';
import {SideMenu,MainContent} from '@/layouts/index'
function App() {
  return (
    <div className={styles.App}>
      <SideMenu />
      <MainContent />
    </div>
  );
}

export default App;