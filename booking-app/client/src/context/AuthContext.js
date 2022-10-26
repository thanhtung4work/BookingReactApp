import { createContext, useReducer } from "react";

const INITIAL_STATE ={
    city: undefined,
    dateRanges: [],
    peopleOption: {
        adult : undefined,
        children: undefined,
        roon: undefined,
    },
};

export const AuthContext = createContext(INITIAL_STATE)

const AuthReducer = (state, action) => {
    switch(action.type){
        case "NEW_Auth":
            return action.payload
        case "RESET_Auth":
            return INITIAL_STATE;
        default:
            return state;  
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
    return (
      <AuthContext.Provider
        value={{
          city: state.city,
          dateRanges: state.dateRanges,
          peopleOption: state.peopleOption,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  
  
  
