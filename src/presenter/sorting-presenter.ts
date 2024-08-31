<<<<<<< HEAD
import type { SortType } from '../types/common';
=======
import type { SortType } from '../const';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
import { remove, render } from '../framework/render';
import type { Models } from '../model/create-models';
import type FilterModel from '../model/filter-model';
import type PointsModel from '../model/points-model';
import type SortingModel from '../model/sorting-model';
<<<<<<< HEAD
import SortingView from '../view/main/sorting-view';
=======
import SortingView from '../view/main/sorting';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6

export default class SortingPresenter {
  #container: HTMLTableSectionElement;
  #sortingModel: SortingModel;
  #sortComponent: SortingView | null = null;
  #pointsModel: PointsModel;
  #filterModel: FilterModel;

  constructor({ container, models }: { container: HTMLTableSectionElement; models: Models }) {
    this.#container = container;
    this.#sortingModel = models.sortingModel;
    this.#pointsModel = models.pointsModel;
    this.#filterModel = models.filtersModel;

<<<<<<< HEAD
    this.#pointsModel.addObserver(this.#modelEventHandler);
    this.#filterModel.addObserver(this.#modelEventHandler);
  }

  init() {
    this.#renderSorting();
  }

  dataLoadHandler = (isSuccessful: boolean) => {
    if (isSuccessful === false) {
      remove(this.#sortComponent);
    }
  };

  #renderSorting() {
    this.#sortComponent = new SortingView({ sortTypeChangeHandler: this.#sortTypeChangeHandler });
    render(this.#sortComponent, this.#container, 'afterbegin');
  }

  #sortTypeChangeHandler = (sortType: SortType) => {
    this.#sortingModel.setSortType(sortType);
  };

  #modelEventHandler = () => {
    remove(this.#sortComponent);
    if (this.#pointsModel.points.length > 0) {
      this.#renderSorting();
    }
=======
    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  #renderSorting() {
    this.#sortComponent = new SortingView({ onSortTypeChange: this.#handleSortTypeChange });
    render(this.#sortComponent, this.#container, 'afterbegin');
  }

  #handleSortTypeChange = (sortType: SortType) => {
    this.#sortingModel.setSortType(sortType);
  };

  #handleModelEvent = () => {
    remove(this.#sortComponent);
    this.#renderSorting();
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  };
}
