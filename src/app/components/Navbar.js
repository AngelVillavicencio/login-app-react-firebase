import { useState } from "react"
import { logOut } from "../services/firebase/authFirebase";
import { useAuth } from "../features/context/authContext/Index";

const Navbar = () => {

    const { user, setStateUser, loading } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const [isOpenAvatar, setIsOpenAvatar] = useState(false)

    const location_url = window.location.pathname

    const arr_path = location_url.split('/')[1]

    const logOutSesion = () => {
        logOut().then(() => {
            setStateUser(null);
        });
    };

    return (<nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                        <span class="absolute -inset-0.5"></span>

                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="/" className={`${location_url == '/' || arr_path == "dashboard" ? "bg-gray-900" : ""} text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} aria-current="page">Analiza tu campañas</a>
                            <a href="/campanas" className={`${arr_path == "campanas" ? "bg-gray-900" : ""} text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} aria-current="page">Campañas</a>
                            <a href="/clientes" className={`${arr_path == "clientes" ? "bg-gray-900" : ""} text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white`} aria-current="page">Clientes</a>

                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                    <div class="relative ml-3">
                        <div>
                            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setIsOpenAvatar(!isOpenAvatar)}>
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </button>
                        </div>


                        <div class={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button ${isOpenAvatar ? "" : "hidden"}`} tabindex="-1">

                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2" onClick={() => logOutSesion()}>Salir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class={`${isOpen ? "" : "hidden"} sm:hidden `} id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">


                <a href="/" class={`${location_url == '/' || arr_path == "dashboard" ? "bg-gray-900" : ""} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Dashboard</a>
                <a href="/recomendaciones" class={`${arr_path == "recomendaciones" ? "bg-gray-900" : ""} text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}>Tips</a>

            </div>
        </div>
    </nav>)
}

export default Navbar