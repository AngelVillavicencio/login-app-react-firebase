import { Divider } from "antd";
import React, { useState } from "react";

const Resumen = ({ onSubmit }) => {



    return (
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl mb-0 pb-0">

                    <Divider orientation="left">Resumen</Divider>
                    <div className="mt-4 sm:mt-6">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Total de visitas
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Tiempo promedio
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                                    2.5 min
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Cantidad de páginas promedio
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-4 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Tasa de rebote
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">1%</dd>

                            </div>
                        </dl>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Resumen;
