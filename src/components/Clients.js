import React from 'react'

export default function Clients() {
    return (
        <section className="container mx-auto">
            <div className="flex justify-center flex-wrap">
            <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                <img width="167" height="40" src="./images/content/logo-adobe.svg" alt="" className="mx-auto" />
            </div>
            <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                <img width="112" height="40" src="./images/content/logo-ikea.svg" alt="" className="mx-auto" />
            </div>
            <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                <img width="328" height="40" src="./images/content/logo-hermanmiller.svg" alt="" className="mx-auto" />
            </div>
            <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4 md:my-0">
                <img width="162" height="40" src="./images/content/logo-miele.svg" alt="" className="mx-auto" />
            </div>
            </div>
        </section>
    )
}
