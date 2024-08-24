import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Layout from '../components/layout/layout';

export default function Gallery() {
  const nfts = [
    {
      title: "Shooting Stars",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/600x360",
    },
    {
      title: "The Catalyzer",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/601x361",
    },
    {
      title: "The 400 Blows",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/603x363",
    },
    {
      title: "Neptune",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/602x362",
    },
    {
      title: "Holden Caulfield",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/605x365",
    },
    {
      title: "Alper Kamu",
      subtitle: "THE SUBTITLE",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/606x366",
    },
    {
        title: "Holden Caulfield",
        subtitle: "THE SUBTITLE",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        imageUrl: "https://dummyimage.com/605x365",
      },
      {
        title: "Alper Kamu",
        subtitle: "THE SUBTITLE",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        imageUrl: "https://dummyimage.com/606x366",
      }
  ];

  return (
    <Layout>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">NFT Gallery</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore the unique collection of NFTs owned by various collectors.</p>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {nfts.map((nft, index) => (
            <SwiperSlide key={index}>
              <div className="p-4">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={nft.imageUrl}
                    layout="fill"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">{nft.subtitle}</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{nft.title}</h1>
                    <p className="leading-relaxed">{nft.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </Layout>
  );
}
