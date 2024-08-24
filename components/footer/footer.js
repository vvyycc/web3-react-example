export default function Footer() {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font ">
        <div className="container px-5 py-4 mx-auto flex flex-col justify-center">
          <div className="flex flex-wrap md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-2 py-12">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
              <nav className="list-none mb-1">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-2 py-12">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
              <nav className="list-none mb-1">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-2 py-12">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">CATEGORIES</h2>
              <nav className="list-none mb-1">
                <li>
                  <a className="text-gray-400 hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white">Third Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-2 py-12">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-1">SUBSCRIBE NEWSLETTER</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-32 sm:w-auto xl:mr-2 lg:mr-0 sm:mr-2 mr-1">
                  <label className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-pink-900 focus:border-pink-500 text-base outline-none text-gray-100 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 py-1 px-4 focus:outline-none hover:bg-pink-600 rounded">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}
