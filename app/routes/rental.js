import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export default class RentalRoute extends Route {
  async model(params) {
    let response = await fetch(`api/rental/${params.rental_id}.json`);
    let {data} = await response.json();

    return data.map(model => {
      let {attributes, id} = model;
      let type;

      if(COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone'
      }

      return {id, type, ...attributes}
    });
  }
}
