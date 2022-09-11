import { createContext, useContext, useReducer } from 'react';

const Context = createContext();

const initialState = {
  toggleOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TOGGLE_BUKA':
      return {
        ...state,
        toggleOpen: action.payload,
      };
    default:
      return state;
  }
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export function useAppContext() {
  return useContext(Context);
}
