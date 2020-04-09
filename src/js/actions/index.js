//importamos el action type para agregar un articulo
import { ADD_ARTICLE } from "../constants/action-types";

//exportamos el action addArticle
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}