import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-2 bg-gray-800 text-white">
      <p>&copy; {currentYear} Tu Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Copyright;
