import styles from './Filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filter__title}>Количество пересадок</h3>
      <label className={styles.filter__label}>
        <input type="checkbox" className={styles.filter__checkbox} value="all"></input>
        <span className={styles.filter__custom}></span>
        <span>Все</span>
      </label>
      <label className={styles.filter__label}>
        <input type="checkbox" className={styles.filter__checkbox} value="0"></input>
        <span className={styles.filter__custom}></span>
        <span>Без пересадок</span>
      </label>
      <label className={styles.filter__label}>
        <input type="checkbox" className={styles.filter__checkbox} value="1"></input>
        <span className={styles.filter__custom}></span>
        <span>1 пересадка</span>
      </label>
      <label className={styles.filter__label}>
        <input type="checkbox" className={styles.filter__checkbox} value="2"></input>
        <span className={styles.filter__custom}></span>
        <span>2 пересадки</span>
      </label>
      <label className={styles.filter__label}>
        <input type="checkbox" className={styles.filter__checkbox} value="3"></input>
        <span className={styles.filter__custom}></span>
        <span>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
