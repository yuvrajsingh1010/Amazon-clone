import React from "react";
import "./Home.css";
import Product from "./Product";
 function Home() {
   return (
      <div className="home">
        <div className="home__container">
          <img 
          className="home__image"
          src="https://wallpapers.com/images/hd/amazon-logo-and-the-city-s5l5knqrvlmx47tn.jpg?w=100&h=100" alt="" />
        <div className="home__row">
          <Product id="1"
            title="Playstation Sony 4, 500GB Slim System [CUH-2215AB01], Black, 3003347"
            price={11.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/51tbWVPtckL._AC_UY327_FMwebp_QL65_.jpg" />
          <Product
           id="2"
           title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
           price={239.0}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product 
          id="3"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product 
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
          id="5"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="7"
            title="ASUS TUF F17 Gaming Laptop, 17.3 144Hz FHD IPS-Type Display, Intel Core i5-11400H Processor, GeForce RTX 3050, 8GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX706HCB-ES51,Graphite Black"
            price={699.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81NnNIn99mL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="8"
            title="Randalfy Kitchen Knife Set with Block, 7 Pieces Chef Knife Set with Knives, Scissor, Block for Meat/Vegetables/Fruits Chopping, Slicing, Dicing&Cutting"
            price={35.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/61tyOK-yULL._AC_SY741_.jpg"
          />
          <Product
            id="9"
            title="Men's Sherpa-Lined Full-Zip Hooded Fleece Sweatshirt"
            price={28.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/41a-Jngbh5L._AC_SR400,600_AGcontrast_.jpg"
          />
          <Product
            id="10"
            title="Bruno Marc Men's Insulated Waterproof Snow Boots Warm Fur Lined Outdoor Winter Boot"
            price={99.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-rkm1-2YL._AC_SY575_.jpg"
          />
          <Product
            id="11"
            title="Total by Verizon Motorola Moto g Pure, 32GB, Blue - Prepaid Smartphone (Locked)"
            price={399.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71zGrrAe5NL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
   );
 }
 
 export default Home;
 