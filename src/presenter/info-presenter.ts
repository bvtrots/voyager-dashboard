<<<<<<< HEAD
import InfoView from '../view/header/info-view';
import type { Models } from '../model/create-models';
=======
import InfoView from '../view/header/info';
import type { Models } from '../model/create-models';
import type DestinationsModel from '../model/destinations-model';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
import type { Point } from '../types/point-type';
import { remove, render } from '../framework/render';
import type PointsModel from '../model/points-model';

export default class InfoPresenter {
  #container: HTMLElement;
  #models: Models;
  #pointsModel: PointsModel;
<<<<<<< HEAD
=======
  #destinationsModel: DestinationsModel;
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  #points: Point[] = [];
  #info: InfoView | null = null;

  constructor({ container, models }: { container: HTMLElement; models: Models }) {
    this.#container = container;
    this.#models = models;
    this.#pointsModel = this.#models.pointsModel;
<<<<<<< HEAD

    this.#pointsModel.addObserver(this.#renderInfo);
  }

  init() {
    this.#renderInfo();
  }

  #renderInfo = () => {
=======
    this.#destinationsModel = this.#models.destinationsModel;
  }

  init() {
    Promise.all([this.#pointsModel.init(), this.#destinationsModel.init()]).finally(this.#renderInfo);
  }

  #renderInfo = () => {
    this.#pointsModel.addObserver(this.#renderInfo);
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    this.#points = this.#models.pointsModel.points;

    if (this.#points.length > 0) {
      if (this.#info) {
        remove(this.#info);
      }
      this.#info = new InfoView({ points: this.#points, models: this.#models });
      render(this.#info, this.#container, 'afterbegin');
    } else {
      remove(this.#info);
    }
  };
}
