import PropTypes from 'prop-types';
import { format, addMinutes } from 'date-fns';

import styles from './Ticket.module.scss';
import { formatDuration } from '../../utils/formatDuration';
import { getStopsInfo } from '../../utils/getStopsInfo';

const Ticket = ({ ticket }) => {
  const carrierLogoUrl = `http://pics.avs.io/110/36/${ticket.carrier}.png`;
  const formattedPrice = ticket.price.toLocaleString('ru-RU');

  const formattedSegments = ticket.segments.map((segment, index) => {
    const departureDate = new Date(segment.date);
    const departureTime = format(departureDate, 'HH:mm');
    const arrivalDate = addMinutes(departureDate, segment.duration);
    const arrivalTime = format(arrivalDate, 'HH:mm');

    const { text: stopsText, list: stopsList } = getStopsInfo(segment.stops);

    return (
      <div key={index} className={styles.route}>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>
            {segment.origin} – {segment.destination}
          </div>
          <div className={styles.route__val}>
            {departureTime} – {arrivalTime}
          </div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>В пути:</div>
          <div className={styles.route__val}>{formatDuration(segment.duration)}</div>
        </div>
        <div className={styles.route_block}>
          <div className={styles.route__caption}>{stopsText}</div>
          <div className={styles.route__val}>{stopsList}</div>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.ticket}>
      <div className={styles.header}>
        <div className={styles.header__price}>{formattedPrice} Р</div>
        <img src={carrierLogoUrl} alt="Логотип авиакомпании" width="110" height="36" />
      </div>

      {formattedSegments}
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
};
export default Ticket;
