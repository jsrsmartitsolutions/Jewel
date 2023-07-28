import React from 'react'
import '../styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

const header = () => {
  return (
   <>
<nav className="bg-gray-900 py-3">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <div className="flex-shrink-0">
        <Link href="/" className="text-white font-semibold text-lg">Logo</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button id="mobile-menu-toggle" className="text-white hover:text-gray-200 focus:outline-none">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div id="menu-items" className="hidden md:flex justify-center flex-grow">
   
  <Link href="/" className="text-gray-300 hover:text-white px-4">
    <i className="fas fa-home mr-1"></i>
    Home
  </Link>


        <Link href="about" className="text-gray-300 hover:text-white px-4">
          <i className="fas fa-info-circle mr-1"></i>
          About
        </Link>
        <Link href="products" className="text-gray-300 hover:text-white px-4">
          <i className="fas fa-cogs mr-1"></i>
          Product
        </Link>
     <Link href="contactus" className="text-gray-300 hover:text-white px-4">
          <i className="fas fa-envelope mr-1"></i>
          Contact
        </Link>
        
      </div>
      <div className="md:flex-shrink-0 hidden md:block">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          <i className="fas fa-sign-in-alt mr-1"></i>
          Buy Jewellery
        </button>
      </div>
    </div>
    <div id="responsive-menu" className="md:hidden hidden bg-blue-900">
      <a href="#" className="block py-2 px-4 text-gray-300 hover:text-white">
        <i className="fas fa-home mr-1"></i>
        Home
      </a>
      <a href="#" className="block py-2 px-4 text-gray-300 hover:text-white">
        <i className="fas fa-info-circle mr-1"></i>
        About
      </a>
      <a href="#" className="block py-2 px-4 text-gray-300 hover:text-white">
        <i className="fas fa-cogs mr-1"></i>
        Services
      </a>
      <a href="#" className="block py-2 px-4 text-gray-300 hover:text-white">
        <i className="fas fa-envelope mr-1"></i>
        Contact
      </a>
    </div>
  </div>
</nav>

   </>
  )
}

export default header