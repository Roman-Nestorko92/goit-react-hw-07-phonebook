import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contact-API';
import contactsSlice from './contact-slice';

export const store = configureStore({
  reducer: {
    filter: contactsSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
