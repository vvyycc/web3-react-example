import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import { useWeb3React } from '@web3-react/core';

const Layout = ({ children }) => {
  const { active } = useWeb3React();
  //TODO: Do with ternary operator
  return (
    <div>

      <div>
        <div className="relative flex flex-col min-h-screen">

          <Header />
          <main className="flex flex-col  justify-center h-full flex-grow py-2 z-50 bg-gradient-to-r from-flow-blue to-flow-green p-8">
          {active ? children : null}
          </main>
          <div >
            <Footer className="fixed z-51 " />
          </div>
        </div>


      </div>

    </div>
  );
};

export default Layout;