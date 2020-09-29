import { observable, action } from 'mobx';
import axios from 'axios';

class CCsStore {
  @observable ccs = {};

  @action
  async getDetails() {
    const response = await axios.get(
      `https://fakerapi.it/api/v1/credit_cards?_quantity=1`,
    );

    this.ccs = new CCStore({
      type: response.data.data[0].type,
      owner: response.data.data[0].owner,
      number: response.data.data[0].number,
      expiration: response.data.data[0].expiration,
    });
  }
}
class CCStore {
  constructor(props) {
    Object.assign(this, props);
  }
}

export default CCsStore;
