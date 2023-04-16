import "./testimonials.scss";

// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: "https://randomuser.me/api/portraits/men/79.jpg",
    name: "Daniel Jones",
    review:
      "Working with Sansrit was an absolute pleasure. Their creativity, attention to detail, and technical expertise helped us to create a website that truly reflects our brand and engages our customers.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    name: "Isabella Garcia",
    review:
      "I highly recommend Sansrit to anyone looking for a talented and reliable web designer. They were professional, responsive, and delivered our website on time and on budget. Our website has helped us to attract new customers and grow our business.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Ethan Wilson",
    review:
      "I was really impressed with Sansrit's ability to get the job done on time. I had a tight deadline for my project, and they were able to deliver the work ahead of schedule. Not only did they meet the deadline, but they also produced high-quality work that exceeded my expectations.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="mark" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
