import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Top Section */}
    <div className="w-full flex flex-col items-center mb-8">
      {/* Logo and Description */}
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src={logo}
          alt="hoobank"
          className="w-[200px] h-auto object-contain mb-4"
        />
        <p className={`${styles.paragraph} max-w-[312px]`}>
          A growing community of women pioneering AI careers.
        </p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
      {/* Copyright */}
      <p className="font-poppins font-normal text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[27px] text-white">
        Copyright Ⓒ 2025. AI Women Rising. All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row mt-6 md:mt-0 space-x-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
