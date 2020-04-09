import React from "react";
import { connect } from "react-redux";

//mapeamos el state a props, para leer el contenido del store y poder mostrarlo
const mapStateToProps = state => {
    return { articles: state.articles };
};

//componente aun no conectado
const ConnectedList = ({ articles }) => (
    <ul>
        {articles.map(el => (
            <li key={el.id}>{el.title}</li>
        ))}
    </ul>
);

//creamos el componente conectado
const List = connect(mapStateToProps)(ConnectedList);

//exportamos el componente conectado
export default List;