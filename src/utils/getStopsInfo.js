export const getStopsInfo = (stops) => {
  if (stops.length === 0) {
    return {
      text: 'Без пересадок',
      list: 'Нет пересадок',
    };
  } else if (stops.length === 1) {
    return {
      text: '1 пересадка',
      list: stops[0],
    };
  } else {
    return {
      text: `${stops.length} пересадки`,
      list: stops.join(', '),
    };
  }
};
