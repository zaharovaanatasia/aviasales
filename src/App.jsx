import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import TicketList from './components/Ticket/TicketList';

import styles from './App.module.scss';

function App() {
  const tickets = [
    {
      price: '13 526 Р',
      airlines: 'S7 Airlines',
      routes: [
        {
          route: 'MOW - HKT',
          time: '10:45 - 08:00',
          duration: '21ч 15м',
          layovers: ['HKG, ', 'JNB'],
        },
        { route: 'MOW - HKT', time: '11:20 - 00:50', duration: '13ч 30м', layovers: ['HKG'] },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.filterColumn}>
          <Filter />
        </div>
        <div className={styles.ticketColumn}>
          <Tabs />
          <TicketList tickets={tickets}></TicketList>
        </div>
      </main>
    </div>
  );
}

export default App;
