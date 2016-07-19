import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as animalActions from '../../actions/animalActions';
import AnimalForm from './AnimalForm';
import toastr from 'toastr';
import AnimalModel from '../../models/AnimalModel';

class ManageAnimalPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      animal: Object.assign({}, this.props.animal),
      errors: {},
      saving: false,
    };

    this.updateAnimalState = this.updateAnimalState.bind(this);
    this.saveAnimal = this.saveAnimal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.animal.id !== nextProps.animal.id) {
      this.setState({ animal: Object.assign({}, nextProps.animal) });
    }
  }

  updateAnimalState(event) {
    const field = event.target.name;
    const { animal, errors } = this.state;
    animal[field] = event.target.value;
    errors[field] = null;
    this.setState({ animal, errors });

    return;
  }

  animalFormIsValid() {
    let formIsValid = true;
    const errors = {};

    function isEmptyField(field) {
      return field.length === 0;
    }

    // Validate required field
    if (isEmptyField(this.state.animal.name)) {
      errors.name = 'Le nom est obligatoire';
    }

    if (isEmptyField(this.state.animal.origin)) {
      errors.origin = 'L\'origine est obligatoire';
    }

    if (isEmptyField(this.state.animal.avgPrice)) {
      errors.avg_price = 'Le prix moyen est obligatoire';
    }

    // When have an error, set formIsValid to false
    if (Object.keys(errors).length > 0) {
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  saveAnimal(event) {
    event.preventDefault();
    this.setState({ saving: true });

    if (!this.animalFormIsValid()) {
      return;
    }

    this.props.actions
      .saveAnimal(this.state.animal)
      .then(() => {
        this.redirect();
      })
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success('Animal sauvegardé !');
    this.context.router.push('/');
  }

  render() {
    return (
      <AnimalForm
        saving={this.state.saving}
        onSave={this.saveAnimal}
        onChange={this.updateAnimalState}
        animal={this.state.animal}
        errors={this.state.errors}
      />
    );
  }
}

ManageAnimalPage.propTypes = {
  animal: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

// Pull in the React Router context so router is available on this.context.router
ManageAnimalPage.contextTypes = {
  router: PropTypes.object,
};

function getAnimalById(animals, id) {
  const animal = animals.filter((a) => a.id === id);
  return animal.length ? animal[0] : null;
}

function mapStateToProps(state, ownProps) {
  const animalId = ownProps.params.id;

  let animal = new AnimalModel({});

  if (animalId && state.animals.length > 0) {
    animal = getAnimalById(state.animals, animalId);
  }

  return {
    animal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(animalActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAnimalPage);
