import Ticket from '../Ticket/Ticket';
import styles from './TisketList.module.scss';

import PropTypes from 'prop-types';

const TicketList = ({ tickets }) => {
  return (
    <ul className={styles.ticketList}>
      {tickets.map((ticket, index) => (
        <li key={index}>
          <Ticket price={ticket.price} airlines={ticket.airlines} routes={ticket.routes} />
          <Ticket price={ticket.price} airlines={ticket.airlines} routes={ticket.routes} />
          <Ticket price={ticket.price} airlines={ticket.airlines} routes={ticket.routes} />
        </li>
      ))}
      <button className={styles.showMore}>Показать еще билеты!</button>
    </ul>
  );
};
TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      airlines: PropTypes.string.isRequired,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          route: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          layovers: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default TicketList;
