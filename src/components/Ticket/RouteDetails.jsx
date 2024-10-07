import styles from './RouteDetails.module.scss';

const RouteDetails = ({ route, time, duration, layovers }) => {
  return (
    <div className={styles.route}>
      <div className={styles.route_block}>
        <div className={styles.route__caption}>{route}</div>
        <div className={styles.route__val}>{time}</div>
      </div>
      <div className={styles.route_block}>
        <div className={styles.route__caption}>В пути:</div>
        <div className={styles.route__val}>{duration}</div>
      </div>
      <div className={styles.route_block}>
        <div className={styles.route__caption}>Пересадка</div>
        <div className={styles.route__val}>{layovers}</div>
      </div>
    </div>
  );
};

export default RouteDetails;
