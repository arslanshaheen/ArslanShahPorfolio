import React from "react";
import GalleryCard from "@/components/GalleryCard";
import Container from "@/components/Container";
const Gallery = () => {
  const GalleryData = [
    {
      image: "/images/img5.jpg",
      discription:
        "One of my golden times was when I joined the 'Step Program' it was a week-stay program by STEP. The pic is one of the acts I did there, They gave me the task of becoming Dr Muhammad Allama Iqbal and doing street acts in front of many people. It was a great learning and self-building program.",
      location: "Al-Azhar Garden, Karachi PK",
      date: "23rd Sept 2016",
    },
    {
      image: "/images/DSC_0416.JPG",
      discription:
        "Blood donation. I created a group of students from Gilgit Baltistan. Around 250 young students joined me to serve. Our primary goal was to give blood donations to the sick and poor people who came to Karachi for their treatments. This group still exists and working very well.",
      location: "Aga Khan University Hospital, Karachi",
      date: "28 Feb 2018",
    },
    {
      image: "/images/footballPro.png",
      discription:
        "First, football is one of my favorite games. I have grown up playing multiple outdoor games like table tennis, badminton, and cricket, but football is beyond all those. I was in the team of Aga Khan Gym Khan football club Garden Karachi and played matches at the regional level as well.",
      location: "Hill park, Karachi",
      date: "4th Sept 2017",
    },
    {
      image: "/images/img13.jpg",
      discription:
        "This image was taken back in 2023, I go to picnic from Aga khan hospital at thats movement take this picture at that time was working in IT Office AKU . It was a working one year in IT as computer support engineerstay  taught us about the environment and leadership learning was provided to a great extent.",
      location: "Beach Luxary Hotel, Karachi",
      date: "14th Aug 2014",
    },
    {
      image: "/images/img12.jpg",
      discription:
        "I belong to  mountains and grew up here climbing  at an early age. After hiking for a couple of days, we arrive here for hunting and to feed our cattle. I always loved to come here to hike and explore the beauty of nature. It keeps us physically fit and for good mental health.",
      location: "Himalayan Mountains karakorum, Hunza",
      date: "25th Aug 2018",
    },
    {
      image: "/images/a.jpg",
      discription:
        " an intermediate practitioner in the thrilling world of mixed martial arts. With a passion for diverse fighting styles and a commitment to continuous improvement, [Name] has progressed beyond the beginner stage and now stands as a formidable force in the MMA arena.",
      location: "Iqra University, Karachi",
      date: "7th Dec 2018",
    },
  ];
  return (
    <Container>
      {GalleryData.map((item, index) => (
        <GalleryCard
          image={item.image}
          discription={item.discription}
          location={item.location}
          date={item.date}
          key={index}
        />
      ))}
    </Container>
  );
};

export default Gallery;
