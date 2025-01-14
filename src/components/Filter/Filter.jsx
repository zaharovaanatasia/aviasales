import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import { toggleFilter, selectCheckedFilter } from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectCheckedFilter);

  const handleFilterChange = (e) => {
    dispatch(toggleFilter(e.target.value));
  };

  return (
    <form className={styles.filter} onChange={handleFilterChange}>
      <fieldset className={styles.filter__fieldset}>
        <legend className={styles.filter__title}>Количество пересадок</legend>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-all"
            className={styles.filter__checkbox}
            value="all"
            checked={filter.all}
            onChange={() => {}}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>Все</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-none"
            className={styles.filter__checkbox}
            value="0"
            checked={filter['0']}
            onChange={() => {}}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>Без пересадок</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-one"
            className={styles.filter__checkbox}
            value="1"
            checked={filter['1']}
            onChange={() => {}}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>1 пересадка</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-two"
            className={styles.filter__checkbox}
            value="2"
            checked={filter['2']}
            onChange={() => {}}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>2 пересадки</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-three"
            className={styles.filter__checkbox}
            value="3"
            checked={filter['3']}
            onChange={() => {}}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>3 пересадки</span>
        </label>
      </fieldset>
    </form>
  );
};

export default Filter;
