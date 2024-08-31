export const getPageElements = () => {
<<<<<<< HEAD
  const header = document.querySelector<HTMLDivElement>('.trip-main')!;
  const filters = header?.querySelector('.trip-controls__filters');
  const events = document.querySelector<HTMLTableSectionElement>('.trip-events')!;
=======
  const header = document.querySelector('.trip-main');
  const filters = header?.querySelector('.trip-controls__filters');
  const events = document.querySelector<HTMLTableSectionElement>('.trip-events');
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6

  return {
    header,
    filters,
    events,
  };
};
