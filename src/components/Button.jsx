import React from 'react';

const Button = ({ label, onClick }) => {
  return <button className="btn btn-warning" onClick={onClick}>{label}</button>;
};

export default Button;
