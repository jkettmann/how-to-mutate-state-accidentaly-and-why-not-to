import React, { useCallback, useState } from 'react';

const Checkbox = React.memo(function({ name, option, onChange }) {
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
});

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
      const selectedIndex = previousState.options.findIndex(option => option.value === selectedValue)
      const { options } = previousState;
      return {
        ...previousState,
        options: [
          ...options.slice(0, selectedIndex),
          {
            ...options[selectedIndex],
            checked: !options[selectedIndex].checked,
          },
          ...options.slice(selectedIndex + 1),
        ],
      };
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
