import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import TicketList from './components/TicketList/TicketList';
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
