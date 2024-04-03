import { useCallback, useState, useEffect } from "react";
import ArrivedItems from "../organisme/ArrivedItems";
import { getDetailsProduct } from "../service/details";

export default function Arrived() {
  const [items, setItems] = useState([]);

  const getDetailsProductList = useCallback(async () => {
    const data = await getDetailsProduct();
    setItems(data);

    if (!document.getElementById("carouselScript")) {
      const script = document.createElement("script");
      script.id = "carouselScript";
      script.src = "/carousel.js";
      script.async = false;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    getDetailsProductList();
  }, [getDetailsProductList]);

  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          {items.map((item) => (
            <ArrivedItems items={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
