import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    alert('Tombol diklik!');
  };

  return (
    <Router>
     <div>
      <header className="header-bg">
      <div className="container">
     <h1 className="font-weight-light ">Pusat Pemantauan & Penyuluhan Bencana</h1>
     <p>Tempat terpercaya untuk memperoleh informasi akurat dan terbaru tentang berbagai jenis bencana alam serta panduan untuk mitigasi dan kesiapsiagaan.</p>
      <Button label="Pelajari lebih lanjut" onClick={handleClick} />
      <Button label="Hubungi kami" onClick={handleClick} />
      </div>
      </header>
    </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buttone" component={Button} />
      </Switch>
    </Router>
  );
};

export default App;
