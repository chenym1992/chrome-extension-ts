import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {},
//   enhancers: [
//     devToolsEnhancer({
//       realtime: true,
//       port: 3100,
//     }),
//   ],
});
export default store;
