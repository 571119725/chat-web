import {Route, Routes,BrowserRouter as Router, Navigate} from 'react-router-dom';
import RouterBeforeEach from '@/components/RouterBeforeEach/RouterBeforeEach';
import MainPage from '@/views/MainPage/MainPage';
import LogIn from '@/views/LogIn/LogIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/mainPage/*' element={<MainPage />}/>
        <Route path='/login' exact element={<LogIn />}/>
      </Routes>
      <RouterBeforeEach />
    </Router>
  );
}

export default App;