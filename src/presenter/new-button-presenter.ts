<<<<<<< HEAD
import NewButtonView from '../view/header/new-button-view';
=======
/* eslint-disable @typescript-eslint/no-explicit-any */
import NewButtonView from '../view/header/new-button';
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
import type { EmptyFn } from '../types/common';
import { render } from '../framework/render';

export default class NewButtonPresenter {
  #container: HTMLDivElement;
  #button: NewButtonView | null = null;
<<<<<<< HEAD
  #buttonClickHandler: EmptyFn;

  constructor({ container, newButtonClickHandler: newButtonClickHandler }: { container: HTMLDivElement; newButtonClickHandler: EmptyFn }) {
    this.#container = container;
    this.#buttonClickHandler = newButtonClickHandler;
  }

  init() {
    this.#button = new NewButtonView({ newButtonClickHandler: this.#newButtonClickHandler });
    render(this.#button, this.#container);
  }

  dataLoadHandler = (isSuccessful: boolean) => {
    if (isSuccessful === false) {
      if (this.#button !== null) {
        this.#button.element.disabled = true;
      }
    }
  };

=======
  #onButtonClick: EmptyFn;

  constructor({ container, onNewButtonClick: onNewButtonClick }: { container: any; onNewButtonClick: EmptyFn }) {
    this.#container = container;
    this.#onButtonClick = onNewButtonClick;
  }

  init() {
    this.#button = new NewButtonView({ onButtonClick: this.#handleButton });
    render(this.#button, this.#container);
  }

>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
  activate() {
    if (this.#button !== null) {
      this.#button.element.disabled = false;
    }
  }

<<<<<<< HEAD
  #newButtonClickHandler = () => {
    this.#buttonClickHandler();
=======
  #handleButton = () => {
    this.#onButtonClick();
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6
    if (this.#button !== null) {
      this.#button.element.disabled = true;
    }
  };
}
