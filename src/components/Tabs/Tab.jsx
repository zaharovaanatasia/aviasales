import styles from './Tab.module.scss';

const Tab = ({ text, name, value, checked, onChange }) => {
  return (
    <label className={styles.tabLabel}>
      <input
        type="radio"
        className={styles.tabInput}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.tab}>{text}</span>
    </label>
  );
};

export default Tab;
