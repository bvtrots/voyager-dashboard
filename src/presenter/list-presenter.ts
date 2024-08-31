<<<<<<< HEAD
import MessageView from '../view/main/message-view';
import { Message, SORT_TYPES, TimeLimit, UpdateType, UserAction } from '../const';
import { remove, render } from '../framework/render';
import UiBlocker from '../framework/ui-blocker/ui-blocker';
import type { Models } from '../model/create-models';
import type FilterModel from '../model/filter-model';
import type PointsModel from '../model/points-model';
import type SortingModel from '../model/sorting-model';
import type { EmptyFn, FilterType, SortType } from '../types/common';
import type { Point } from '../types/point-type';
import { filter } from '../utils/filter';
import ListView from '../view/main/list-view';
import NewPointPresenter from './new-point-presenter';
import PointPresenter from './point-presenter';

export default class ListPresenter {
  #mainContainer: HTMLTableSectionElement;
  #messageComponent: MessageView | null = null;
  #pointsModel: PointsModel;
  #filterModel: FilterModel;
  #sortingModel: SortingModel;
  #models: Models;
  #listContainer: ListView;
  #pointsPresenters = new Map<Point['id'], PointPresenter>();
  #currentSortType: SortType = SORT_TYPES[0];
  #currentFilter: FilterType = 'everything';
  #newPointPresenter: NewPointPresenter;
  #isLoading: boolean = true;
  #newPointDestroyHandler: EmptyFn;
  #formCloseHandler: EmptyFn;
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FilterType, SortType } from '../const';
import { SORT_TYPES, UpdateType, UserAction } from '../const';
import { remove, render } from '../framework/render';
import UiBlocker from '../framework/ui-blocker/ui-blocker';
import type { Models } from '../model/create-models';
import type DestinationsModel from '../model/destinations-model';
import type FilterModel from '../model/filter-model';
import type OffersModel from '../model/offers-model';
import type PointsModel from '../model/points-model';
import type SortingModel from '../model/sorting-model';
import type { EmptyFn } from '../types/common';
import type { Point } from '../types/point-type';
import { filter } from '../utils/filter';
import EmptyListView from '../view/main/empty-list';
import FailedLoadView from '../view/main/failed-load';
import listView from '../view/main/list';
import LoadingView from '../view/main/loading';
import NewPointPresenter from './new-point-presenter';
import PointPresenter from './point-presenter';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export default class ListPresenter {
  #mainContainer: HTMLTableSectionElement;
  #loadingComponent = new LoadingView();
  #pointsModel: PointsModel;
  #destinationsModel: DestinationsModel;
  #offersModel: OffersModel;
  #filterModel: FilterModel;
  #sortingModel: SortingModel;
  #models: Models;
  #listContainer: listView;
  #pointsPresenters = new Map<Point['id'], PointPresenter>();
  #emptyListComponent: EmptyListView | null = null;
  #failedLoadComponent: FailedLoadView | null = null;
  #currentSortType: SortType = SORT_TYPES[0];
  #currentFilter: FilterType = 'everything';
  #newPointPresenter: NewPointPresenter;
  #isLoading = true;
  #handleNewPointDestroy: EmptyFn;
  #handleFormClose: EmptyFn;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT,
  });

<<<<<<< HEAD
  constructor({
    container,
    models,
    formCloseHandler: formCloseHandler,
  }: {
    container: HTMLTableSectionElement;
    models: Models;
    formCloseHandler: EmptyFn;
  }) {
    this.#mainContainer = container;
    this.#listContainer = new ListView();
    this.#models = models;
    this.#pointsModel = this.#models.pointsModel;
    this.#filterModel = this.#models.filtersModel;
    this.#sortingModel = this.#models.sortingModel;

    this.#newPointDestroyHandler = () => {
      if (this.points!.length === 0) {
        this.#renderMessage(Message.EMPTY, this.#currentFilter);
      }
    };

    this.#formCloseHandler = formCloseHandler;
