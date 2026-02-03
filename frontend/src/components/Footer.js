import React from 'react';

export default function Footer() {
  return (
    <footer className="py-4 bg-light text-muted mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Divyadharshini Y</p>
      </div>
    </footer>
  );
}
