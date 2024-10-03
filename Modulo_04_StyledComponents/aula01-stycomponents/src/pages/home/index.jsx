import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";

const Home = () => {
    return (<>
        <h1>Home</h1>
        <Button title="Teste 1"></Button>
        <Button variant="secondary" title="Teste 2"></Button>
        <Link to="/login">Login</Link>
    </>);
};

export { Home };
