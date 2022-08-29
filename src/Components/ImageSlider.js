import React, { useState,useEffect } from "react";
import img1 from "./Images/amz12.jpg";
import img2 from "./Images/amz13.jpg";
import img3 from "./Images/amz14.jpg";
import img4 from "./Images/amz15.jpg";
import img5 from "./Images/amz16.jpg";
import img6 from "./Images/amz17.jpg";
import Product from "./Product";

const ImageSlider = () => {
  // const [index, setindex] = useState(0)
  const [number, setnumber] = useState(0);
  const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    "https://m.media-amazon.com/images/I/71QVUpcaPhL._SX3000_.jpg",
  ];
  // useEffect(()=>{
  //   setInterval(()=>{
  //     if(number<=5&& number==number){
  //       setnumber(number+1)
  //       console.log(number)
  //     }
  //     else if(number==6){
  //       setnumber(1)
  //       console.log(number)
  //     }
  //   }, 5000);
  // })
  
  return (
    
    <>
      <div className="w-full fle h-[700px] mb-12 min-w-0 ">
        <img className="bg" src={img[number]} alt="" />
       
      </div>
      <div className="flex flex-row flex-wrap m-4 mb-2 -mt-80  ">
        <Product
          title={`Lenovo Legion 5 AMD Ryzen 7 5800H 15.6" (39.62cm) FHD IPS Gaming Laptop (16GB/2TB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11/Office 2021/RGB Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JU010NIN`}
          id="123456"
          img="https://m.media-amazon.com/images/I/81d6MCVyDiL._CR76,0,1129,637_SR342,193_.png"
          rating="⭐⭐⭐⭐⭐"
          price="15,990$"
          company="acer"
        />
        <Product
          title={`Lenovo Legion 5 AMD Ryzen 7 5800H 15.6" (39.62cm) FHD IPS Gaming Laptop (16GB/2TB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11/Office 2021/RGB Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JU010NIN`}
          id="123456"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
          rating="⭐⭐⭐⭐⭐"
          price="15,990$"
          company="acer"
        />
        <Product
          title={`Lenovo Legion 5 AMD Ryzen 7 5800H 15.6" (39.62cm) FHD IPS Gaming Laptop (16GB/2TB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11/Office 2021/RGB Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JU010NIN`}
          id="123456"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
          rating="⭐⭐⭐⭐⭐"
          price="15,990$"
          company="acer"
        />
        <Product
          title={`Lenovo Legion 5 AMD Ryzen 7 5800H 15.6" (39.62cm) FHD IPS Gaming Laptop (16GB/2TB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11/Office 2021/RGB Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JU010NIN`}
          id="123456"
          img="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
          rating="⭐⭐⭐⭐⭐"
          price="15,990$"
          company="acer"
        />
      </div>
    </>
  );
};

export default ImageSlider;
