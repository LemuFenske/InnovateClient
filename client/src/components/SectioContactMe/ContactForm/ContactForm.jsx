'use client'
import React, { useState } from 'react';
import axios from 'axios';


export default function ContactMe() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    empresaRubro: '',
    pais: '',
    ciudadProvincia: '',
    email: '',
    celular: '',
    mensaje: '',
    respuestaSeguridad: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://innovateserver-production.up.railway.app/send", formData);
      console.log(response.data); 
      setEnviado(true); 
      setFormData({ 
        nombreApellido: '',
        empresaRubro: '',
        pais: '',
        ciudadProvincia: '',
        email: '',
        celular: '',
        mensaje: '',
        respuestaSeguridad: '',
      });
      setTimeout(() => {
        setEnviado(false); // Desactivar el mensaje después de 5 segundos
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div className="mx-4 my-4 rounded-lg sm:mx-20 p-6  sm:rounded-lg drop-shadow-lg sm:shadow-inner flex flex-col items-center bg-black bg-opacity-30">
      <h1 className="text-4xl text-white font-bold mb-4">Contacto</h1>
      <p className="text-lg text-white mb-2">Para hablar con un <span className="font-bold">ASESOR</span></p>

      <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 mb-2 sm:mr-2">
              <input
                type="text"
                name="nombreApellido"
                value={formData.nombreApellido}
                onChange={handleChange}
                placeholder="Nombre y Apellido"
                className="w-full p-2 border rounded"
            />
          </div>

          <div className="w-full sm:w-1/2 mb-2 sm:ml-2">
            <input
              type="text"
              name="empresaRubro"
              value={formData.empresaRubro}
              onChange={handleChange}
              placeholder="Empresa/Rubro"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row ">
        <div className="w-full sm:w-1/2 mb-2 sm:mr-2">
            <input
              type="text"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              placeholder="País"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="w-full sm:w-1/2 mb-2 sm:ml-2">
            <input
              type="text"
              name="ciudadProvincia"
              value={formData.ciudadProvincia}
              onChange={handleChange}
              placeholder="Ciudad/Provincia"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 mb-2 sm:mr-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="w-full sm:w-1/2 mb-2 sm:ml-2">
            <input
              type="text"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              placeholder="Celular"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-2">
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>

        <div className="">
          <label className="block text-sm text-white font-semibold mb-2">¿Cuánto es 10+7?</label>
          <input
            type="text"
            name="respuestaSeguridad"
            value={formData.respuestaSeguridad}
            onChange={handleChange}
            placeholder="Pregunta de seguridad"
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4">
          Enviar
        </button>
        {enviado && (
          <div className='absolute bg-green-600 text-white rounded-lg p-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center shadow-md'>
          <p >
            Correo enviado con éxito
          </p>
          </div>
        )}
      </form>
    </div>
  );
}
