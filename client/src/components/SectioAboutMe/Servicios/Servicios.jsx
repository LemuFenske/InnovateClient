import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShoppingCart, faFileAlt, faWrench } from '@fortawesome/free-solid-svg-icons';

export default function Servicios() {
    return (
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center py-2">
      <h2 className="flex items-center mx-auto text-white text-3xl md:text-xl font-semibold mb-4 lg:mb-0">
        <FontAwesomeIcon icon={faCode} className="mr-2 h-6" />
        Software de gestión
      </h2>
    
      <h2 className="flex items-center mx-auto text-white text-3xl md:text-xl font-semibold mb-4 lg:mb-0">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2 h-6" />
        E-commerce
      </h2>
    
      <h2 className="flex items-center mx-auto text-white text-3xl md:text-xl font-semibold mb-4 lg:mb-0">
        <FontAwesomeIcon icon={faFileAlt} className="mr-2 h-6" />
        Landing pages
      </h2>
    
      <h2 className="flex items-center mx-auto text-white text-3xl md:text-xl font-semibold">
        <FontAwesomeIcon icon={faWrench} className="mr-2 h-6" />
        Mantenimiento
      </h2>
    </div>
    

    
    )
  }