import Magnetic from "@/commons/Magnetic";
import styles from "./style.module.scss";
import InputMask from "react-input-mask";
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contact_row}>
            <div className={styles.contact_row_side}>
              <form>
                <div className={styles.input_field}>
                  <input type="text" required />
                  <label>First Name</label>
                </div>
                <div className={styles.input_field}>
                  <input type="text" required />
                  <label>Last Name</label>
                </div>
                <div className={styles.input_field}>
                  <InputMask
                    className={styles.mask_input}
                    mask="+\9\98 (99) 999 99 99"
                    placeholder="Your Phone"
                    maskChar=""
                    type="text"
                  />
                  <label>Your Phone</label>
                </div>
                <div className={styles.input_field}>
                  <textarea required />
                  <label className={styles.textarea_label}>Comments</label>
                </div>
                <div className={styles.contact__wrapper_text_socials}>
                  <Magnetic>
                    <button className={styles.contact_submit_button}>
                      <Magnetic>
                        <span>Get in Touch</span>
                      </Magnetic>
                    </button>
                  </Magnetic>
                  <center>
                    <Magnetic>
                      <button
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <AiFillInstagram />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaTelegram />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaYoutube />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                    <Magnetic>
                      <button
                        className={styles.contact__wrapper_text_socials_social}
                      >
                        <Magnetic>
                          <span>
                            <FaLinkedin />
                          </span>
                        </Magnetic>
                      </button>
                    </Magnetic>
                  </center>
                </div>
              </form>
            </div>
            <div className={styles.contact_row_side}>
              <div className={styles.contact_text}>
                <h1>Let`s talk for Something special</h1>
                <p>
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </p>
                <h1>abdulazizleader@gmail.com</h1>
                <h1>+998 90 234 32 32</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
