import React from 'react';
import { useLocation } from 'react-router';
import UserHeaderNav from '../UserHeaderNav';
import styles from './styles.module.css';
function UserHeader() {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha Conta');
        break;
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
