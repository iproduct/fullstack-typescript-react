import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

interface AuthCallback {
    (): void;
}

interface PrivateRouteProps {
    path: string;
    authService: AuthService;
}

interface AuthService {
    readonly isAuthenticated: boolean;
    authenticate(cb: AuthCallback): void;
    signout(cb: AuthCallback): void;
}

interface AuthCompProps {
    authService: AuthService;
}

interface LocationState {
   from: { 
       pathname: "/" 
   }
}

export default function AuthExample() {
    const [authenticated, setAuthenticated] = useState(false);

    const fakeAuth = {
        get isAuthenticated() {
            return authenticated;
        },
        authenticate(cb: AuthCallback) {
            setAuthenticated(true);
            setTimeout(cb, 100); // fake async
        },
        signout(cb: AuthCallback) {
            setAuthenticated(false);
            setTimeout(cb, 100);
        }
    };
    
    return (
        <Router>
            <div>
                <AuthButton authService={fakeAuth}/>

                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage authService={fakeAuth}/>
                    </Route>
                    <PrivateRoute path="/protected" authService={fakeAuth}>
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}



const AuthButton: React.FC<AuthCompProps> = ({authService, ...rest}) => {
    let history = useHistory();

    return authService.isAuthenticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    authService.signout(() => history.push("/"));
                }}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute: React.FC<PrivateRouteProps> = ({ authService, children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            authService.isAuthenticated ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/login", state: { from: location } }}/>
                )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}
const LoginPage: React.FC<AuthCompProps> = ({authService}) => {
    let history = useHistory();
    let location = useLocation();

    let { from }  = (location.state || { from: { pathname: "/" } }) as LocationState;
    let login = () => {
        authService.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}
