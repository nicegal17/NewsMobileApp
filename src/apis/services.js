import API from '.';

const AppServices = {
  async fetchPopularMedia() {
    return await API.get('/sources.json');
  },
  async fetchTopHeadlines() {
    return await API.get('/top-headlines/category/health/us.json');
  },
  async fetchByCategory(category) {
    return await API.get(`/top-headlines/category/${category}/us.json`);
  },
  async fetchGeneral() {
    return await API.get('/top-headlines/category/general/us.json');
  },
  async fetchHealth() {
    return await API.get('/top-headlines/category/health/us.json');
  },
  async fetchSports() {
    return await API.get('/top-headlines/category/sports/us.json');
  },
  async fetchTechnology() {
    return await API.get('/top-headlines/category/technology/us.json');
  },
};

export default AppServices;
