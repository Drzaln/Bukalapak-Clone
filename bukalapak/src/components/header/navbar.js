import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "../../support/styles/navbar.css";
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  state = {
    listProduct: []
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="md">
          <div className="container-fluid">
            <NavbarBrand href="/" className="logoNav">
              <img
                src="https://shopily-id.s3.amazonaws.com/uploads/stores/1479/1479_logo_e82fa5a7.png"
                alt=""
              />
            </NavbarBrand>
            <UncontrolledDropdown>
              <DropdownToggle nav caret style={{ color: "white" }}>
                <i className="fa fa-tasks" aria-hidden="true" /> Category
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <input
              className="form-control"
              type="text"
              ref="input"
              onClick={this.searchAll}
              placeholder="Search..."
              style={{ width: 300 }}
            />
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="/components/"
                    style={{ color: "white" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Pesan"
                  >
                    {" "}
                    <i
                      className="fa fa-commenting fa-lg mr-3"
                      aria-hidden="true"
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/components/"
                    style={{ color: "white" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Transaksi"
                  >
                    <i
                      className="fa fa-exchange fa-lg mr-3"
                      aria-hidden="true"
                    />
                  </NavLink>
                </NavItem>
                <NavItem>
                <Link to='/cart'>
                  <NavLink
                    href="/components/"
                    style={{ color: "white" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Keranjang Belanja"
                  >
                    <i
                      className="fa fa-shopping-cart fa-lg mr-3"
                      aria-hidden="true"
                    />
                  </NavLink>
                </Link>
                  
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/reactstrap/reactstrap"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Notifikasi"
                    style={{ color: "white" }}
                  >
                    <i className="fa fa-bell fa-lg mr-3" aria-hidden="true" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://github.com/reactstrap/reactstrap"
                    style={{ color: "white" }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Profile"
                  >
                    <i class="fa fa-user fa-lg" aria-hidden="true" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
