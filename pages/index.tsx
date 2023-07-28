import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from './header';
import Footer from './footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

  
        {/* Add your home page content here */}

<section>

<a href="https://wa.me/+918562037143" target='_blank'>
<Image
      src="/whatsapp.png"
      width={60}
      height={60}
      alt="Picture of the author"
      style={{position:'fixed' , right:30 , bottom:20 , zIndex:100}}
      

    />
      </a>



        <section


  className="relative bg-[url(https://i.ytimg.com/vi/H-z6XecPYS8/maxresdefault.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-black  lg:text-white sm:text-5xl">
       Get Your Custmized 

        <strong className="block font-extrabold text-rose-900">
        Jewellery and Stachu
        </strong>
      </h1>

      <p className="mt-4 max-w-lg text-black  lg:text-white sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Buy Now
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>




<section className="bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didnt reinvent the wheel</h2>
      <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
      <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
      <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
    </div>
  </div>
</section>





<section className=''>
<div className="flex items-center bg-indigo-100 w-100 px-14 min-h-screen">
  <div className="container ml-auto mr-auto flex flex-wrap items-start">
    <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
      <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
        Best Product
      </h1>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="ganeshji.jpg" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
             Ganesh ji Stachu
            </h5>
            <span className="text-xs text-gray-400 leading-none">And then there was Pro.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $1099,00
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="ganeshji.jpg" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            Ganesh ji Stachu
            </h5>
            <span className="text-xs text-gray-400 leading-none">Just the right amount of everything.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $699,00
            </div>
        
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="ganeshji.jpg" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-gray-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            Ganesh ji Stachu
            </h5>
            <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $599,00
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="ganeshji.jpg" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-gray-600 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
            Ganesh ji Stachu
            </h5>
            <span className="text-xs text-gray-400 leading-none">Lots to love.
              Less to spend.</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              $399,00
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</section>
<Footer/>



     
    </>
  );
}
