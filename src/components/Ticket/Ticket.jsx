import styles from './Ticket.module.scss';

import PropTypes from 'prop-types';

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.header__price}>13 400 Р</div>
        <img src="#" alt="company logo" width="110" height="36"></img>
      </div>

      <div className={styles.route}>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>MOW – HKT</div>
          <div className={styles.route__val}>10:45 – 08:00</div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>В пути:</div>
          <div className={styles.route__val}>21ч 15м</div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>2 пересадки</div>
          <div className={styles.route__val}>HKG, JNB</div>
        </div>
      </div>
      <div className={styles.route}>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>MOW – HKT</div>
          <div className={styles.route__val}>10:45 – 08:00</div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>В пути:</div>
          <div className={styles.route__val}>21ч 15м</div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>2 пересадки</div>
          <div className={styles.route__val}>HKG, JNB</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
