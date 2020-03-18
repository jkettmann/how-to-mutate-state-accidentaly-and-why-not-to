import React, { useCallback, useState } from 'react';

function Checkbox({ name, option, onChange }) {
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

function CheckboxGroup() {
  const [state, setState] = useState({
    options: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' },
    ],
  });

  const handleChange = useCallback((event) => {
    const selectedValue = event.target.value;

    setState((previousState) => {
      const newState = { ...previousState };
      const option = newState.options.find(option => option.value === selectedValue);
      option.checked = !option.checked;
      return newState;
    });
  }, []);

  return (
    <div>
      {
        state.options.map((option) => (
          <Checkbox
            key={option.value}
            name="my-checkbox-group"
            option={option}
            onChange={handleChange}
          />
        ))
      }
    </div>
  );
}

export default CheckboxGroup;
