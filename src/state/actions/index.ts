import { Actiontype } from "../action-types";

interface SearchRepositoriesActionType {
    type: Actiontype.SEARCH_REPOSITORIES;
}
  
interface SearchRepositoriesSuccessActionType {
    type: Actiontype.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
  
interface SearchRepositoriesErrorActionType {
    type: Actiontype.SEARCH_REPOSITORIES_ERROR;
    payload: string
}
  
export type Action = 
    | SearchRepositoriesActionType
    | SearchRepositoriesSuccessActionType
    | SearchRepositoriesErrorActionType