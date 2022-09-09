import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles/navbar.css";

function Button() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Attractions" className='btn'>
      <Dropdown.Item href="/brewsBars">Breweries</Dropdown.Item>
<<<<<<< HEAD
      <Dropdown.Item href="/food">Food</Dropdown.Item>
      <Dropdown.Item href="#/entertainment">Entertainment</Dropdown.Item>
=======
      <Dropdown.Item href="#/food">Food</Dropdown.Item>
      <Dropdown.Item href="/entertainment">Entertainment</Dropdown.Item>
>>>>>>> 5d7c595c0077d1e4341cb3bde57a405d88d2f44b
      <Dropdown.Item href="#/artsMuseums">Arts & Museums</Dropdown.Item>
    </DropdownButton>
  );
}

export default Button;