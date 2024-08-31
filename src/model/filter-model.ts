<<<<<<< HEAD
import type { FilterType } from '../types/common';
=======
import type { FilterType } from '../const';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
import { FILTER_TYPES, UpdateType } from '../const';
import Observable from '../framework/observable';

export default class FilterModel extends Observable<UpdateType.MINOR, FilterType> {
  #filter: FilterType = FILTER_TYPES[0];

  get filter() {
    return this.#filter;
  }

  setFilter(filter: FilterType) {
    this.#filter = filter;
    this._notify(UpdateType.MINOR, filter);
  }
}
