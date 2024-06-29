import CardEspacio from "../../Components/CardEspacio"
import CustomCarousel from "../../Components/CarouselImage"

const Home = () => {
  return (
    <>
      <div className='bg-sala h-[450px] bg-center bg-cover flex flex-col justify-center items-center p-5 text-white lg:relative'>
        <p className="font-bold text-2xl lg:text-4xl text-center">Construyendo sueños, inovando hogares</p>
        <p className="font-normal text-lg lg:text-xl text-center">Renueva tu casa con la mejor varidad en pisos y accesorios</p>
        <div className="flex lg:gap-5 lg:w-1/2 lg:items-center lg:justify-center pt-3 gap-1">
          <button className="flex justify-center items-center text-lg bg-white text-primary font-semibold p-3 rounded-full glass hover:bg-primary hover:text-white">
            Contactanos
          </button>
          <button className="flex justify-center items-center text-lg bg-white text-primary font-semibold p-3 rounded-full glass hover:bg-primary hover:text-white">
            Ver catalogo
          </button>
        </div>
      </div>
      <div className=" flex-col px-5 py-5">
        <div className="flex flex-col lg:flex-row">
            <h1 className="flex font-bold text-2xl lg:w-1/4 lg:text-center lg:items-center lg:justify-center lg:border-r lg:border-r-primary">
              Espacios
            </h1>
            <p className="lg:w-3/4  lg:p-10 pt-2">Combinaciones únicas para pisos, paredes, baños y cocinas. No importa si buscas ideas sobre colores o texturas, interiores o exteriores, tenemos una opción diferente para cada ambiente con nuestros productos.</p>
        </div>
        <div className="">
          <CustomCarousel />
          <div className="hidden lg:flex lg:gap-2 lg:justify-between lg:mt-10">
            <CardEspacio />
            <CardEspacio />
            <CardEspacio />
            <CardEspacio />
            <CardEspacio />
          </div>
          <div className="bg-secondary h-96 w-full mt-5">

          </div>
        </div>
      </div>
    </>
  )
}

export default Home