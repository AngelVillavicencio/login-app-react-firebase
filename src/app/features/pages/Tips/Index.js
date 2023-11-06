import React from "react";
import { logOut } from "../../../services/firebase/authFirebase";
import { useAuth } from "../../context/authContext/Index";
import { Layout, Row, Spin } from "antd";
import Navbar from '../../../components/Navbar'

const Index = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { user, setStateUser, loading } = useAuth();
  const logOutSesion = () => {
    logOut().then(() => {
      setStateUser(null);
    });
  };

  if (loading) return <Spin />;

  return (
    <>
      <div className="container m-auto">
        <Navbar></Navbar>
        recomendaciones
      </div>
    </>
  );
};
export default Index;
