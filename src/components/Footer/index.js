import { ReactComponent as Dogs } from '../../assets/dogs-footer.svg';
import styles from './styles.module.css';
function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}

export default Footer;
