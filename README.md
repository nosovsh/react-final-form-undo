# react-final-form-undo
Simple Undo/redo component and hook for 
[react-final-form](https://github.com/final-form/react-final-form "react-final-form project page")

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
