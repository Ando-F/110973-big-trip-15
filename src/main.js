// функция для отрисовки (вставки в DOM) компонентов
const render = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
  };

// импорт модулей
import { siteTripMenu } from './view/TripMenu.js';
import { siteTripInfo } from './view/TripInfo.js';
import { siteTripCost } from './view/TripCost.js';
import { siteTripFilters } from './view/TripFilters.js';
import { siteTripSort } from './view/TripSort.js';
import { siteTripCreateForm } from './view/TripCreateForm.js';
import { siteTripEditForm } from './view/TripEditForm.js';
import { siteTripPointList } from './view/TripPointList.js';

// Отрисовка компонентов
const menu = document.querySelector('.trip-controls__navigation');
const filters = document.querySelector('.trip-controls__filters');
const editForm = document.querySelector('.trip-main');
const info = document.querySelector('.trip-info');
const events = document.querySelector('.trip-events');
const pointList = document.querySelector('.trip-events__list');

renderComponent(editForm, siteTripEditForm(), 'afterbegin');
renderComponent(info, siteTripinfo(), 'beforeend');
renderComponent(menu, siteTripMenu(), 'beforeend');
renderComponent(filters, siteTripFilters(), 'beforeend');
renderComponent(events, siteTripSort(), 'beforeend');
renderComponent(events, siteTripEditForm(), 'beforeend');
renderComponent(pointList, siteTripPointList(), 'beforeend');

// Отрисовка «Точка маршрута»

const POINT_COUNT = 3;
for (let i = 0; i < POINT_COUNT; i++) {
  render(events, siteTripEditForm(), 'beforeend');
}
