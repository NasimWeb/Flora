import React from "react";
import "./Testimonial.css";
import { Image, Shimmer } from "react-shimmer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function Testimonial() {
  return (
    <div className="Testimonial d-flex mx-auto col-sm-12">
      <div className="container p-3">
        <Swiper
          centeredSlides={true}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper"
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <Image
                  src="./Images/testimonial.png"
                  className="testimonial-img img-fluid"
                  fallback={<Shimmer width={200} />}
                />
              </div>
              <div
                className=" d-flex flex-column position-relative col-sm-9"
                style={{ maeginLeft: "auto", maxWidth: "100%" }}
              >
                <p className="feedback mb-3" style={{ maxWidth: "100%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet tempus felis vitae sit est quisque. It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>

                <div className="rate d-flex mb-3  ">
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                </div>
                <div
                  className="d-flex justify-content-between align-items-center userFeedback"
                  style={{ maxWidth: "100%" }}
                >
                  <div>
                    <p className="fullname">Kety Willions</p>
                    <span className="location">California, United State</span>
                  </div>
                  <div className="d-flex justify-content-start gap-2 ">
                    <Image src="./Images/1.png" fallback={<Shimmer />} />
                    <Image src="./Images/2.png" fallback={<Shimmer />} />
                    <Image src="./Images/3.png" fallback={<Shimmer />} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="d-flex justify-content-between flex-wrap">
              <div>
                <Image
                  src="./Images/testimonial.png"
                  className="testimonial-img img-fluid"
                  fallback={<Shimmer width={200} />}
                />
              </div>
              <div
                className=" d-flex flex-column position-relative col-sm-9"
                style={{ maeginLeft: "auto", maxWidth: "100%" }}
              >
                <p className="feedback mb-3" style={{ maxWidth: "100%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Imperdiet tempus felis vitae sit est quisque. It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout.
                </p>

                <div className="rate d-flex mb-3  ">
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                  <Image src="./Images/star.png" fallback={<Shimmer />} />
                </div>
                <div
                  className="d-flex justify-content-between align-items-center userFeedback"
                  style={{ maxWidth: "100%" }}
                >
                  <div>
                    <p className="fullname">Kety Willions</p>
                    <span className="location">California, United State</span>
                  </div>
                  <div className="d-flex justify-content-start gap-2 ">
                    <Image src="./Images/1.png" fallback={<Shimmer />} />
                    <Image src="./Images/2.png" fallback={<Shimmer />} />
                    <Image src="./Images/3.png" fallback={<Shimmer />} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>
      </div>
    </div>
  );
}
