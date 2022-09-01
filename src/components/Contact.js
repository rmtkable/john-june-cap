import React, { Component } from 'react';
import axios from 'axios';
//import '../styles/Contact.css';
import {BACKEND_URL} from '../config'

export default class contact extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: " ",
        email: " ",
        comment: " ",
      }
    }

  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  onChangeMessage(e){
    this.setState({
      message: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const contact ={
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }
    console.log(contact)
    axios.post(BACKEND_URL + 'contact/add', contact)
    .then(res=>console.log(res.data));
    // window.location="/"
    this.props.history.push('/');
    
    this.setState({
        name: '',
        email: '',
        message: ''
    })
    window.alert('Your comment has been submitted! Thank you!')
    console.log(contact)
  }
}