import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketList/TicketList';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.filterColumn}>
          <Filter />
        </div>
        <div className={styles.ticketColumn}>
          <Tabs />
          <TicketList></TicketList>
        </div>
      </main>
    </div>
  );
}
export default App;
