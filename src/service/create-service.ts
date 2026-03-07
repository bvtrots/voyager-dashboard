import PointsApiService from './point-api-service';

const enum Setting {
  AUTHORIZATION = 'Basic YQpmc1BozkUB3Krfr[0',
  END_POINT = 'https://bvtrots-mock-server.onrender.com/voyager-dashboard',
}

export const createService = () =>
  new PointsApiService(Setting.END_POINT, Setting.AUTHORIZATION);
