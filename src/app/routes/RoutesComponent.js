import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/pages/Home/Index";
import Landing from "../features/pages/Landing/Index";
import Login from "../features/pages/Login/Index";
import Register from "../features/pages/Register/Index";
import Tips from "../features/pages/Tips/Index";
import NotFound from "../features/pages/NotFound/Index";
import { AuthProvider } from "../features/context/authContext/Index";
//import { ApiGPTProvider } from "../features/context/apiGPTContext/Index";
import ProtectedRoutes from "./Routes/ProtectedRoutes/Index";
import { useAuth } from "../features/context/authContext/Index";
const RoutesComponent = () => {

    const { user, loading } = useAuth();


    if (user) {
        return (
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoutes>
                            <Home />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/campanas"
                    element={
                        <ProtectedRoutes>
                            <Tips />
                        </ProtectedRoutes>
                    }
                />
                <Route
                    path="/clientes"
                    element={
                        <ProtectedRoutes>
                            <Tips />
                        </ProtectedRoutes>
                    }
                />
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NotFound></NotFound>} ></Route>
            </Routes>
        );

    }
    return (
        <Routes>
            <Route
                path="/"
                element={

                    <Landing />

                }
            />
            <Route
                path="/campanas"
                element={
                    <ProtectedRoutes>
                        <Tips />
                    </ProtectedRoutes>
                }
            />
            <Route
                path="/clientes"
                element={
                    <ProtectedRoutes>
                        <Tips />
                    </ProtectedRoutes>
                }
            />
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>} ></Route>
        </Routes>
    );



};

export default RoutesComponent;
