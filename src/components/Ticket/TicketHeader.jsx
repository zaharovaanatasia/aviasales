import styles from './TicketHeader.module.scss';

const TicketHeader = ({ price }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__price}>{price} Р</div>
      <img src="#" alt="airlines"></img>
    </header>
  );
};

export default TicketHeader;
