import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//import './styles/attractions.css'

const Attraction = (props) => (
    <tr>
      <td>{props.attraction.title}</td>
      <td>{props.attraction.description}</td>
      <td>{props.attraction.imageURL}</td>
      <td>{props.attraction.website}</td>
      <td>{props.attraction.location}</td>
      <td>{props.attraction.category}</td>
      <td>
        <Link to={"/edit/" + props.attraction._id}>edit</Link> |{" "}
      </td>
    </tr>
  );
  
  export default class Attractions extends Component {
    constructor(props) {
      super(props);
  
  
      this.state = { attractions: [] };
    }
    componentDidMount() {
      axios
        .get("/attractions/")
        .then((response) => {
          this.setState({ attractions: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
    Attractions () {
      return this.state.attractions.map((currentAttraction) => {
        return (
          <Attraction
            exercise={currentAttraction}
            key={currentAttraction._id}
          />
        );
      });
    }
    render() {
      return (
        <div>
          <h3>Attractions</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
               
                <th>Website</th>
                <th>Location</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>{this.Attractions()}</tbody>
          </table>
        </div>
      );
    }
  }
  
