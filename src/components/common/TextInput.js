/* global componentHandler */
/* eslint no-useless-constructor: 0 */
import React, { PropTypes, Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
    componentHandler.upgradeDom();
  }

  componentDidUpdate() {
    // This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
    componentHandler.upgradeDom();
  }

  render() {
    const { name, label, onChange, placeholder, value, error } = this.props;

    let wrapperClass = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';
    if (error) {
      wrapperClass = `${wrapperClass} is-invalid`;
    }

    return (
      <div>
        <div className={wrapperClass}>
          <input
            className={error ? 'mdl-textfield__input is-invalid' : 'mdl-textfield__input'}
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <label className="mdl-textfield__label" htmlFor={name}>{label}</label>
          {error && <span className="mdl-textfield__error">{error}</span>}
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
