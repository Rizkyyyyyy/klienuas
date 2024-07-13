import React from 'react';


const Home = () => {
    return (
        <div>
            {/* <header className="header-bg">
                <div className="container">
                    <h1 className="font-weight-light">Pusat Pemantauan & Penyuluhan Bencana</h1>
                    <p>Tempat terpercaya untuk memperoleh informasi akurat dan terbaru tentang berbagai jenis bencana alam serta panduan untuk mitigasi dan kesiapsiagaan.</p>
                    <button className="btn btn-warning">Pelajari lebih lanjut</button>
                    <button className="btn btn-secondary ml-2">Hubungi kami</button>
                </div>
            </header> */}
    
    <div className="container">
      <h1>Tentang Kami</h1>
      <p>
        Kami adalah organisasi non-profit yang berdedikasi untuk mempersiapkan
        masyarakat dalam menghadapi bencana alam. Dengan keahlian dan pengalaman
        kami, kami membantu masyarakat meningkatkan kesiapsiagaan dan ketahanan.
      </p>
      <div className="features">
        <div className="feature">
          <img src="/src/aa.png" alt="Icon 1" />
          <h3>Tersebar di Seluruh Indonesia</h3>
          <p>Kami hadir di berbagai wilayah untuk menjangkau masyarakat di seluruh Indonesia.</p>
        </div>
        <div className="feature">
          <img src="/src/bb.png" alt="Icon 2" />
          <h3>Mitra Terpercaya</h3>
          <p>Bekerja sama dengan pemerintah, LSM, dan komunitas lokal untuk mencapai dampak yang lebih besar.</p>
        </div>
        <div className="feature">
          <img src="/src/cc.png" alt="Icon 3" />
          <h3>Berbasis Riset</h3>
          <p>Menggunakan data dan analisis terkini untuk memberikan informasi yang akurat dan terpercaya.</p>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Home;
