const defaultSortItems = (unsortedItems, sortCol, sortDir) => {
  const items = [ ...unsortedItems ];
  return items.sort((a, b) => {
    if (a[sortCol] < b[sortCol]) {
      return sortDir === 'asc' ? -1 : 1;
    }
    if (a[sortCol] > b[sortCol]) {
      return sortDir === 'asc' ? 1 : -1;
    }
    return 0;
  });
};

export const sortedCarsSelector = state => {
  return defaultSortItems(
    state.cars, state.carsSort.col, state.carsSort.dir);
};