import { useDispatch, useSelector } from 'react-redux';
import styles from './Tabs.module.scss';
import { setSortBy, selectSortBy } from '../../redux/slices/sortSlice';

const Tabs = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);

  const tabs = [
    { text: 'Самый дешевый', value: 'cheap' },
    { text: 'Самый быстрый', value: 'fast' },
    { text: 'Оптимальный', value: 'optimal' },
  ];

  const handleChange = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <form className={styles.tabs}>
      {tabs.map((tab) => (
        <label key={tab.value} className={styles.tabLabel}>
          <input
            type="radio"
            className={styles.tabInput}
            name="ticketTabs"
            value={tab.value}
            checked={sortBy === tab.value}
            onChange={() => handleChange(tab.value)}
          />
          <span className={styles.tab}>{tab.text}</span>
        </label>
      ))}
    </form>
  );
};

export default Tabs;
