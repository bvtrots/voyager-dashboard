import PointsApiService from './point-api-service';

const enum Setting {
  END_POINT = 'https://bvtrots-mock-server.onrender.com/voyager-dashboard',
}

export const createService = () => new PointsApiService(Setting.END_POINT, Setting.AUTHORIZATION);
