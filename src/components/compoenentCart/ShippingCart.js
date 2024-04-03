import React from 'react'

export default function ShippingCart() {
  return (
      <>
    <div className="flex flex-col mb-4">
                  <label htmlFor="complete-name" className="text-sm mb-2"
                    >Complete Name</label
                  >
                  <input
                    data-input
                    type="text"
                    id="complete-name"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your name"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="text-sm mb-2">Email Address</label>
                  <input
                    data-input
                    type="email"
                    id="email"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your email address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="address" className="text-sm mb-2">Address</label>
                  <input
                    data-input
                    type="text"
                    id="address"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="phone-number" className="text-sm mb-2"
                    >Phone Number</label
                  >
                  <input
                    data-input
                    type="tel"
                    id="phone-number"
                    className="border-gray-200 border rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input your phone number"
                  />
                </div>
                </>
  )
}
