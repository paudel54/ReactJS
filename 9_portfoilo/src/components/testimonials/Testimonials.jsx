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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident numquam fugit dolorum eius non quisquam, nostrum harum ea. Error, ipsum tenetur nostrum optio incidunt pariatur modi ea nobis quasi itaque.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    name: "Isabella Garcia",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident numquam fugit dolorum eius non quisquam, nostrum harum ea. Error, ipsum tenetur nostrum optio incidunt pariatur modi ea nobis quasi itaque.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
    name: "Ethan Wilson",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Provident numquam fugit dolorum eius non quisquam, nostrum harum ea. Error, ipsum tenetur nostrum optio incidunt pariatur modi ea nobis quasi itaque.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit",
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
