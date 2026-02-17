"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white  dark:bg-gray-dark">
        <div className="container">
        <div className="py-8">
  <div className="flex flex-col md:flex-row justify-between gap-8 text-base text-body-color dark:text-white">
    
    {/* 左侧：公司信息 */}
    <div className="md:w-1/2 text-left space-y-2">
      <p className="font-semibold">
        Dongguan Prosole Sports Limited
      </p>

      <p>
        OFFICE: Room 1315, Zhonghuan 100 Plaza, No. 92 Hongfu Road,
        Nancheng Street, Dongguan City, Guangdong Province
      </p>

      <p>
        FACTORY: Floor 1, Build 91, Qinglong Road, Huangjiang Town,
        Dongguan City, Guangdong Province
      </p>
    </div>

    {/* 右侧：联系方式 */}
    <div className="md:w-1/2 text-left md:text-right space-y-2">
      <p className="font-semibold">Marketing</p>
      <p>Email: wslyfs2010@gmail.com</p>
      <p>WhatsApp: +86 15017139740</p>
    </div>

  </div>
</div>

   <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
