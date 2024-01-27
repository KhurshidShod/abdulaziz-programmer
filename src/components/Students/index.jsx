import Magnetic from "@/commons/Magnetic";
import Image from "next/image";
import styles from "./style.module.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function Testimonials() {
  const addBlackCardClass = (index) => {
    return index % 2 !== 0 ? styles.blackCard : "";
  };

  const settings = {
    dots: true,
    navs: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      img: "/images/person/person1.svg",
      descr:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner. Calls across eight different countries to find the right owner. And now ....",
      name: "John Doe",
      profession: "Designer",
    },
    {
      id: 2,
      img: "/images/person/person2.svg",
      descr:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner. Calls across eight different countries to find the right owner. And now ....",
      name: "John Doe",
      profession: "Designer",
    },
    {
      id: 3,
      img: "/images/person/person1.svg",
      descr:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner. Calls across eight different countries to find the right owner. And now ....",
      name: "John Doe",
      profession: "Designer",
    },
    {
      id: 4,
      img: "/images/person/person2.svg",
      descr:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner. Calls across eight different countries to find the right owner. And now ....",
      name: "John Doe",
      profession: "Designer",
    },
  ];

  return (
    <>
      <section className={styles.testimonials}>
        <div className="container">
          <h1>
            My <span>Students</span>
          </h1>
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`${styles.testimonials_card} ${addBlackCardClass(
                    index
                  )}`}
                >
                  <div className={styles.testimonials_card_style}>
                    <div className={styles.testimonials_card_header}>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={70}
                        height={70}
                      />
                      <div>
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.profession}</p>
                      </div>
                    </div>
                    <div className={styles.testimonials_card_descr}>
                      {testimonial.descr}
                    </div>
                    <div className={styles.testimonials_card_rate}>
                      <b>5.0</b> <b>&#9733; &#9733; &#9733; &#9733; &#9733;</b>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
