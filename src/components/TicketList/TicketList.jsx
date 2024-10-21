import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';

import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';
import {
  selectTickets,
  selectLoading,
  selectStop,
  selectSearchId,
  fetchTickets,
  increaseVisibleTickets,
  selectVisibleTickets,
  fetchSearchId,
  selectError,
} from '../../redux/slices/ticketSlice';
import { selectCheckedFilter } from '../../redux/slices/filterSlice';
import { selectSortBy } from '../../redux/slices/sortSlice';

import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const TicketList = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(selectTickets);
  const loading = useSelector(selectLoading);
  const stop = useSelector(selectStop);
  const searchId = useSelector(selectSearchId);
  const visibleTickets = useSelector(selectVisibleTickets);
  const filter = useSelector(selectCheckedFilter);
  const sortBy = useSelector(selectSortBy);
  const error = useSelector(selectError);

  const [sortedList, setSortedList] = useState([]);

  const applyFilters = () => {
    const { all, ...itemFilter } = filter;

    if (all) {
      return [...tickets];
    }

    const filtered = Object.entries(itemFilter)
      .filter((item) => item[1])
      .map((item) => item[0]);

    if (filtered.length === 0) return [];

    return tickets.filter((ticket) => {
      return (
        filtered.includes(String(ticket.segments['0'].stops.length)) ||
        filtered.includes(String(ticket.segments['1'].stops.length))
      );
    });
  };

  const applySort = (arr) => {
    switch (sortBy) {
      case 'cheap':
        arr.sort((a, b) => a.price - b.price);
        return arr;
      case 'fast':
        return arr.sort((a, b) => {
          const durationA = a.segments.reduce((acc, seg) => acc + seg.duration, 0);
          const durationB = b.segments.reduce((acc, seg) => acc + seg.duration, 0);
          return durationA - durationB;
        });
      case 'optimal':
        return arr;
      default:
        return arr;
    }
  };

  useEffect(() => {
    if (!searchId) {
      dispatch(fetchSearchId());
    } else {
      if (loading) {
        dispatch(fetchTickets(searchId));
      }
    }
  }, [dispatch, searchId, tickets, error]);

  useEffect(() => {
    if (tickets.length !== 0) {
      const filteredTickets = applyFilters();

      const sortedTickets = applySort(filteredTickets);

      setSortedList(sortedTickets);
    }
  }, [tickets, filter, sortBy]);

  const handleShowMore = () => {
    dispatch(increaseVisibleTickets());
    dispatch(fetchTickets(searchId));
  };

  return (
    <>
      {!stop && <LoadingIndicator />}

      {sortedList.length !== 0 ? (
        <>
          <ul className={styles.ticketList}>
            {sortedList.slice(0, visibleTickets).map((ticket) => (
              <li key={uuidv4()}>
                <Ticket ticket={ticket} />
              </li>
            ))}
          </ul>

          <button className={styles.showMore} onClick={handleShowMore}>
            Показать еще билеты!
          </button>
        </>
      ) : (
        <p
          style={{
            marginBottom: '20px',
            border: '1px solid red',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Рейсов, подходящих под заданные фильтры, не найдено!
        </p>
      )}
    </>
  );
};
export default TicketList;
