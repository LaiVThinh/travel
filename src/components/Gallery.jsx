import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-y-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center to-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            className="w-full h-full object-cover"
            src="https://www.chudu24.com/wp-content/uploads/2017/08/5-33.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://dulichvietnam.com.vn/vnt_upload/news/07_2021/khu_nghi_duong_tren_bien_1.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://vcdn1-dulich.vnecdn.net/2020/03/26/5-Spa-activities-2-1995-1585197604.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=bHq4rDXT08WicyJc9g-GRQ"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://halotravel.vn/wp-content/uploads/2020/05/Salinda-Phu-Quoc-Island-Resort-Spa-1024x798.jpg"
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src="https://hoangcau.vn/wp-content/uploads/2019/05/vinpearl-resort-nha-trang.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
