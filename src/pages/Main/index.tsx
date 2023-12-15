import { Outlet } from 'react-router-dom';
import './main.css';
import Header from '../../components/Header';

function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;
