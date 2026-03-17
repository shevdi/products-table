import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/Input';
import { Checkbox } from '@/components/Checkbox';
import { Icon } from '@/components/Icon';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.logoWrapper}>
            <Icon name="logo" size={35} />
          </div>

          <header className={styles.header}>
            <h1 className={styles.title}>Авторизация</h1>
            <p className={styles.subtitle}>Пожалуйста, авторизируйтесь</p>
          </header>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formFields}>
              <Input.Root value={login} onChange={setLogin} size="md">
                <Input.Label>Логин</Input.Label>
                <Input.Box>
                  <Input.Slot>
                    <Icon name="user" size={24} />
                  </Input.Slot>
                  <Input.Field placeholder="test" />
                  <Input.Clear />
                </Input.Box>
              </Input.Root>

              <Input.Root value={password} onChange={setPassword} type="password" size="md">
                <Input.Label>Пароль</Input.Label>
                <Input.Box>
                  <Input.Slot>
                    <Icon name="lock" size={24} />
                  </Input.Slot>
                  <Input.Field type="password" placeholder="••••••••" />
                  <Input.PasswordToggle />
                </Input.Box>
              </Input.Root>
            </div>

            <Checkbox.Root checked={remember} onChange={setRemember} className={styles.rememberRow}>
              <Checkbox.Box />
              <Checkbox.Label>Запомнить данные</Checkbox.Label>
            </Checkbox.Root>

            <div className={styles.actions}>
              <button type="submit" className={styles.button}>
                Войти
              </button>

              <div className={styles.separator}>
                <span className={styles.separatorLine} />
                <span className={styles.separatorText}>или</span>
                <span className={styles.separatorLine} />
              </div>
            </div>
          </form>

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
