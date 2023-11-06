import { Divider } from "antd";
import React, { useState } from "react";

const Filter = ({ onSubmit }) => {



    return (
        <>
            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl lg:px-8">


                    <div className="mt-4 sm:mt-6">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                className="flex flex-col"
                            >
                                <Divider orientation="left">Analiza por campaña</Divider>
                            </div>

                            <div
                                className="flex flex-col"
                            >
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Selecciona tu campaña:</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Todas</option>
                                    <option value="DE">Campaña san valentin</option>
                                    <option value="US">Campaña 28 de julio</option>
                                    <option value="CA">Campaña halloween</option>
                                    <option value="FR">Campaña navidad</option>
                                </select>
                            </div>

                            <div
                                className="flex flex-col"
                            >
                                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Selecciona el rango de fecha:</label>

                                <div date-rangepicker class="flex items-center">
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Inicio" />
                                    </div>
                                    <span class="mx-4 text-gray-500">a</span>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </div>
                                        <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fin" />
                                    </div>
                                </div>

                            </div>
                        </dl>
                    </div>



                </div>
            </section>

        </>
    );
};
export default Filter;

