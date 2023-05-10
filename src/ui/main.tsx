import '@/ui/styles/global.less';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '@/ui/pages/App';
import store from '@/ui/state';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
