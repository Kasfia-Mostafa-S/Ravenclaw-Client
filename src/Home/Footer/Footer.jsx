const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white sm:p-6 font-DM border-t-2">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="my-5">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#50748c]">
                Mi CASA
              </span>
              <p className="text-gray-500 font-DM">
                A real estate platform to build your own house
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-[#50748c]">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Homely
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline ">
                      OwnYourHouse
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-[#50748c]">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-[#50748c]">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com" className="hover:underline">
                Mi-CASA™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
