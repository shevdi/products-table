import { useNavigate } from 'react-router-dom';
import { Button, Icon } from '@/components';
import { useAuthStore } from '../model/authStore';
import styles from './Logout.module.css';

export function Logout() {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const handleLogout = () => {
    clearAuth();
    navigate('/login');
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      className={styles.logoutBtn}
      aria-label="Выйти"
      onClick={handleLogout}
    >
      <Icon name="close" size={20} />
    </Button>
  );
}
