// src/components/CustomCarousel.jsx
import { useState } from 'react';
// Importando iconos
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// Arreglo de URLs de imágenes y textos para el carrusel
const images = [
    {
        url: "https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Areas comunes"
    },
    {
        url: "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Comedores"
    },
    {
        url: "https://images.pexels.com/photos/3316918/pexels-photo-3316918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Cocinas"
    }
];

const CustomCarousel = () => {
    // Estado para rastrear el índice de la imagen actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Función para retroceder al slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="lg:hidden relative w-full max-w-3xl mx-auto pt-3">
            {/* Contenedor del carrusel con overflow-hidden para ocultar las imágenes que no están visibles */}
            <div className="overflow-hidden">
                {/* Contenedor de las imágenes con flex y transition para animación */}
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="relative w-full flex-shrink-0">
                            <img
                                src={image.url}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl p-1"
                            />
                            {/* Contenedor del texto y botón */}
                            <div className="absolute top-1/2 left-6 right-6 transform -translate-y-1/2 p-4 rounded-lg text-center glass">
                                <p className="text-lg font-semibold mb-2 text-primary">{image.text}</p>
                                <button className="px-4 py-2 bg-white text-primary font-semibold rounded-full active:bg-primary active:text-white">
                                    Leer más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botón para ir al slide anterior */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
                <GrFormPrevious />
            </button>

            {/* Botón para ir al siguiente slide */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2 rounded-full"
            >
                <GrFormNext />
            </button>
        </div>
    );
};

export default CustomCarousel;
