import Tab from './Tab';
import styles from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab text="Самый дешевый"></Tab>
      <Tab text="Самый быстрый"></Tab>
      <Tab text="Оптимальный"></Tab>
    </div>
  );
};

export default Tabs;
