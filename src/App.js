import React from 'react';
import { FormBuilder, FieldControl, FieldGroup, Validators } from 'react-reactive-form';

const TextInput = ({ handler, touched, hasError, meta }) => {
  return (
    <div>
      <input type="text" placeholder={meta.label} {...handler()} />
      <small>
        { touched && hasError('required') && `${meta.label} is required`}
        { touched && hasError('min') && `Field is missing length`}
      </small>
    </div>
  )
};

function App() {
  const formControl = FormBuilder.group({
    username: ["", Validators.required],
    password: [""]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formControl.value);
  };

  return (
    <div className="App">
      <FieldGroup
        control={formControl}
        render={( { get, invalid } ) => (
          <form onSubmit={handleSubmit}>
            <FieldControl
              name="username"
              render={TextInput}
              meta={{ label: 'Username' }} />
            <FieldControl
              name="password"
              render={TextInput}
              meta={{ label: 'Password' }} />
              <button type="submit" disabled={invalid}>Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default App;
