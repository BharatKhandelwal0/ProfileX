const Products = () => {
  return (
    <section
      id='products'
      className='max-w-7xl mx-auto px-6 cursor-default py-20'
    >

      <div className='text-center mb-14'>
        <h1 className='text-4xl md:text-5xl font-bold'>
          Products
        </h1>

        <p className='text-slate-400 mt-5 font-semibold'>
          Explore our modern digital solutions
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className='bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl'
          >

            <img
              className='h-52 w-full object-cover'
              src='https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
              alt='product'
            />

            <div className='p-6'>
              <h2 className='text-3xl font-semibold'>
                Product {item}
              </h2>

              <p className='text-slate-400 mt-4 text-2xl leading-9 font-semibold'>
                Modern responsive digital product built using latest technologies.
              </p>

              <button className='mt-6 w-full py-3 cursor-pointer rounded-lg bg-purple-600 hover:bg-purple-700 transition'>
                View Product
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Products