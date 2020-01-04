import useUndo from './useUndo';

const Undo = ({
  children,
}) => {
  const undoRenderProps = useUndo();
  return children(undoRenderProps);
};

export default Undo;
