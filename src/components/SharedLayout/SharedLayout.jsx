import {  Outlet } from 'react-router-dom';
import {Header} from '../Header/Header';
import styles from './SharedLayout.module.css'


const SharedLayout = () => {
  return (
    <div className={styles.syte}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};
export default SharedLayout;

