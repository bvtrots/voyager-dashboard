import { createService } from './service/create-service';
import { getModels } from './model/create-models';
import MainPresenter from './presenter/main-presenter';

const start = async () => {
  const service = createService();
  const models = getModels(service);
<<<<<<< HEAD
  const mainPresenter = new MainPresenter({ models });
=======
  const mainPresenter = new MainPresenter({ service, models });
>>>>>>> 1633722d9aa4728b5e046b08d5e16569e2ae3ea6

  mainPresenter.init();
};

start();
