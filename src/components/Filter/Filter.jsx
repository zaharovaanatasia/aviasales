import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.scss';
import { toggleFilter, selectCheckedFilter } from '../../redux/slices/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectCheckedFilter);

  const handleFilterChange = (filter) => {
    dispatch(toggleFilter(filter));
  };

  return (
    <form className={styles.filter} onChange={(e) => handleFilterChange(e.target.value)}>
      <fieldset className={styles.filter__fieldset}>
        <legend className={styles.filter__title}>Количество пересадок</legend>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-all"
            className={styles.filter__checkbox}
            value="all"
            defaultChecked={filter.all}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>Все</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-none"
            className={styles.filter__checkbox}
            value="none"
            defaultChecked={filter.none}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>Без пересадок</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-one"
            className={styles.filter__checkbox}
            value="one"
            defaultChecked={filter.one}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>1 пересадка</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-two"
            className={styles.filter__checkbox}
            value="two"
            defaultChecked={filter.two}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>2 пересадки</span>
        </label>
        <label className={styles.filter__label}>
          <input
            type="checkbox"
            id="filter-three"
            className={styles.filter__checkbox}
            value="three"
            defaultChecked={filter.three}
          ></input>
          <span className={styles.filter__custom}></span>
          <span>3 пересадки</span>
        </label>
      </fieldset>
    </form>
  );
};

export default Filter;
