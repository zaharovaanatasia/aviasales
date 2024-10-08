import Tab from './Tab';
import styles from './Tabs.module.scss';

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <Tab text="Самый дешевый" name="ticketTabs" value="cheap"></Tab>
      <Tab text="Самый быстрый" name="ticketTabs" value="fast"></Tab>
      <Tab text="Оптимальный" name="ticketTabs" value="optimal"></Tab>
    </div>
  );
};

export default Tabs;
