import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';

import PropTypes from 'prop-types';

const TicketList = () => {
  return (
    <>
      <ul className={styles.ticketList}>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
        <li>
          <Ticket />
        </li>
      </ul>
      <button className={styles.showMore}>Показать еще билеты!</button>
    </>
  );
};

export default TicketList;
