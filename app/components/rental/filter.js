import Component from "@glimmer/component";

export default class RentalFilterComponent extends Component {
  get results(){
    let {query, rentals} = this.args;
    if(query){
      rentals = rentals.filter(rental => rental.title.includes(query))
    }
    return rentals;
  }
}
