import React from "react";
import "../assets/css/header.css"
import "../assets/css/mediaheader.css"


export const Footer = () => {
    return (
        // <div className="footer-container">
        //     <h1>Richard Joseph Omega</h1>
        // </div>


        <div className="footer-container">
            <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Richard Joseph Omega <a href="https://flowbite.com/" class="hover:underline"></a>
                </span>
                </div>
            </footer>
        </div>
        

    )
}