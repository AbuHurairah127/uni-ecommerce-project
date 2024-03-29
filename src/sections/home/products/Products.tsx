"use client";
import ProductCard, {
  ProductCardData,
} from "@/sections/common/productCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { fetchData } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Products = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
        },
      },
    ],
  };
  const router = useRouter();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fetchData(5);
      setData(fetchedData);
    };

    fetchDataAsync();
    if (!data) {
      router.push("/no-internet");
    }
  }, [data, router]);

  return (
    <div className="h-[85vh] lg:min-h-screen max-w-screen flex flex-col space-y-5 justify-center items-center lg:px-24">
      <h4 className="text-[#0000ff] uppercase font-bold text-center">
        Products
      </h4>
      <h3 className="lg:text-5xl text-4xl font-bold my-5 text-center">
        Our Promotions Events
      </h3>
      <div className="flex lg:space-x-8 h-[60vh] w-full flex-wrap justify-around">
        <Slider {...settings} className="w-full">
          {data.map((product: ProductCardData, i: number) => (
            <ProductCard key={i} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
