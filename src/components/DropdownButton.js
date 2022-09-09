import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/navbar.css";

function Button() {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Attractions"
      className="btn"
    >
      <Dropdown.Item href="/brewsBars">Breweries</Dropdown.Item>
      <Dropdown.Item href="/food">Food</Dropdown.Item>
      <Dropdown.Item href="/entertainment">Entertainment</Dropdown.Item>
      <Dropdown.Item href="/artsMuseums">Arts & Museums</Dropdown.Item>
      <Dropdown.Item href="/attractions">VIEW ALL</Dropdown.Item>
    </DropdownButton>
  );
}

export default Button;
