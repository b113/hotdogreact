import React, {Component} from 'react';
import axios from 'axios';

class HotdogTypes extends Component {
  constructor() {
    super();
    this.state = {
      hotdogs: []
    };
  }

  componentDidMount() {
    axios.get(`https://formula-test-api.herokuapp.com/menu`)
      .then(res => this.setState({hotdogs: res.data})
      );
  }

  render() {
    return (
      <section className="hotdog-feed">

        {filterByExpiration(this.state.hotdogs).map(hotdog =>

          (hotdog.id % 2 !== 0) ?
            (<div key={hotdog.id} className="hotdog-types ">
              <div className="hotdog-types__item">
                <div className="hotdog-types__item-wrapper">
                  <h2 className="hotdog-types__header">{hotdog.name}</h2>
                  <p className="hotdog-types__desc">{hotdog.description}</p>
                </div>
              </div>
              <div className="hotdog-types__item">
                <img src={hotdog.backgroundURL} alt="Beef Hot Dog" className="hotdog-types__img"/>
              </div>
            </div>)
            :
            (<div key={hotdog.id} className="hotdog-types ">
              <div className="hotdog-types__item">
                <img src={hotdog.backgroundURL} alt="Beef Hot Dog" className="hotdog-types__img"/>
              </div>
              <div className="hotdog-types__item">
                <div className="hotdog-types__item-wrapper">
                  <h2 className="hotdog-types__header">{hotdog.name}</h2>
                  <p className="hotdog-types__desc">{hotdog.description}</p>
                </div>
              </div>
            </div>)
        )}
      </section>
    );
  }
}

const filterByExpiration = (items) => {

  const todaysDate = new Date();
  const year = todaysDate.getFullYear();
  const month = todaysDate.getMonth();
  const day = todaysDate.getDate();

  return items.reduce((acc, val) => {

    if (Number(val.expirationDate.substr(6, 4)) >= year &&
      Number(val.expirationDate.substr(0, 2)) > month + 1) {
      acc.push(val)
    } else if (Number(val.expirationDate.substr(0, 2)) === month + 1 &&
      Number(val.expirationDate.substr(3, 2)) > day) {
      acc.push(val)
    }
    return acc;
  }, []);
};

export default HotdogTypes;