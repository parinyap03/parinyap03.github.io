import React from "react";
import ParallaxText from "./TxtParallax";
import "./contactStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      <ParallaxText text="Contact"></ParallaxText>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 38 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0, 0, 0, 1],
        }}
      >
        <div className="background">
          <div className="container">
            <div className="screen mt-[-50px]">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>ME</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : +66 80-612-2711
                    <div className="flex">
                      <ul className="social-media-list flex">
                        <li className="p-2">
                          <a
                            href="https://web.facebook.com/profile.php?id=100012171364958"
                            target="_blank"
                            className="text-2xl"
                          >
                            <FontAwesomeIcon icon={faSquareFacebook} />
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="https://github.com/parinyap03"
                            target="_blank"
                            className="text-2xl"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="screen-body-item">
                  <form
                    className="app-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="access_key"
                      value="11b549b9-2e45-4ede-97d6-9e8965b5448d"
                    />
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        value="Parinyaporn Saengnolad"
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="EMAIL"
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="app-form-group message">
                      <input
                        className="app-form-control"
                        placeholder="MESSAGE"
                        name="message"
                      />
                    </div>
                    <div className="app-form-group buttons ">
                      <button className="app-form-button p-4" type="submit">
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
