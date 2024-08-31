import AbstractView from '../../framework/view/abstract-view';

const TEMPLATE = '<ul class="trip-events__list"></ul>';

<<<<<<<< HEAD:src/view/main/list-view.ts
export default class ListView extends AbstractView<HTMLUListElement> {
========
export default class listView extends AbstractView<HTMLUListElement> {
>>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6:src/view/main/list.ts
  get template() {
    return TEMPLATE;
  }
}
