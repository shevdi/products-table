import { NavLink } from 'react-router-dom';
import styles from './MainPage.module.css';

function MainPage() {
  return (
    <main>
      <h1>Таблица товаров</h1>
      <div className={styles.links}>
        <div>
          <NavLink to="/login">Войти</NavLink>
        </div>
        <div>
          <NavLink to="/products">Таблица товаров</NavLink>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
