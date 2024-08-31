/* eslint-disable @typescript-eslint/no-explicit-any */
import AbstractStatefulView from '../../framework/view/abstract-stateful-view';
<<<<<<< HEAD:src/view/main/point-form-view.ts
import { getFormTemplate } from '../../templates/form/form-template';
import type { EmptyFn, PointData, PointForm } from '../../types/common';
import type { State } from '../../types/state';
import type { Point } from '../../types/point-type';
import { destinationChangeHandler, selectedOffersHandler, typeChangeHandler } from '../../utils/point-form';
=======
import { getFormTemplate, FormNames } from '../../templates/form/form';
import type { EmptyFn, PointData } from '../../types/common';
import type { State } from '../../types/state';
import type { Point } from '../../types/point-type';
import { handleDestinationChange, handleSelectedOffers, handleTypeChange } from '../../utils/point-form';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts
import type { Instance as Flatpickr } from 'flatpickr/dist/types/instance';
import 'flatpickr/dist/flatpickr.min.css';
import { setEventFinish, setEventStart } from '../../utils/time/form-time';
import { appDay } from '../../utils/time/time';
import type { Models } from '../../model/create-models';
<<<<<<< HEAD:src/view/main/point-form-view.ts
import { AllowedPrice, FormName } from '../../const';

export default class PointFormView extends AbstractStatefulView<State> {
  #formSubmitHandler: (updatedPoint: Point) => void;
  #deleteButtonClickHandler: any;
  #formCloseHandler: EmptyFn;
=======

export type PointForm = HTMLFormElement & {
  [FormNames.Price]: HTMLInputElement;
  [FormNames.Type]: RadioNodeList;
  [FormNames.Destination]: HTMLSelectElement;
};

const AllowedPrice = {
  MIN: 0,
  MAX: 100_000,
};

export default class PointFormView extends AbstractStatefulView<State> {
  #handleFormSubmit: (updatedPoint: Point) => void;
  #handleDeleteClick: any;
  #handleFormClose: EmptyFn;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts
  #pointData: PointData;
  #point: Point;
  #models: Models;
  dateStart: Flatpickr | null = null;
  dateFinish: Flatpickr | null = null;
  #form: PointForm | null = null;
  #isNewPoint: boolean;

