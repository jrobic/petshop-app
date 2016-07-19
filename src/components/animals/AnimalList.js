import React, { PropTypes } from 'react';
import AnimalListRow from './AnimalListRow';

const AnimalList = ({ animals, deleteAnimal }) => {
  function getRows() {
    return animals.map(animal =>
      <AnimalListRow key={animal.id} animal={animal} deleteAnimal={deleteAnimal} />
    );
  }

  return (
    <div>
      <h4 className="display-1 mdl-color-text--grey-600">Liste des animaux</h4>
      <table className="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Nom</th>
            <th className="mdl-data-table__cell--non-numeric">Origine</th>
            <th className="mdl-data-table__cell--non-numeric">Couleur</th>
            <th>Taille <small>(avg)</small></th>
            <th>Poids <small>(avg)</small></th>
            <th>Durée de vie <small>(avg)</small></th>
            <th>Prix <small>(avg)</small></th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {getRows()}
        </tbody>
      </table>
    </div>
  );
};

AnimalList.propTypes = {
  animals: PropTypes.array.isRequired,
  deleteAnimal: PropTypes.func,
};

export default AnimalList;
