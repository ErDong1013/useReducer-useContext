import produce from "immer";

export interface IState {
  const: number;
  num: number;
}

const initialState: IState = {
  const: 0,
  num: 0,
};

export enum ActionTypes {
  "CONST" = "CONST",
  "NUM" = "NUM",
}

export type Action =
  | { type: ActionTypes.CONST; payload: number }
  | { type: ActionTypes.NUM; payload: number };

const reducerFunction = produce((state: IState, action: Action) => {
  switch (action.type) {
    case ActionTypes.CONST:
      return { ...state, const: action.payload };
    case ActionTypes.NUM:
      return { ...state, num: action.payload };
    default:
      return state;
  }
}, initialState);

export { reducerFunction, initialState };
