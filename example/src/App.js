import React, {useState} from 'react';
import {Form, Field} from 'react-final-form'
import {Undo} from "react-final-form-undo";


function App() {
  const [initialValues, setInitialValues] = useState({firstName: 'Initial first name'})
  const onSubmit = (values) => {
    // save form
    alert('Submitted. Undo/Redo will be reset now.')
    // initializing form with new values coming from server
    // undo/redo queue will be reset now because we are changing initial values
    setInitialValues(values)
  }
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      debug={console.log}
      render={({handleSubmit}) => (
        <form>
          <h2>Simple form with undo/redo functionality</h2>
          <div>
            <label>First Name</label>
            <Field name="firstName" component="input" />
          </div>
          <div>
            <label>Second Name</label>
            <Field name="secondName" component="input" />
          </div>

          <Undo>
            {({canUndo, canRedo, undo, redo}) => (
              <div>
                <button
                  onClick={undo}
                  disabled={!canUndo}
                >
                  Undo
                </button>
                &nbsp;
                <button
                  onClick={redo}
                  disabled={!canRedo}
                >
                  Redo
                </button>
              </div>
            )}
          </Undo>
          <button
            onClick={handleSubmit}
            type="submit">
            Submit
          </button>
        </form>
      )}
    />
  );
}

export default App;