=======
  constructor({ container, models, onFormClose }: { container: HTMLTableSectionElement; models: Models; onFormClose: EmptyFn }) {
    this.#mainContainer = container;
    this.#listContainer = new listView();
    this.#models = models;
    this.#pointsModel = this.#models.pointsModel;
    this.#destinationsModel = this.#models.destinationsModel;
    this.#offersModel = this.#models.offersModel;
    this.#filterModel = this.#models.filtersModel;
    this.#sortingModel = this.#models.sortingModel;

    this.#handleNewPointDestroy = () => {
      if (this.points.length === 0) {
        this.#renderEmptyList();
      }
    };

    this.#handleFormClose = onFormClose;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6

    this.#newPointPresenter = new NewPointPresenter({
      container: this.#listContainer.element,
      models,
<<<<<<< HEAD
      dataChangeHandler: this.#viewActionHandler,
      newPointDestroyHandler: this.#newPointDestroyHandler,
      formCloseHandler: this.#formCloseHandler,
    });

    this.#pointsModel.addObserver(this.#pointsModelEventHandler);
    this.#filterModel.addObserver(this.#filterChangeHandler);
    this.#sortingModel.addObserver(this.#sortTypeChangeHandler);
=======
      onDataChange: this.#handleViewAction,
      onNewPointDestroy: this.#handleNewPointDestroy,
      onFormClose: this.#handleFormClose,
    });

    this.#pointsModel.addObserver(this.#handlePointsModelEvent);
    this.#filterModel.addObserver(this.#handleFilterChange);
    this.#sortingModel.addObserver(this.#handleSortTypeChange);
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  }

  get points() {
    this.#currentFilter = this.#filterModel?.filter ?? 'everything';
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#currentFilter](points);

<<<<<<< HEAD
    return this.#sortingModel?.getSortedPoints(filteredPoints, this.#currentSortType) ?? points;
  }

  init() {
    this.#renderMessage(Message.LOADING, this.#currentFilter);
  }

  #renderMessage(message: Message, currentFilter: FilterType) {
    remove(this.#messageComponent);
    this.#messageComponent = new MessageView(message, currentFilter);
    render(this.#messageComponent, this.#mainContainer);
=======
    return this.#sortingModel?.getSortedPoints(filteredPoints, this.#currentSortType);
  }

  init() {
    this.#renderEmptyList();
    Promise.all([this.#pointsModel.init(), this.#destinationsModel.init(), this.#offersModel.init()])
      .then(() => this.#handleDataLoad(true))
      .catch(() => this.#handleDataLoad(false));
  }

  #renderLoading() {
    render(this.#loadingComponent, this.#mainContainer);
  }

  #renderFailedLoad() {
    this.#failedLoadComponent = new FailedLoadView();
    render(this.#failedLoadComponent, this.#mainContainer);
  }

  #renderEmptyList() {
    this.#emptyListComponent = new EmptyListView(this.#currentFilter);
    render(this.#emptyListComponent, this.#mainContainer);
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  }

  #renderPointsList() {
    if (this.#isLoading) {
<<<<<<< HEAD
=======
      this.#renderLoading();
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
      return;
    }

    if (this.points.length > 0) {
<<<<<<< HEAD
      remove(this.#messageComponent);
      render(this.#listContainer, this.#mainContainer, 'beforeend');
      this.#renderPoints(this.points!);
    } else {
      this.#renderMessage(Message.EMPTY, this.#currentFilter);
=======
      render(this.#listContainer, this.#mainContainer, 'beforeend');
      this.#renderPoints(this.points!);
    } else {
      this.#renderEmptyList();
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    }
  }

  #clearPointsList() {
    this.#newPointPresenter.destroy();
    this.#pointsPresenters.forEach((presenter) => presenter.destroy());
    this.#pointsPresenters.clear();
<<<<<<< HEAD
=======
    remove(this.#loadingComponent);

    if (this.#emptyListComponent) {
      remove(this.#emptyListComponent);
    }
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  }

  #renderPoints(points: Point[]) {
    points.forEach((point) => {
      const pointData = { point, models: this.#models };
      this.#renderPoint(pointData);
    });
  }

  #renderPoint(pointData: { point: Point; models: Models }) {
    const pointPresenter = new PointPresenter({
      container: this.#listContainer.element,
<<<<<<< HEAD
      dataChangeHandler: this.#viewActionHandler,
      modeChangeHandler: this.#modeChangeHandler,
=======
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    });
    pointPresenter.init(pointData);

    this.#pointsPresenters.set(pointData.point.id, pointPresenter);
  }

  createPoint() {
    render(this.#listContainer, this.#mainContainer, 'beforeend');
    this.#currentFilter = 'everything';
<<<<<<< HEAD
    this.#filterChangeHandler();
    this.#filterModel.setFilter('everything');
    this.#newPointPresenter.init();
    remove(this.#messageComponent);
  }

  dataLoadHandler = (isSuccessful: boolean) => {
    this.#isLoading = false;
    remove(this.#messageComponent);
    if (isSuccessful === true) {
      this.#isLoading = false;
      this.#renderPointsList();
    } else {
      this.#isLoading = true;
      this.#renderMessage(Message.FAILED_LOAD, this.#currentFilter);
    }
  };

  #viewActionHandler = async (actionType: UserAction, updateType: UpdateType, updatedPoint: Point) => {
=======
    this.#handleFilterChange();
    this.#filterModel.setFilter('everything');
    this.#newPointPresenter.init();
    remove(this.#emptyListComponent);
  }

  #handleDataLoad = (isSuccessful: boolean) => {
    this.#isLoading = false;
    remove(this.#loadingComponent);
    if (isSuccessful === true) {
      this.#renderPointsList();
    } else {
      this.#renderFailedLoad();
    }
  };

  #handleViewAction = async (actionType: UserAction, updateType: UpdateType, updatedPoint: any) => {
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsPresenters.get(updatedPoint.id)?.setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, updatedPoint);
        } catch (err) {
          this.#pointsPresenters.get(updatedPoint.id)?.setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, updatedPoint);
        } catch (err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointsPresenters.get(updatedPoint.id)?.setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, updatedPoint);
        } catch (err) {
          this.#pointsPresenters.get(updatedPoint.id)?.setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
  };

<<<<<<< HEAD
  #pointsModelEventHandler = (updateType: UpdateType, point: Point) => {
=======
  #handlePointsModelEvent = (updateType: UpdateType, point: Point) => {
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    switch (updateType) {
      case UpdateType.PATCH:
        {
          const presenter = this.#pointsPresenters.get(point.id);
          if (presenter) {
            presenter.init({
              point,
              models: this.#models,
            });
          }
        }
        break;
      default:
<<<<<<< HEAD
        this.#filterChangeHandler();
=======
        this.#handleFilterChange();
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
        break;
    }
  };

<<<<<<< HEAD
  #filterChangeHandler = () => {
    this.#currentFilter = this.#filterModel?.filter ?? 'everything';
    this.#sortingModel.setSortType('day');
=======
  #handleFilterChange = () => {
    this.#currentFilter = this.#filterModel?.filter ?? 'everything';
    this.#sortingModel?.setSortType('day');
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    this.#currentSortType = 'day';
    this.#clearPointsList();
    this.#renderPointsList();
  };

<<<<<<< HEAD
  #sortTypeChangeHandler = () => {
=======
  #handleSortTypeChange = () => {
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    const sortType = this.#sortingModel?.type ?? SORT_TYPES[0];

    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#clearPointsList();
    this.#renderPointsList();
  };

<<<<<<< HEAD
  #modeChangeHandler = () => {
=======
  #handleModeChange = () => {
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    this.#newPointPresenter.destroy();
    this.#pointsPresenters.forEach((presenter) => presenter.resetView());
  };
}
