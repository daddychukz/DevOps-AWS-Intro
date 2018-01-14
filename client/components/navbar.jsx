import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';
import { logout } from '../actions/authActions'; 

class Nav extends Component {
  logout(event) {
    event.preventDefault();
    this.props.logout();
  }
  render() {
    const isAuthenticated = this.props.auth.authenticated;
    
    return (
      <div className="Navwrapper">
        {isAuthenticated?
        (
          <Navbar brand='Hello-Books' right>
            <NavItem><Link to='/dashboard'>Home</Link></NavItem>
            <NavItem><Link to={this.props.route}>{this.props.link}</Link></NavItem>
            <NavItem><Link to={this.props.route1}>{this.props.link1}</Link></NavItem>
            <NavItem><Link onClick={ this.logout.bind(this) }>Logout</Link></NavItem>
          </Navbar>
        ):
        (
          <Navbar brand='Hello-Books' right fixed>
            <NavItem><Link to='/'>Home</Link></NavItem>
            <NavItem><Link to='/about'>About</Link></NavItem>
            <NavItem href='https://github.com/babadee001/HelloBooks#readme' target="_blank">Check on Github</NavItem>
          </Navbar>
        )
        }
        
      </div>
    );
  }
}
Nav.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Nav);
