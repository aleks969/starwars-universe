import Entity from "./Entity";

export default class StarWarsUniverse {
  constructor() {
    this.entities = [];
  }

  async fetchEntitiesData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async init() {
    const URL = `https://swapi.boom.dev/api/`;
    const res = await fetch(URL);
    const data = await res.json();
    // console.log(data);

    const keys = Object.keys(data);
    // console.log(keys);
    const urls = Object.values(data);
    // console.log(urls);

    keys.forEach(async (k, idx) => {
      const entityData = await this.fetchEntitiesData(urls[idx]);
      const entity = new Entity(k, data);
      //   console.log(entity);
      entity.data.count = entityData.count;
      this.entities.push(entity);
    });
  }
}
