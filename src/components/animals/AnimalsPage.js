/* eslint max-len: 0 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as animalActions from '../../actions/animalActions';
import AnimalList from './AnimalList';
import toastr from 'toastr';

class AnimalsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteAnimal = this.deleteAnimal.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/add');
  }

  deleteAnimal(animal) {
    this.props.actions
      .removeAnimal(animal)
      .then(() => {
        toastr.success('Animal supprimé avec success !');
      })
      .catch(() => {
        toastr.error('Un problème est survenue lors de la suppression.');
      });
  }

  render() {
    return (
      <div className="animal-page">
        <div className="animal-page-add-button">
          <button
            onClick={this.redirectToAddCoursePage}
            className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <AnimalList animals={this.props.animals} deleteAnimal={this.deleteAnimal} />
      </div>
    );
  }
}

AnimalsPage.propTypes = {
  animals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    animals: state.animals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(animalActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsPage);
