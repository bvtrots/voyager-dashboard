import dayjs from 'dayjs';
import type { State } from '../../types/state';
<<<<<<<< HEAD:src/templates/form/point-data-for-templates.ts
import { correctName } from './destinations-template';
========
import { correctName } from './destinations';
>>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/templates/form/point-data.ts
import type { Models } from '../../model/create-models';

export const pointDataForTemplate = (data: State, models: Models, isNewPoint: boolean) => {
  const { dateFrom, dateTo, type, destination, basePrice, selectedOffers, isDisabled, isSaving, isDeleting } = data;

  switch (isNewPoint) {
    case false:
      return {
        timeStart: dayjs(dateFrom).format('DD/MM/YY HH:mm'),
        timeEnd: dayjs(dateTo).format('DD/MM/YY HH:mm'),
        destination,
        destinationName: correctName(destination, models),
        type,
        basePrice: basePrice,
        selectedOffers,
        cancelButton: 'Delete',
        startHiding: '',
        endHiding: '',
        isDisabled,
        isSaving,
        isDeleting,
      };
    default:
      return {
        timeStart: dateFrom === '' ? '' : dayjs(dateFrom).format('DD/MM/YY HH:mm'),
        timeEnd: dateTo === '' ? '' : dayjs(dateTo).format('DD/MM/YY HH:mm'),
        destination,
        destinationName: destination ? correctName(destination, models) : '',
        type,
        basePrice: basePrice,
        selectedOffers,
        cancelButton: 'Cancel',
        startHiding: '<div hidden>',
        endHiding: '</div>',
        isDisabled,
        isSaving,
        isDeleting,
      };
  }
};
