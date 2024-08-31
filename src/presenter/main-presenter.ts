<<<<<<< HEAD
import type { Models } from '../model/create-models';
import { getPageElements } from '../page-elements';
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Models } from '../model/create-models';
import { getPageElements } from '../page-elements';
import type PointsApiService from '../service/point-api-service';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
import FilterPresenter from './filter-presenter';
import InfoPresenter from './info-presenter';
import ListPresenter from './list-presenter';
import NewButtonPresenter from './new-button-presenter';
import SortingPresenter from './sorting-presenter';

export default class MainPresenter {
  #elements = getPageElements();
<<<<<<< HEAD
  #models: Models;
  #newButton: NewButtonPresenter;
  #list: ListPresenter;
  #sorting: SortingPresenter | null = null;
  #info: InfoPresenter | null = null;

  constructor({ models }: { models: Models }) {
    this.#models = models;

    new FilterPresenter({ container: this.#elements.filters as HTMLElement, models: this.#models });
    this.#newButton = new NewButtonPresenter({ container: this.#elements.header, newButtonClickHandler: this.#newButtonClickHandler });
    this.#list = new ListPresenter({ container: this.#elements.events, models: this.#models, formCloseHandler: this.#formCloseHandler });
  }

  init() {
    this.#newButton.init();
    this.#list.init();
    Promise.all([this.#models.pointsModel.init(), this.#models.destinationsModel.init(), this.#models.offersModel.init()])
      .then(() => this.#dataLoadHandler(true))
      .catch(() => this.#dataLoadHandler(false));
  }

  #dataLoadHandler = (isSuccessful: boolean) => {
    if (isSuccessful) {
      this.#sorting = new SortingPresenter({ container: this.#elements.events, models: this.#models });
      this.#info = new InfoPresenter({ container: this.#elements.header as HTMLElement, models: this.#models });

      this.#sorting.init();
      this.#info.init();
    }

    this.#newButton.dataLoadHandler(isSuccessful);
    this.#list.dataLoadHandler(isSuccessful);
  };

  #newButtonClickHandler = () => {
=======
  #service: PointsApiService;
  #models: Models;
  #info: InfoPresenter | null = null;
  #filter: FilterPresenter | null = null;
  #newButton: NewButtonPresenter | null = null;
  #sorting: SortingPresenter | null = null;
  #list: ListPresenter | null = null;

  constructor({ service, models }: { service: PointsApiService; models: Models }) {
    this.#service = service;
    this.#models = models;

    this.#list = new ListPresenter({ container: this.#elements.events!, models: this.#models, onFormClose: this.#handleCloseForm });
    this.#info = new InfoPresenter({ container: this.#elements.header as HTMLElement, models: this.#models });
    this.#filter = new FilterPresenter({ container: this.#elements.filters as HTMLElement, models: this.#models });
    this.#newButton = new NewButtonPresenter({ container: this.#elements.header, onNewButtonClick: this.#handleNewButton });
    this.#sorting = new SortingPresenter({ container: this.#elements.events!, models: this.#models });
  }

  init() {
    this.#list?.init();
    this.#filter?.init();
    this.#newButton?.init();
    this.#info?.init();
  }

  #handleNewButton = () => {
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    if (this.#list !== null) {
      this.#list.createPoint();
    }
  };

<<<<<<< HEAD
  #formCloseHandler = () => this.#newButton.activate();
=======
  #handleCloseForm = () => this.#newButton?.activate() ?? null;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
}
