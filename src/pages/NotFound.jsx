import React from 'react';
import "../styles/_NotFound.sass"
import homer from '@images/error401.png'

const Notfound = () => {
    return (
        <section className="notFound">
            <div className="notFound__info">
                <h1  className="notFound__title">
                    Error 404 – Not Found
                </h1>
                <img src={homer} alt=""  className="notFound__img" />
                <p  className="notFound__parrafo" >
                    Sabemos que es molesto y triste cuando se te acaban las papas o 
                    en este caso cuando no encuentras lo que buscabas.
                </p>
            </div>
        </section>
    );
}

export default Notfound;
