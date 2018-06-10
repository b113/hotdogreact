import React, {Component} from 'react';
import Header from './Header';
import Footer from "./Footer";
import axios from 'axios';

class Contacts extends Component {

  state = {
    name: '',
    email: '',
    comment: ''
  };

  handleChangeName = event => {
    this.setState({name: event.target.value});
    console.log('name')
  };

  handleChangeEmail = event => {
    this.setState({email: event.target.value});
    console.log('email')
  };

  handleChangeComment = event => {
    this.setState({comment: event.target.value});
    console.log('comment')
  };

  handleSubmit = event => {
    event.preventDefault();
    const message = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    };

    axios.post(`https://formula-test-api.herokuapp.com/contact`, message)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <Header/>
        <section className="contacts">
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div className="contact-form__item">
              <label className="contact-form__label">Name:</label>
              <input className="contact-form__input" type="text" name="name" required
                     onChange={this.handleChangeName}/>
            </div>

            <div className="contact-form__item">
              <label className="contact-form__label">Email:</label>
              <input className="contact-form__input" type="email" name="email" required
                     onChange={this.handleChangeEmail}/>
            </div>

            <div className="contact-form__item">
              <label className="contact-form__label">Comment:</label>
              <textarea className="contact-form__textarea" required placeholder="Leave your message"
                        onChange={this.handleChangeComment}></textarea>
            </div>

            <div className="contact-form__item">
              <input className="contact-form__submit-btn" type="submit"/>
            </div>
          </form>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default Contacts