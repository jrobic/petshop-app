import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AnimalListRow = ({ animal, deleteAnimal }) => {
  function onClick() {
    deleteAnimal(animal);
  }

  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">
        <Link to={`/${animal.id}`}>{animal.name}</Link>
      </td>
      <td className="mdl-data-table__cell--non-numeric">{animal.origin}</td>
      <td className="mdl-data-table__cell--non-numeric">{animal.color}</td>
      <td>{animal.avgSize && `${animal.avgSize} cm`}</td>
      <td>{animal.avgWeight && `${parseInt(animal.avgWeight, 10) / 1000} kg`}</td>
      <td>{animal.avgLife && `${animal.avgLife} an`}</td>
      <td>{animal.avgPrice && `${animal.avgPrice} €`}</td>
      <td>
        <button
          onClick={onClick}
          className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"
        >
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

AnimalListRow.propTypes = {
  animal: PropTypes.object.isRequired,
  deleteAnimal: PropTypes.func.isRequired,
};

export default AnimalListRow ;

