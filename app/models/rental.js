import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = [
  'Congo',
  'Townhouse',
  'Apartment'
];

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr location;
  @attr categories;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if(COMMUNITY_CATEGORIES.includes(this.categories)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
