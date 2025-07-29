import React from 'react'

function Footer() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-8 mt-8">
        <div className="col-spn-8 md:col-span-3 h-40 md:h-auto bg-black flex flex-col justify-center items-center p-28 text-white">
          <p className="font-semibold text-3xl">T SHOP</p>
          <p className="mt-7">
            info@mysite.com <br />
            Tel: 123-456-7890
          </p>
        </div>

        <div className="col-spn-8 md:col-span-5 h-auto bg-slate-300 border-t border-black p-10 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center md:text-left ">
            {/* <!--Shop--> */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="" className="hover:underline">
                    New
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    men
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Women
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Our Store --> */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Our Store</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Terms & Conditions --> */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Store Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payment Methods
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-spn-8 md:col-span-3 h-10 md:h-auto bg-white border-t border-white flex justify-center items-center">
          <div className="grid grid-cols-5 gap-2 text-2xl text-black">
            <img src="src/assets/facebk.png" alt="" className="h-10" />
            <img src="src/assets/insta.jpeg" alt="" className="h-10" />
            <img src="src/assets/youtube.png" alt="" className="h-10" />
            <img src="src/assets/pinterest.png" alt="" className="h-10" />
            <img src="src/assets/tiktok.png" alt="" className="h-10" />
          </div>
        </div>

        <div className="col-spn-8 md:col-span-5 h-10 md:h-auto bg-[#E6E6FA] text-center p-4 border-t border-black">
          © 2035 by Nitin Sahu. All Rights Reserved
        </div>
      </section>
    </div>
  );
}

export default Footer
