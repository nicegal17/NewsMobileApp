import {createAsyncThunk} from '@reduxjs/toolkit';
import AppServices from '../../apis/services';

export const fetchMedia = createAsyncThunk('fetch/media', async () => {
  const response = await AppServices.fetchPopularMedia();
  return response.data;
});

export const fetchTopHeadlines = createAsyncThunk(
  'fetch/headlines',
  async () => {
    const response = await AppServices.fetchTopHeadlines();
    return response.data;
  },
);

export const fetchByCategory = createAsyncThunk(
  'fetch/bycategory',
  async category => {
    const response = await AppServices.fetchByCategory(category);
    return response.data;
  },
);

export const fetchGeneral = createAsyncThunk('fetch/general', async () => {
  const response = await AppServices.fetchGeneral();
  return response.data;
});

export const fetchHealth = createAsyncThunk('fetch/health', async () => {
  const response = await AppServices.fetchHealth();
  return response.data;
});

export const fetchSports = createAsyncThunk('fetch/sports', async () => {
  const response = await AppServices.fetchSports();
  return response.data;
});

export const fetchTechnology = createAsyncThunk(
  'fetch/technology',
  async () => {
    const response = await AppServices.fetchTechnology();
    return response.data;
  },
);
