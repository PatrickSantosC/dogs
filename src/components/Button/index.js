import styles from './styles.module.css';

function Button({ children, disabled }) {
  return (
    <button className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
