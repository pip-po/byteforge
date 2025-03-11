import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const PhotoServide = () => {
  return (
    <section className="container mx-auto">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold mt-40 text-[#272727] dark:text-white">
              With Us, We Build the <br />
              <span className="text-4xl md:text-[5rem] mb-5 font-bold leading-none">
                Future of Your Business
              </span>
            </h2>
          </>
        }
      >
        <Image
          src={`/homepage.webp`}
          alt="hero"
          height={720}
          width={1400}
          priority
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
};

export default PhotoServide;
