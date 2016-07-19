/* eslint max-len: 0 */
import React from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';

const AnimalForm = ({ animal, onSave, onChange, saving, errors }) => {
  const pageTitle = animal.id ? 'Edition' : 'Ajout';
  return (
    <div className="animal-page">
      <div className="animal-page-add-button">
        <button
          onClick={onSave}
          disabled={saving}
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"
        >
          <i className="material-icons">save</i>
        </button>
      </div>
      <h4 className="display-1 mdl-color-text--grey-600">{pageTitle}</h4>
      <form action="#" className="animal-page-form">
        <div>
          <TextInput
            name="name"
            label="Nom"
            value={animal.name}
            onChange={onChange}
            error={errors.name}
          />

          <TextInput
            name="color"
            label="Couleur"
            value={animal.color}
            onChange={onChange}
            error={errors.color}
          />

          <NumberInput
            name="avgWeight"
            label="Poids moyen (gr)"
            value={animal.avgWeight}
            onChange={onChange}
            error={errors.avgWeight}
          />

          <NumberInput
            name="avgSize"
            label="Taille moyenne (cm)"
            value={animal.avgSize}
            onChange={onChange}
            error={errors.avgSize}
          />
        </div>
        <div>
          <TextInput
            name="origin"
            label="Origine"
            value={animal.origin}
            onChange={onChange}
            error={errors.origin}
          />

          <NumberInput
            name="avgLife"
            label="Durée de vie (an)"
            value={animal.avgLife}
            onChange={onChange}
            error={errors.avgLife}
          />

          <NumberInput
            name="avgPrice"
            label="Prix moyen (€)"
            value={animal.avgPrice}
            onChange={onChange}
            error={errors.avgPrice}
          />
        </div>
      </form>
    </div>
  );
};

AnimalForm.propTypes = {
  animal: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
};

export default AnimalForm;

