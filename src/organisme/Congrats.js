import React from 'react'
import { Link } from 'react-router-dom';
import Subscribe from '../service/SubscribeSw';


//   // function untuk mengirimkan web notifikasi => (googleDeveloper)
// function urlB64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }


// async function subscribe() {
//     const keys = process.env.PUBLIC_KEYS;

//     // handleErrors
//     try {
//         await global.registration.pushManager.subscribe({
//             userVisibleOnly: true,
//             // applicationServerKey untuk memodifikasi key
//             applicationServerKey: urlB64ToUint8Array(keys)
//         });
//         console.log("Subscribe!");
//     } catch (error) {
//         console.error("Cannot subscribe")
//       }
// }



    export default function Congrats() {
      return (
    <section className="">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center">
            <div
              className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 mt-20"
            >
              <img
                src="./images/content/my-profile.png"
                alt="my-profile"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold mb-1">Masayoshi Angga</h2>
            <p className="text-lg mb-12">Jr. Website Developer</p>
          </div>
        </div>
        <ul className="max-w-full md:max-w-lg mx-auto">
          <li
            className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100"
          >
            <span>Subscribe to Notification</span>
            <button className="hover:underline appearance-none" onClick={Subscribe}>Subscribe</button>
          </li>
          <li
            className="pb-3 mb-2 flex items-center justify-between w-full border-b border-gray-100"
          >
            <span>Test Notification</span>
            <button className="hover:underline appearance-none">Push Now</button>
          </li>
        </ul>
        <div className="text-center mt-12">
          <Link
            to="/"
            className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </section>
  )
}
