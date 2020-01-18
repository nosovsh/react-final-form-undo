# react-final-form-undo
Simple Undo/redo component and hook for 
[react-final-form](https://github.com/final-form/react-final-form "react-final-form project page")

## Demo

https://nosovsh.github.io/react-final-form-undo/

## Getting Started

### Prerequisites
```
npm install react react-dom react-final-form final-form
```

### Installing
```
npm install react-final-form-undo
```

### Usage with component

```javascript
import {Undo} from "react-final-form-undo";

// Then inside your form
<Undo>
  {({canUndo, canRedo, undo, redo}) => (
    <>
      <button
        onClick={undo}
        disabled={!canUndo}
      >
        Undo
      </button>
      
      <button
        onClick={redo}
        disabled={!canRedo}
      >
        Redo
      </button>
    </>
  )}
</Undo>
```


### Usage with hook

```javascript
import {useUndo} from "react-final-form-undo";

// Then inside your form
const {canUndo, canRedo, undo, redo} = useUndo();

// Then inside render
<>
  <button
    onClick={undo}
    disabled={!canUndo}
  >
    Undo
  </button>

  <button
    onClick={redo}
    disabled={!canRedo}
  >
    Redo
  </button>
</>
```

## Important
 - `initialValues` for react-final-form should be provided and should be not `undefined`
 - Undo stack is cleared when initial values are changed. So if you want your undo stack to be cleared after form save - set initial values to a new values. See [example](../master/example/src/App.js).
 
## TODO:
 - implement tests
 - fix known bug that undo stack is not cleared when you roll back to the beginning and then submit form
 - clear undo stack after `reset` and `initialize` methods call
