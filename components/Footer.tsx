import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="bg-gray-100 py-8 shadow-inner text-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <img src="/company/logo/logo.svg" alt="لوگو سایت" className="h-12" />
          </div>
          <div className="mb-6 md:mb-0 text-right">
            <h4 className="text-lg font-semibold mb-2">تماس با ما</h4>
            <p>آدرس: تهران، خیابان ولیعصر</p>
            <p>تلفن: 021-12345678</p>
            <p>ایمیل: info@example.com</p>
          </div>
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-2">ما را دنبال کنید</h4>
            <div className="flex justify-center md:justify-end">
              <Link href="https://www.facebook.com" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="/icons/icons8-facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8 transform transition-transform duration-300 hover:scale-110 mx-1"
                />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="/icons/icons8-instagram.svg"
                  alt="Instagram"
                  className="w-8 h-8 transform transition-transform duration-300 hover:scale-110 mx-1"
                />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="/icons/icons8-twitterx.svg"
                  alt="Twitter"
                  className="w-8 h-8 transform transition-transform duration-300 hover:scale-110 mx-1"
                />
              </Link>
              <Link href="https://www.telegram.com" target="_blank">
                <Image
                  width={32}
                  height={32}
                  src="/icons/icons8-telegram.svg"
                  alt="Telegram"
                  className="w-8 h-8 transform transition-transform duration-300 hover:scale-110 mx-1"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} تمامی حقوق محفوظ است.
          </p>
          <nav className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <Link href="/">
              <span className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                سیاست حفظ حریم خصوصی
              </span>
            </Link>
            <Link href="/">
              <span className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                شرایط خدمات
              </span>
            </Link>
            <Link href="/">
              <span className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                تماس با ما
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
