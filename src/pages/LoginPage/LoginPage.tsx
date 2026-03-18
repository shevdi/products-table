import { Link } from 'react-router-dom';
import { AuthForm } from '@/features/auth';
import { Icon } from '@/components/Icon';
import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.logoWrapper}>
            <Icon name="logo" size={35} />
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>Авторизация</h1>
            <p className={styles.subtitle}>Пожалуйста, авторизуйтесь</p>
          </header>

          <AuthForm />

          <p className={styles.footer}>
            Нет аккаунта?{' '}
            <Link to="#" className={styles.footerLink}>
              Создать
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}