import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

export default function Login(props) {

    const [user, setUser] = useState({ username: "", password: "" });

    function handleUpdate(event) {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleLogin(user);
    }

    if (isLoggedIn()) {
        navigate(`/app/profile`);
    }

    return (
        <>
            <h1>Log in</h1>
            <form
                method="post"
                onSubmit={event => {
                    handleSubmit(event)
                    navigate(`/app/profile`)
                }}
            >
                <label>
                    Username
            <input type="text" name="username" onChange={handleUpdate} />
                </label>
                <label>
                    Password
            <input
                        type="password"
                        name="password"
                        onChange={handleUpdate}
                    />
                </label>
                <input type="submit" value="Log In" />
            </form>
        </>
    )

}

