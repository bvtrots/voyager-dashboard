import PointsApiService from './point-api-service';

const enum Setting {
  AUTHORIZATION = 'Basic YQpmc1BozkUB3Krfr[0',
  // BASE_URL = 'http://localhost:3001',
  BASE_URL = 'https://bvtrots-test-server.onrender.com',
  END_POINT = `${BASE_URL}/voyager-dashboard`
}

export const createService = () =>
  new PointsApiService(Setting.END_POINT, Setting.AUTHORIZATION);