import { ACTIONS } from "./actions";
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.payload.name,
          complete: false,
        },
      ];
    case ACTIONS.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.MARK_COMPLETE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    default:
      return state;
  }
};
export default reducer;
