import {createSelector, createSlice} from '@reduxjs/toolkit';

import {
  fetchMedia,
  fetchGeneral,
  fetchTopHeadlines,
  fetchByCategory,
} from '../middleware/media';

const initialState = {
  isLoadingMedias: false,
  isLoadingHeadlines: false,
  isLoadingDiscover: false,
  isLoadingGeneral: false,
  isLoadingSports: false,
  isLoadingTech: false,
  medias: [],
  media: null,
  topHeadlines: [],
  discover: [],
  general: [],
};

const {reducer} = createSlice({
  name: 'medias',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMedia.pending, state => {
      state.isLoadingMedias = true;
    });
    builder.addCase(fetchMedia.fulfilled, (state, {payload}) => {
      state.isLoadingMedias = false;
      state.medias = payload.sources;
    });
    builder.addCase(fetchMedia.rejected, (state, action) => {
      state.isLoadingMedias = false;
      state.error = action.error;
    });

    //General
    builder.addCase(fetchGeneral.pending, state => {
      state.isLoadingGeneral = true;
    });
    builder.addCase(fetchGeneral.fulfilled, (state, {payload}) => {
      state.isLoadingGeneral = false;
      state.general = payload.articles;
    });
    builder.addCase(fetchGeneral.rejected, (state, action) => {
      state.isLoadingGeneral = false;
      state.error = action.error;
    });

    //Top Headlines
    builder.addCase(fetchTopHeadlines.pending, state => {
      state.isLoadingHeadlines = true;
    });
    builder.addCase(fetchTopHeadlines.fulfilled, (state, {payload}) => {
      state.isLoadingHeadlines = false;
      state.topHeadlines = payload.articles;
    });
    builder.addCase(fetchTopHeadlines.rejected, (state, action) => {
      state.isLoadingHeadlines = false;
      state.error = action.error;
    });

    //Health
    builder.addCase(fetchByCategory.pending, state => {
      state.isLoadingDiscover = true;
    });
    builder.addCase(fetchByCategory.fulfilled, (state, {payload}) => {
      state.isLoadingDiscover = false;
      state.discover = payload.articles;
    });
    builder.addCase(fetchByCategory.rejected, (state, action) => {
      state.isLoadingDiscover = false;
      state.error = action.error;
    });
  },
});

const selectRoot = state => state.medias;

export const mediaSelectors = {
  medias: createSelector(selectRoot, state => state.medias),
  topHeadlines: createSelector(selectRoot, state => state.topHeadlines),
  general: createSelector(selectRoot, state => state.general),
  discover: createSelector(selectRoot, state => state.discover),
  sports: createSelector(selectRoot, state => state.sports),
  technology: createSelector(selectRoot, state => state.technology),
  isLoadingMedias: createSelector(selectRoot, state => state.isLoadingMedias),
  isLoadingHeadlines: createSelector(
    selectRoot,
    state => state.isLoadingHeadlines,
  ),
  isLoadingDiscover: createSelector(
    selectRoot,
    state => state.isLoadingDiscover,
  ),
  isLoadingGeneral: createSelector(selectRoot, state => state.isLoadingGeneral),
  isLoadingSports: createSelector(selectRoot, state => state.isLoadingSports),
  isLoadingTech: createSelector(selectRoot, state => state.isLoadingTech),
};

export const mediasReducer = reducer;
