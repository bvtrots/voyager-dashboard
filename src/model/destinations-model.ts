import { UpdateType } from '../const';
import Observable from '../framework/observable';
import type PointsApiService from '../service/point-api-service';
import type { Destination } from '../types/destination-type';
import type { Point } from '../types/point-type';

export default class DestinationsModel extends Observable<UpdateType, Point> {
  #service: PointsApiService;
  #destinations: Destination[] = [];

  constructor({ service }: { service: PointsApiService }) {
    super();
    this.#service = service;
  }

  get destinations() {
    return this.#destinations;
  }

  get allDestinationsNames(): string[] {
    return Array.from(this.#destinations.map((point) => point.name));
  }

  get allDestinationsIDs(): string[] {
    return Array.from(this.#destinations.map((point) => point.id));
  }

  async init() {
    try {
      const destinations = await this.#service.destinations;
      this.#destinations = destinations ?? [];
    } catch (err) {
      this.#destinations = [];
<<<<<<< HEAD
      throw new Error('Can\'t load destinations');
=======
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    }

    this._notify(UpdateType.INIT, {});
  }

  getDestinationByID = (destination: Point['destination']) => this.#destinations.find((item) => item.id === destination);
  getDestinationByName = (name: Destination['name']) => this.#destinations.find((item) => item.name === name);
}
