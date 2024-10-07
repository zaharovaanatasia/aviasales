import styles from './Tab.module.scss';

const Tab = ({ text, className }) => {
  return (
    <button className={`${styles.tab} ${className}`} type="button">
      {text}
    </button>
  );
};

export default Tab;
