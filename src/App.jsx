import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import './styles/normalize.css';
import styles from './App.module.scss';
import TicketCard from './components/Ticket/TicketCard';
import Tab from './components/Tabs/Tab';

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <Filter />
          <Tabs />

          <div>
            <TicketCard />
            <TicketCard />
          </div>
        </div>

        <Tab className={styles.tab__showMore} text="показать еще 5 билетов!" />
      </main>
    </div>
  );
}

export default App;
