import React from 'react'
import { Link } from 'react-router-dom'

export function BreadcrumbProfile() {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile" aria-label="current-page">My Profile</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export function BreadcrumbDetail(){
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Office Room</Link>
          </li>
          <li>
            <span aria-label="current-page" className='text-gray-500'>My Profile</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export function BreadcrumbCart(){
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={-1}>Details</Link>
          </li>
          <li>
            <span aria-label="current-page" className='text-gray-500'>Cart</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
