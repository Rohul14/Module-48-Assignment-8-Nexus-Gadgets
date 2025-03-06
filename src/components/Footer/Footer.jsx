import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center border-b border-[#e8e8ec99] bg-[#FFF] text-base-content p-10">
        <aside>
            <h1 className="text-4xl font-bold text-sora">Nexus</h1>
          <p className="text-[#09080F99] font-sora text-lg">
          Leading the way in cutting-edge technology and innovation.
          </p>
        </aside>
      </footer>
      <footer className="footer flex flex-col lg:flex-row justify-evenly bg-[#FFF] text-neutral-content p-10 ">
        <nav>
          <h6 className="text-black text-xl font-sora font-bold">Services</h6>
          <a className="text-[#09080F99] font-sora text-lg">Product Support</a>
          <a className="text-[#09080F99] font-sora text-lg">Order Tracking</a>
          <a className="text-[#09080F99] font-sora text-lg">Shipping & Delivery</a>
          <a className="text-[#09080F99] font-sora text-lg">Returns</a>
        </nav>
        <nav>
          <h6 className="text-black text-xl font-sora font-bold">Company</h6>
          <a className="text-[#09080F99] font-sora text-lg">About us</a>
          <a className="text-[#09080F99] font-sora text-lg">Careers</a>
          <a className="text-[#09080F99] font-sora text-lg">Contact</a>
        </nav>
        <nav>
          <h6 className="text-black text-xl font-sora font-bold">Legal</h6>
          <a className="text-[#09080F99] font-sora text-lg">Terms of use</a>
          <a className="text-[#09080F99] font-sora text-lg">Privacy policy</a>
          <a className="text-[#09080F99] font-sora text-lg">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
