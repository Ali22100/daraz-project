import React, { useEffect, useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import styles from "./Slider.module.css";


const Banner = () => {
  const sliderImages = [
    "https://img.lazcdn.com/us/domino/88de7053-046b-4962-a443-bed96c076a5d_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/88c2ddde-2f79-4093-8ead-c8ecc2110b9e_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/58a099ee-592a-4751-8131-daced0230f6a_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/8fa3e2b6-f617-4068-b639-9699756fa6db_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
     "https://img.lazcdn.com/us/domino/64a20429-107f-489f-a5cd-a8c0222e62ed_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/c996ecfa-930f-4682-a882-c73042d5b452_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/dbed5e0c-63a1-43cc-aaa4-a431b2eb445c_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/087a46fc-66a3-4ef3-8d39-d992084b1b8b_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
     "https://img.lazcdn.com/us/domino/0d5ea9a6-5e13-4d15-9e61-7c62dc7f3efc_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/4d4ce269-dffb-49f9-a1af-446577f13955_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/c53a1d3e-c517-4143-964d-f6399891e2c9_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/25b97d0a-5ce6-43bc-a63f-146cd7405bb2_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/6747aa00-975d-4420-b75b-0482f7318e9d_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/85d0facd-5abc-44bc-b429-a00b246a9fd6_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    "https://img.lazcdn.com/us/domino/a3f182f2-240f-4e66-80b0-5c9710b68a21_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
  ];

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.wrapper}>
        <Row className="g-3 flex-wrap flex-md-nowrap">
          <Col lg={9} xs={12} className={styles.sliderWrapper}>
            <Carousel fade className={styles.carousel}>
              {sliderImages.map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={styles.fullImage}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {isLargeScreen && (
            <Col lg={3} className={styles.sideBox}>
              <div className={styles.cardBox}>
                <img
                  src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg_.webp"
                  className={styles.logoImg}
                />
                <h5>TRY DARAZ APP</h5>
                <p className={styles.sub}>★ 4.8 Rated</p>
                <h6>Download the App now</h6>
                <div className={styles.featureTag}>Free Shipping</div>
                <div className={styles.featureTag}>Exclusive Vouchers</div>
                <img
                  src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01jHjmpl1pxcRVgFrYS_!!6000000005427-0-tps-150-150.jpg_360x360q80.jpg_.webp"
                  alt="QR Code"
                  className={styles.qrCode}
                />
                <div className={styles.stores}>
                  <button className={styles.storeBtn}>App Store</button>
                  <button className={styles.storeBtn}>Google Play</button>
                </div>
                <p className={styles.downloadNote}>Download the App Now!</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </section>
  );
};

export default Banner;
