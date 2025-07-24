import React from "react";
import {
  FaGithub,
  // FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const links = [
  {
    href: "https://github.com/mehedi-hasan1102",
    icon: <FaGithub size={18} />,
    label: "GitHub",
  },
  // {
  //   href: "https://facebook.com/mehedi.hasan1102",
  //   icon: <FaFacebookF size={18} />,
  //   label: "Facebook",
  // },

  {
    href: "https://linkedin.com/in/mehedi-hasan1102",
    icon: <FaLinkedinIn size={18} />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/mehedihasan1102",
    icon: <FaTwitter size={18} />,
    label: "Twitter",
  },
  {
  href: "https://wa.me/8801747874773", // ✅ WhatsApp link
  icon: <FaWhatsapp size={18} />,
  label: "WhatsApp",
}

];

const SocialSidebar = () => {
  return (
    <div className="left-1/6 flex bottom-0 md:flex md:flex-col items-center gap-5 fixed md:left-6 md:top-1/3 z-40">
      {links.map(({ href, icon, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-base-content hover:text-primary transition-colors duration-200 "
        >
          {icon}
        </a>
      ))}

      <div className="w-px rotate-90 md:rotate-0 mx-6 md:mx-0 h-16 bg-base-content opacity-50 mt-2"></div>

      <span className="text-xs text-base-content md:tracking-wider md:rotate-90 mt-2 font-medium">
        Follow Me
      </span>
    </div>
  );
};

export default SocialSidebar;
