import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState ('');
    const [password, setPassword] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { user,password};
        console.log(blog);

    }
    return (  
        <div className="login">
            <h2>Login here</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                type= "text"
                required
                value={user}
                onChange={(e) => setUser (e.target.value)}

                 />

                <label>Password:</label>
                <input
                type= "password"
                required 
                value={password}
                onChange={(e) => setPassword (e.target.value)}
            />
                <button>Login</button>  
            </form>
        </div>
    );
}
 
export default Login;