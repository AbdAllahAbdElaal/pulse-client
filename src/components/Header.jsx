import React from 'react';

function Header({ title, subtitle }) {
  return (
    <header className="page-header text-white" style={{ paddingTop: '200px', height: '350px' }}>
        <div className="container text-center">
            <h1 className="fw-bold mb-2">{title}</h1>
            <p className="mb-0">{subtitle}</p>
        </div>
    </header>
  );
}

export default Header;