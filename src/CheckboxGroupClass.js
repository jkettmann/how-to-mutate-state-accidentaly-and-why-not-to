import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { name, option, onChange } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          name={name}
          value={option.value}
          checked={!!option.checked}
          onChange={onChange}
        />
        {option.text}
      </label>
    );
  }
}

class CheckboxGroup extends Component {
  state = {
    options: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' },
    ],
  }

  handleChange = (event) => {
    const newState = { ...this.state };
    const option = newState.options.find(option => option.value === event.target.value);
    option.checked = !option.checked;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        {
          this.state.options.map((option) => (
            <Checkbox
              key={option.value}
              name="my-checkbox-group"
              option={option}
              onChange={this.handleChange}
            />
          ))
        }
      </div>
    );
  }
}

export default CheckboxGroup;
