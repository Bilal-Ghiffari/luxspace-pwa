import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import numberFormat from "../organisme/Utils/NumberFormat";
import Header from "../components/Header";
import { BreadcrumbCart as Breadcrumb } from "../organisme/Breadcrumb";
import AsideMenu from "../components/AsideMenu";
import Footer from "../components/Footer";
import PaymentsCart from "../components/compoenentCart/PaymentsCart";
import DetailsCart from "../components/compoenentCart/DetailsCart";
import Offline from "../components/Offline";

export default function Carts({ cart, handleRemoveCart }) {
  const [OfflineStatus, setOflineStatus] = useState(!navigator.onLine);

  // jika status online
  function handleOfflineStatus() {
    setOflineStatus(!navigator.onLine);
  }

  useEffect(() => {
    handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    // remove event
    return function () {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [OfflineStatus]);

  useEffect(() => {
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    }
  }, [cart]);
  return (
    <>
      {OfflineStatus && <Offline />}
      <>
        <Header mode="dark" cart={cart} />
        <Breadcrumb />
        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
              <div
                className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
                id="shopping-cart"
              >
                <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
                  <h3 className="text-2xl">Shopping Cart</h3>
                </div>
                <DetailsCart />
                {cart && cart.length === 0 && (
                  <p id="cart-empty" className="text-center py-8">
                    Ooops... Cart is empty
                    <Link to="/" className="underline">
                      {" "}
                      Shop Now
                    </Link>
                  </p>
                )}

                {cart.length > 0 &&
                  cart.map(({ id, item }, index) => (
                    <div
                      key={index}
                      className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                      data-row="1"
                    >
                      <div className="px-4 flex-none">
                        <div
                          className=""
                          style={{ width: "90px", height: "90px" }}
                        >
                          <img
                            src={item.image1}
                            alt="chair-1"
                            className="object-cover rounded-xl w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="px-4 w-auto flex-1 md:w-5/12">
                        <div className="">
                          <h6 className="font-semibold text-lg md:text-xl leading-8">
                            {item.name}
                          </h6>
                          <span className="text-sm md:text-lg">
                            Office Room
                          </span>
                          <h6 className="font-semibold text-base md:text-lg block md:hidden">
                            {numberFormat(item.price)}
                          </h6>
                        </div>
                      </div>
                      <div className="px-4 w-auto flex-none md:flex-1 md:w-5/12 hidden md:block">
                        <div className="">
                          <h6 className="font-semibold text-lg">
                            {numberFormat(item.price)}
                          </h6>
                        </div>
                      </div>
                      <div className="px-4 w-2/12">
                        <div className="text-center">
                          <button
                            onClick={() => handleRemoveCart(id)}
                            className="text-red-600 border-none focus:outline-none px-3 py-1"
                          >
                            X
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <PaymentsCart />
            </div>
          </div>
        </section>
        <AsideMenu />
        <Footer />
      </>
    </>
  );
}
