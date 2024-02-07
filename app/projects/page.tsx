import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
const Projects = () => {
  const projectsData = [
    {
      image: "/images/project.png",
      title: " book-name-entery",
      description:
        "i have build name-entery- website using react nodejs express mongodb I'm a React developer navigating seamlessly between the front-end and back-end realms, crafting robust and user-friendly digital experiences. With a passion for clean code and problem-solving, I bring creativity to design and efficiency to functionality.",
      techList: "MongoDB, React Js, Tailwindcss, javascript ",
      liveLink: "/",
      githubLink: "/",
    },
    {
      image: "/images/store.png",
      title: "shoping store",
      description:
        "i have make shoping store using ant design and reactjs for buying products like a shoes ,cloths itemes",
      techList:
        "React Js, code editor, fake api, ant design click below live preview link and visit on website",
      liveLink: "https://ant-ecommerce-snowy.vercel.app/",
      githubLink: "/",
    },
    {
      image: "/images/quiz.png",
      title: "make quize app",
      description:
        "i have makee quize app Use React state to manage the quiz questions, selected answers, and results.Ensure our app looks good on various devices by leveraging Bootstrap's responsive utilities.",
      techList: "Using only reactJs and boostrap",
      liveLink: "https://quizapp-pearl.vercel.app/",
      githubLink: "https://github.com/",
    },
    {
      image: "/images/text.png",
      title: "text editor",
      description:
        "In my initial phases I practiced the code and created a text editor app are available on my github account and you can also use it. it functions just like online text editor google, I was appointed as a test developer for this and I developed its home page for testing, Here are some of its records.",
      techList: "Reactjs and bootstrap",
      liveLink: "https://text-editor-sigma-ashen.vercel.app/",
      githubLink: "https://github.com/",
    },
    {
      image: "/images/porfolio.png",
      title: "",
      description:
        " Hey there! I'm Arslan, a passionate web developer on a mission to turn ideas into interactive and user-friendly experiences. With a blend of creativity and technical prowess, I thrive in the world of web development, constantly seeking new challenges to conquer. below link my porfolio click and visit",
      techList: "creact using nextjs",
      liveLink: "https://porfolio-weld.vercel.app/",
      githubLink: "https://github.com/",
    },
  ];
  return (
    <Container className=" flex flex-col justify-start items-center text-[#CCCCCC] ">
      <div className=" flex flex-col gap-y-4  md:gap-y-6 pb-8  md:pb-10 text-center mt-12">
        <h1 className=" text-[#CCCCCC] text-4xl leading-normal  md:text-5xl font-bold md:leading-7 ">
          {" "}
          My Project
        </h1>
        <p className=" text-xl"> I&apos;ve built my own website</p>
      </div>
      <div className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-between lg:gap-x-8 md:gap-x-6 gap-y-8 md:gap-y-16">
        {projectsData.map((item, index) => (
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            techList={item.techList}
            liveLink={item.liveLink}
            githubLink={item.githubLink}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
