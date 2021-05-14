const APi_KEY = 'e7683b65f5724ae3a72365cfecc1c50a';
const BASE_URL = 'https://newsapi.org/v2';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    console.log(this);
    const options = {
      headers: {
        Authorization: APi_KEY,
      },
    };

    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=3&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(({ articles }) => {
        this.incrementPage();

        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
