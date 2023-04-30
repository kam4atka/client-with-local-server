export class Loader {
  constructor(url) {
    this.url = url;
  }

  async getPosts() {
    return await fetch(this.url).then((res) => res.json());
  }
}
