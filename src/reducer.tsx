// import { ActionType } from 'redux-promise-middleware';
import { FluxStandardAction, ErrorFluxStandardAction } from 'flux-standard-action';

// import { FETCH_PASSES, ADD_PASS, FETCH_SHOTS, ADD_SHOT } from './actions';

export type stateType = {
        passes: { [id: string]: any };
        loading: boolean;
        error: ErrorFluxStandardAction | null;
};

const initialState: stateType = {
        passes: {},
        loading: false,
        error: null
};

const passesReducer: any = (state = initialState, action: FluxStandardAction | ErrorFluxStandardAction | any) => {
        switch (action.type) {
                // case `${FETCH_PASSES}_${ActionType.Pending}`:
                //         return {
                //                 ...state,
                //                 loading: true
                //         };

                // case `${FETCH_PASSES}_${ActionType.Fulfilled}`:
                //         return {
                //                 loading: false,
                //                 passes: action.payload,
                //                 error: null
                //         };

                // case `${ADD_PASS}_${ActionType.Fulfilled}`: {
                //         return {
                //                 ...state,
                //                 loading: false,
                //                 passes: {
                //                         ...state.passes,
                //                         ...action.payload
                //                 }
                //         };
                // }
                // case `${ADD_PASS}_${ActionType.Rejected}`:
                //         return {
                //                 loading: false,
                //                 passes: state.passes,
                //                 error: action.error
                //         };

                default:
                        return state;
        }
};

type stateTypeShots = {
        shots: { [id: string]: any };
        loading: boolean;
        error: ErrorFluxStandardAction | null;
};

const initialStateShot: stateTypeShots = {
        shots: {},
        loading: false,
        error: null
};

export { passesReducer };
