import React from 'react'
import Product from '../Product/Product';
import './Home.css';
 
 
 
const Home = (props) => {
  return (
    <div className="home">
        <img 
            className="home__image"
            src="https://www.overons.kpn/images/news/_1280xAUTO_crop_center-center_none/Amazon-Prime-Video.jpg"
            alt=""
        />

        <div className="home__row">
            <Product 
                id="12345678"
                title="All-new Echo (4th generation) International Version | With premium sound, smart home hub and Alexa | Charcoal"
                price={99.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/January/Fuji_Dash_Echo_Jan21_1x._SY304_CB413054652_.jpg"
            />
            <Product 
                id="22345678"
                title="ASUS ROG Strix G15 (2021) Gaming Laptop, 15.6” 300Hz IPS Type FHD Display, NVIDIA GeForce RTX 3070, AMD Ryzen R9-5900HX, 16GB DDR4, 1TB PCIe NVMe SSD, RGB Keyboard, Windows 10, G513QR-ES96"
                price={1999.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/41QFlgS5o-L._AC_SY200_.jpg"
            />
        </div>

        <div className="home__row">
            <Product 
                id="32345678"
                title="Flagship Oculus Quest 2 All-in-One Virtual Reality 64GB Gaming Headset w/ Fit Pack Bundle, High Resolution, PC VR Compatible, W/GM Controller Protection Controller Grip Accessories"
                price={429.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/61jBGbu2rkL._AC_UY218_.jpg"
            />
            <Product 
                id="42345678"
                title="OMEN 30L Gaming Desktop PC, NVIDIA GeForce RTX 3080 Graphics Card, 10th Generation Intel Core i9-10850K Processor, 32 GB RAM, 1 TB SSD and 2 TB Hard Drive, Windows 10 Home (GT13-0092, 2020)"
                price={3199.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/810naSDT+2L._AC_UL320_.jpg"
            />
            <Product 
                id="52345678"
                title='MERRY HOME Comforter Set Queen, 10 Piece Comforter Bedding Set with Sheet Set Fit 14"  Deep Pocket - Plush Luxury Solid Color Quilted Pattern for All Season, Black'
                price={83.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/71pXbXCpojL._AC_UL320_.jpg"
            />
        </div>
       
    </div>
  )
}
 
 
 
export default Home;
 