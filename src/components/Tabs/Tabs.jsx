import { useDispatch, useSelector } from 'react-redux';
import Tab from './Tab';
import styles from './Tabs.module.scss';
import { setSortBy } from '../../redux/slices/sortSlice';

const Tabs = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.sort.sortBy);

  const handleSortChange = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <form className={styles.tabs}>
      <Tab
        text="Самый дешевый"
        name="ticketTabs"
        value="cheap"
        checked={sortBy === 'cheap'}
        onChange={() => handleSortChange('cheap')}
      ></Tab>
      <Tab
        text="Самый быстрый"
        name="ticketTabs"
        value="fast"
        checked={sortBy === 'fast'}
        onChange={() => handleSortChange('fast')}
      ></Tab>
      <Tab
        text="Оптимальный"
        name="ticketTabs"
        value="optimal"
        checked={sortBy === 'optimal'}
        onChange={() => handleSortChange('optimal')}
      ></Tab>
    </form>
  );
};

export default Tabs;
