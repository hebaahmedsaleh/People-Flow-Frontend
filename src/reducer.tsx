import { ActionType } from "redux-promise-middleware";
import {
  FluxStandardAction,
  ErrorFluxStandardAction,
} from "flux-standard-action";

import { FETCH_EMPLOYEES, UPDATE_EMPLOYEE } from "./actions";

export type stateType = {
  employees: { [id: string]: any };
  loading: boolean;
  error: ErrorFluxStandardAction | null;
};

const initialState: stateType = {
  employees: {},
  loading: false,
  error: null,
};

const employeesReducer: any = (
  state = initialState,
  action: FluxStandardAction | ErrorFluxStandardAction | any
) => {
  switch (action.type) {
    case `${FETCH_EMPLOYEES}_${ActionType.Pending}`:
      return {
        ...state,
        loading: true,
      };

    case `${FETCH_EMPLOYEES}_${ActionType.Fulfilled}`:
      return {
        loading: false,
        employees: action.payload.data,
        error: null,
      };

    case `${UPDATE_EMPLOYEE}_${ActionType.Fulfilled}`: {
      return {
        ...state,
        loading: false,
        employees: {
          ...state.employees,
          ...action.payload.data,
        },
      };
    }
    case `${UPDATE_EMPLOYEE}_${ActionType.Rejected}`:
      return {
        loading: false,
        employees: state.employees,
        error: action.error,
      };

    default:
      return state;
  }
};


export { employeesReducer };
