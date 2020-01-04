import {useState, useCallback} from 'react';
import {useForm, useFormState} from 'react-final-form';

const initial = {
  queue: [],
  currentQueuePosition: 0,
};

const useUndo = () => {
  const formApi = useForm();
  const [state, setState] = useState(initial);

  const onValuesChange = useCallback(
    (formState) => {
      setState((prevState) => {
        if (prevState.queue[prevState.currentQueuePosition] !== formState.values) {
          // fields were changed, adding to the queue
          const newQueue = prevState.queue.slice(prevState.currentQueuePosition, prevState.queue.length);
          return {
            ...prevState,
            currentQueuePosition: 0,
            queue: [formState.values].concat(newQueue),
          };
        } else {
          // doing undo or redo, do not add to the queue
          return prevState;
        }
      });
    },
    [setState],
  );

  const onInitialValuesChange = useCallback(
    ({initialValues}) => {
      setState({
        currentQueuePosition: 0,
        queue: [initialValues],
      });
    },
    [setState],
  );

  useFormState({
    subscription: {initialValues: true},
    onChange: onInitialValuesChange,
  });

  useFormState({
    subscription: {values: true},
    onChange: onValuesChange,
  });

  return {
    undo: (e) => {
      e && e.preventDefault && e.preventDefault();
      // settings value of top level field
      // TODO: use callback for setState
      setState(prevState => ({...prevState, currentQueuePosition: prevState.currentQueuePosition + 1}));
      formApi.change('', state.queue[state.currentQueuePosition + 1]);
    },
    redo: (e) => {
      e && e.preventDefault && e.preventDefault();
      // settings value of top level field
      // TODO: use callback for setState
      setState(prevState => ({...prevState, currentQueuePosition: prevState.currentQueuePosition - 1}));
      formApi.change('', state.queue[state.currentQueuePosition - 1]);
    },
    canUndo: state.queue.length - 1 > state.currentQueuePosition,
    canRedo: 0 < state.currentQueuePosition,
    queue: state.queue,
  };
};

export default useUndo;
