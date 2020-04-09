import { createStore } from "redux";
import rootReducer from "../reducers/index";

// el store es el resultado de llamar a la funcion createStore y pasarle un reducer (que aun no existe)
const store = createStore(rootReducer);

// exportamos el store para ser consultado por los componentes
export default store;