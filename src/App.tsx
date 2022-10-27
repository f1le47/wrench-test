import '@styles/zeroing.scss';
import s from './App.module.scss';
import Header from '@components/Header/Header';
import Navbar from '@components/Navbar/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '@pages/Main/Main';
import Address from '@pages/Address/Address';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="address" element={<Address />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;