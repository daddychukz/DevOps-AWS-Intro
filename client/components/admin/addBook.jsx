import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import AddBook from '../includes/AddBook';
import AdminSideBar from '../includes/Sidebar';
import { addBookAction } from '../../actions/BooksActions';
import Navbar from '../Navbar';


export class AddANewBook extends Component {
  render() {
    const { addNewBookAction } = this.props;
    return (
      <div>
        <Navbar route1="/admin" link1="Admin dashboard" route2="" link2="Contact Us" />
        <AddBook
          firebaseStorage={ firebase.storage().ref('images') }
          add={ this.props.addBookAction }
        />
      </div>
    );
  }
}

/**
 *
 *
 * @param {Object} state
 *
 * @returns {Object} Object containing the application state
 */
function mapStateToProps(state) {
  return {
    user: state.auth.user.currentUser
  };
}
export default connect(mapStateToProps, { addBookAction })(AddANewBook);
