import  { useEffect, useState } from "react";
import "./SocialStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
const Social = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      
      <aside
        className={`_social-links  ${
          scrolled
            ? "transition-social border-y-2 border-r-2 border-red-500 "
            : "bg-[#2A5C68]"
        }`}
      >
        <ul className="_links-list">
          <li className="_social-link">
            <a
              href="https://web.facebook.com/profile.php?id=100012171364958"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faSquareFacebook}
                className={`${scrolled ? "   text-red-500" : "text-white "} `}
              />
            </a>
          </li>
          <li className="_social-link">
            <a href="https://github.com/parinyap03" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className={`${scrolled ? "   text-red-500" : "text-white "} `}
              />
            </a>
          </li>
          <li className="_social-link">
            <a href="mailto:parinyaporn.sa@kkumail.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`${scrolled ? "   text-red-500" : "text-white "} `}
              />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Social;

