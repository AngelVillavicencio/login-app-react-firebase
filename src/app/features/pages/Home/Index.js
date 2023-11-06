import React, { useEffect, useState } from "react";
import { logOut } from "../../../services/firebase/authFirebase";
import { useAuth } from "../../context/authContext/Index";
import { Divider, Layout, Row, Space, Spin } from "antd";
import Navbar from '../../../components/Navbar'
import LayoutMain from "../../../components/LayoutMain";
import UserCounter from "../../../components/UserCounter";
import TableUserNavigation from "../../../components/TableUserNavigation";
import SearchUtms from "../../../components/SearchUtms";
import CardAI from "../../../components/CardAI";
import axios from 'axios'
import Resumen from "../../../components/Resumen";
import Filter from "../../../components/Filter";
import TableComponent from "../../../components/TableComponent";
import Chatbot from "../../../components/ChatBot";

const Index = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { user, setStateUser } = useAuth();
  const logOutSesion = () => {
    logOut().then(() => {
      setStateUser(null);
    });
  };

  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();

    const { utm_campaign, utm_source, utm_medium } = event.target

    console.log("utms", utm_campaign, utm_source, utm_medium)


    const data = {
      utm_campaign: utm_campaign,
      utm_source: utm_source,
      utm_medium: utm_medium,
      client_name: "client_x"
    };

    setLoading(true)

    await axios.post('http://localhost:5050/api/consultar-coleccion', data)
      .then(response => {
        console.log('Respuesta de la solicitud POST:', response.data);
        setResponse(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error en la solicitud POST:', error);
        setLoading(false)
      });



  }


  return (
    <>
      <LayoutMain>
        <div className="mt-5 mb-3">
          <div className=" max-w-3xl text-left">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Bienvenidos a AdsTrackIA
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Conoce a tu cliente
            </p>
          </div>
        </div>


        <Filter></Filter>
        <Resumen></Resumen>
        <div className="flex items-start justify-around">
          <TableComponent title={"Categorías visitadas"} columnas={["Nombre de categoría", "Número de visitas"]} rows={[{ title: "Muebles de Dormitorio", subtitle: "50" }, { title: "Electrodomésticos de Cocina", subtitle: "100" }]} ></TableComponent>
          <TableComponent title={"Productos visitados"} columnas={["Nombre del producto", "Número de visitas", "Url"]} rows={[{ title: "consola-nintendo-switch-modelo-oled-con-white-joy-con-heg-s-kaaaa", subtitle: "100", url: "https://www.efe.com.pe/consola-nintendo-switch-modelo-oled-con-white-joy-con-heg-s-kaaaa.html" }, { title: "consola-xbox-serie-s-1tb-twvs4000727", subtitle: "60", url: "https://www.efe.com.pe/consola-xbox-serie-s-1tb-twvs4000727.html" }, { title: "consola-xbox-serie-s-1tb-twvs4000727", subtitle: "40", url: "https://www.efe.com.pe/consola-xbox-serie-s-1tb-twvs4000727.html" }, { title: "consola-xbox-serie-s-1tb-twvs4000727", subtitle: "30", url: "https://www.efe.com.pe/consola-xbox-serie-s-1tb-twvs4000727.html" }, { title: "consola-xbox-serie-s-1tb-twvs4000727", subtitle: "10", url: "https://www.efe.com.pe/consola-xbox-serie-s-1tb-twvs4000727.html" }]} ></TableComponent>
        </div>




        <Divider orientation="left" className="mb-4 mt-4">Usa tu data de manera inteligente </Divider>

        

        <Chatbot></Chatbot>


        {
          loading == false ? <>
            {
              response == null ? (<p>Consulta! </p>) : (<div class="grid lg:grid-cols-1 md:grid-cols-1 gap-6 w-full max-w-6xl m-auto">
                <p>
                  {JSON.stringify(response)}
                </p>

              </div>)
            }
          </> : <>
            <Spin></Spin>
          </>
        }





      </LayoutMain >
    </>
  );
};
export default Index;
