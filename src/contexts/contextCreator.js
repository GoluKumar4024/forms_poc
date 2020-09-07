import React, { useReducer } from "react";

const contextCreator = (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundedActions = {};

    for (let key in actions) {
      boundedActions[key] = actions[key](dispatch);
    }

    return (
      // here below i am utilising the fact of "key:value" pairs to be same of "ES6"
      // i can write this in other way as value={{state:state,boundedActions:boundedActions}}
      <Context.Provider value={{ state, ...boundedActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default contextCreator;
