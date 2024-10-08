import styles from './Ticket.module.scss';
import RouteDetails from './RouteDetails';

import PropTypes from 'prop-types';

const Ticket = ({ price, airlines, routes }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.header__price}>{price}</div>
        <img src="#" alt={airlines}></img>
      </div>
      {routes.map((route, index) => (
        <RouteDetails
          key={index}
          route={route.route}
          time={route.time}
          duration={route.duration}
          layovers={route.layovers}
        />
      ))}
    </div>
  );
};
Ticket.propTypes = {
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
};

export default Ticket;