  constructor({
    point,
    models: Models,
<<<<<<< HEAD:src/view/main/point-form-view.ts
    formSubmitHandler: formSubmitHandler,
    deleteButtonClickHandler: deleteButtonClickHandler,
    formCloseHandler: formCloseHandler,
    isNewPoint,
  }: PointData & {
    isNewPoint: boolean;
    formSubmitHandler: (updatedPoint: Point) => void;
    deleteButtonClickHandler: (point: Point) => void;
    formCloseHandler: EmptyFn | null;
=======
    onFormSubmit,
    onDeleteClick,
    onFormClose,
    isNewPoint,
  }: PointData & {
    isNewPoint: boolean;
    onFormSubmit: (updatedPoint: Point) => void;
    onDeleteClick: (point: Point) => void;
    onFormClose: EmptyFn | null;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts
  }) {
    super();
    this.#pointData = { point, models: Models };
    this.#point = this.#pointData.point;
    this.#models = this.#pointData.models;
    this.#isNewPoint = isNewPoint;
    this._setState(this.parsePointToState(this.#point));

<<<<<<< HEAD:src/view/main/point-form-view.ts
    this.#formSubmitHandler = formSubmitHandler;
    this.#deleteButtonClickHandler = deleteButtonClickHandler;
    this.#formCloseHandler = formCloseHandler!;
=======
    this.#handleFormSubmit = onFormSubmit;
    this.#handleDeleteClick = onDeleteClick;
    this.#handleFormClose = onFormClose!;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts

    this._restoreHandlers();
  }

  get template() {
    return getFormTemplate(this._state, this.#models, this.#isNewPoint);
  }

  removeElement() {
    super.removeElement();
  }

  _restoreHandlers() {
    this.#form = this.element.querySelector<PointForm>('form');

    if (this.#form) {
      this.#form.addEventListener('input', this.#formInputChangeHandler);
      this.#form.addEventListener('submit', this.#formSubmittingHandler);

      const resetButtonElement = this.#form.querySelector('.event__reset-btn');
      if (resetButtonElement) {
        resetButtonElement.addEventListener('click', this.#formDeleteHandler);
      } else {
        throw new Error('Reset button is not found');
      }

      const rollupButtonElement = this.#form.querySelector('.event__rollup-btn');
      if (rollupButtonElement) {
        rollupButtonElement.addEventListener('click', this.#formClosingHandler);
      } else {
        throw new Error('Rollup button is not found');
      }
    } else {
      throw new Error('Form is null');
    }

    this.#setDateFrom();
    this.#setDateTo();
  }

  parseFormToState(): Partial<State> {
    if (this.#form) {
      const priceInput = this.#form['event-price'];
      const price = Number(priceInput.value);

      return {
        basePrice: Number.isInteger(price) ? price : 0,
      };
    } else {
      throw new Error('Form is null');
    }
  }

  #formInputChangeHandler: EventListener = (evt) => {
    if (evt.target instanceof HTMLInputElement) {
      const input = evt.target;

      switch (input.name) {
        case FormName.TYPE:
          return this.#typeChangeHandler(evt);
        case FormName.PRICE:
          this._state.basePrice = Number(input.value);
          break;
        case FormName.DESTINATION:
          return this.#destinationChangeHandler(evt);
        default:
          return this.#selectedOffersHandler(evt);
      }
    }
  };

<<<<<<< HEAD:src/view/main/point-form-view.ts
  #typeChangeHandler: EventListener = (evt) => typeChangeHandler(this, evt);
  #destinationChangeHandler: EventListener = (evt) => destinationChangeHandler(this, evt, this.#models);
  #selectedOffersHandler: EventListener = (evt) => selectedOffersHandler(this, evt);
=======
  #typeChangeHandler: EventListener = (evt) => handleTypeChange(this, evt);
  #destinationChangeHandler: EventListener = (evt) => handleDestinationChange(this, evt, this.#models);
  #selectedOffersHandler: EventListener = (evt) => handleSelectedOffers(this, evt);
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts

  #setDateFrom = () => setEventStart(this);
  #setDateTo = () => setEventFinish(this);

  reset(point: Point) {
    this.updateElement(this.parsePointToState(point));
  }

  #formSubmittingHandler: EventListener = (evt) => {
    evt.preventDefault();

    const isNotEmptyDates = this._state.dateFrom !== '' && this._state.dateTo !== '';
    const isCorrectPrice = this._state.basePrice > AllowedPrice.MIN && this._state.basePrice < AllowedPrice.MAX;
    if (isNotEmptyDates && isCorrectPrice) {
<<<<<<< HEAD:src/view/main/point-form-view.ts
      this.#formSubmitHandler(this.parseStateToPoint());
=======
      this.#handleFormSubmit(this.parseStateToPoint());
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts
    }
  };

  #formDeleteHandler: EventListener = (evt) => {
    evt.preventDefault();
    if (this.#isNewPoint === true) {
<<<<<<< HEAD:src/view/main/point-form-view.ts
      this.#deleteButtonClickHandler();
    } else {
      this.#deleteButtonClickHandler(this.parseStateToPoint());
=======
      this.#handleDeleteClick();
    } else {
      this.#handleDeleteClick(this.parseStateToPoint());
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/point-form.ts
    }
  };

  #formClosingHandler: EventListener = (evt) => {
    evt.preventDefault();
    this.#formCloseHandler();
  };

  parsePointToState(point: Point): State {
    return {
      ...point,

      selectedOffers: new Set(point.offers),
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  parseStateToPoint(): Point {
    const { ...point } = this._state as Omit<Point, 'id'> &
      Partial<State> & {
        id?: string;
      };
    point!.offers = Array.from(this._state.selectedOffers);
    point.dateFrom = appDay(point.dateFrom).toISOString();
    point.dateTo = appDay(point.dateTo).toISOString();
    if (!Number.isInteger(point.basePrice)) {
      point.basePrice = 0;
    }

    if (this.#isNewPoint === true) {
      delete point.id;
    }

    delete point.selectedOffers;
    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point as Point;
  }
}
