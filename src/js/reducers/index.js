//importamos el action type para agregar un articulo
import { ADD_ARTICLE } from "../constants/action-types";

//state inicial
const initialState = {
  articles: []
};

//actulizamos el reducer para que ahora pueda "agregar articulo"
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}

//exportamos el reducer
export default rootReducer;