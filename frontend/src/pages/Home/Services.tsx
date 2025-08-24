


function Services() {

    return (
        <>

            {/* //projects */}
            <div className="max-w-7xl mx-auto px-4 mt-10">
                {/* Heading */}


                {/* Hero Section */}
                {/* <EaseIn> */}
                <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-100 mb-12 rounded-lg overflow-hidden shadow-lg">
                    {/* Background Image */}
                    <img
                        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Photographer at work"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl w-full px-6 text-white top-22 md:rleft-10 ">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                            LET’S BRING YOUR STORY INTO FOCUS.
                        </h1>
                        <p className="text-md sm:text-lg max-w-xl mb-6 !text-white">
                            Whether it's a personal milestone, a brand vision, or a fleeting moment—
                            I'm here to help you capture it beautifully.
                        </p>
                        <a
                            href="#book"
                            className="inline-block bg-white text-black px-6 py-3 text-sm font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
                        >
                            EXPLORE →
                        </a>
                    </div>
                </section>
                {/* </EaseIn> */}
            </div>



        </>


    )
}

export default Services