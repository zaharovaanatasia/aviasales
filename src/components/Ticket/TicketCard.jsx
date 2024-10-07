import styles from './TicketCard.module.scss';
import TicketHeader from './TicketHeader';
import RouteDetails from './RouteDetails';

const TicketCard = () => {
  return (
    <div className={styles.ticket}>
      <TicketHeader price="13 400" airline="S7 Airlines"></TicketHeader>
      <RouteDetails
        route="MOW - HKT"
        time="10:45 - 08:00"
        duration="21ч 15м"
        layovers={['HKG', 'JNB']}
      />
      <RouteDetails route="MOW - HKT" time="11:20 - 00:50" duration="13ч 30м" layovers={['HKG']} />
    </div>
  );
};

export default TicketCard;
