import React from 'react';
import './burger-constructor.css';

function BurgerConstructor() {
    const [current, setCurrent] = React.useState('one')

    return (
        <section className="burger-constructor">
            <h1 className="mt-10">-></h1>
            constructor
        </section>
    )
}

export default BurgerConstructor;
