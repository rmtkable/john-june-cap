import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cinCinCity from '../assets/cinCinCity.jpg'

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
          <h3>Logged Exercises</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <img src={cinCinCity} style={{width: '100px', height: '100px'}} alt="cincinnati"/>
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
  

// const Attraction = (props) => {
//     return (
//         <div className='allAttractions'>
//             <div className='attractionsCard'>
//                 <div className='cardImage'>
//                     <img className='attractionImage'src={props.attraction.imageURL} alt='attraction picture' />
//                 </div>
//                 <div>
//                     <div className='text-name'>{props.attraction.name}</div>
//                     <div className='text-link'>
//                         <Link className='link-details' Link to={"attractions/" + props.attraction._id}>Details</Link>
//                     </div>
//                     <div className='website'>
//                         <a className='link-site' href={props.attraction.website} target="_blank" rel="noreferrer">Website</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default class Attractions extends Component {
//     componentDidMount() {
//         axios.get(BACKEND_URL + 'attractions/')
//         .then(Response => {
//             this.setState({
//                 attractions: response.data,
//                 loading: false
//             })
//             console.log('Attractions list')
//         })
//         .catch((error) => {
//             console.log(error)
//         });
//     }
//     attractionsList() {
//         return this.state.attractions.map((currentAttraction) => {
//             return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
//         })
//     }

//     render() {
//         return (
//             this.state.loading === false ? (
//                 <div className='row'>
//                     <div className='attractionsContainer'>
//                         <h2 className='attractionsHeader'>Attractions!</h2>
//                         <div className="attractionsInnerContainer">
//                             {this.attractionsList()}
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <h1>Loading page</h1>
//             )
//         )
//     }
// }

