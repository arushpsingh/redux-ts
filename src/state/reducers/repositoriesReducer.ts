interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesActionType {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessActionType {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorActionType {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesActionType
    | SearchRepositoriesSuccessActionType
    | SearchRepositoriesErrorActionType
  ): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
