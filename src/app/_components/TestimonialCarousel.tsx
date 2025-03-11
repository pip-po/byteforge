import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    name: "Jennie Kim",
    description:
      "The service provided was exceptional! The team was very professional and exceeded my expectations. Their attention to detail and dedication to customer satisfaction made the entire experience seamless. I highly recommend them.",
    role: "CEO at XCompany",
    src: "https://i.pinimg.com/736x/7f/1b/9b/7f1b9bffb5e95e565472c28235162628.jpg",
  },
  {
    name: "Lisa Manoban",
    description:
      "Working with this company was an absolute pleasure. They delivered high-quality work on time and were always responsive to our needs. Their ability to adapt to our specific requirements truly set them apart.",
    role: "CTO at YCompany",
    src: "https://i.pinimg.com/736x/3d/6d/e8/3d6de8ac9a02e0cb66e28c903c41cd51.jpg",
  },
  {
    name: "Jisoo Kim",
    description:
      "Their attention to detail and commitment to excellence is truly impressive. The team went above and beyond to ensure we were completely satisfied with the results. I am extremely happy with their work and will definitely collaborate again.",
    role: "Designer at ZCompany",
    src: "https://i.pinimg.com/736x/18/f6/50/18f650fd60b986dfd8d0b692b8ec5fbb.jpg",
  },
  {
    name: "Rose",
    description:
      "The team's dedication and precision are outstanding. They put in extra effort to deliver exceptional results, making sure we were fully satisfied. I couldn’t be happier with their work and will gladly work with them again.",
    role: "CMO at ACompany",
    src: "https://i.pinimg.com/736x/3a/f1/c2/3af1c2013a2a3e1aeaf9ff5f39bdb46f.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="container mx-auto px-16 md:px-28 py-5">
      <div className="px-10 pb-10">
        <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-[#272727] text-center tracking-tight font-bold  dark:text-white">
          What Clients Say About Us?
        </h2>
      </div>
      <Carousel className="rounded-md border border-black/20 shadow-lg">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center justify-center">
                <div className="py-4  px-4 md:px-28 text-center items-center space-y-3">
                  <h5 className="font-bold border-b text-2xl">
                    {testimonial.name}
                  </h5>
                  <div className="mx-10">
                    <p className="font-light">{testimonial.description}</p>
                  </div>
                  <p className="font-medium italic">{testimonial.role}</p>

                  <div className="w-24 h-24 rounded-full overflow-hidden flex justify-center items-center mx-auto">
                    <Image
                      src={testimonial.src}
                      alt={`${testimonial.name} picture`}
                      width={96} // 24*4 = 96px
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TestimonialCarousel;
