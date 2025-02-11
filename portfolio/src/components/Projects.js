import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chat App",
      description: "A real-time chat application that enables users to communicate seamlessly through instant messaging. The app supports both private and group chats, ensuring secure and efficient communication.",
      githubUrl: "https://github.com/malidu04/ChatApp",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built using the MERN stack. This platform allows users to browse products, add them to their cart, and securely purchase items through an integrated payment gateway",
      githubUrl: "https://github.com/malidu04/Ecommerce_Mern",
    },
    {
      title: "Portfolio Website",
      description: " A personal portfolio website designed to showcase skills, projects, and experience in a visually appealing manner. The site is optimized for performance and search engines.",
      githubUrl: "https://github.com/malidu04/Portfolio",
    },
    {
      title: "Hotel Management System",
      description: "A web application for hotel management, including room booking, customer management, and an admin dashboard for overseeing operations.",
      githubUrl: "https://github.com/yourusername/hotel-management-system",
    },
    {
      title: "Car Service Management",
      description: "A service management system designed for vehicle maintenance and repair services. Customers can schedule services, track their vehicle status, and receive notifications.",
      githubUrl: "https://github.com/yourusername/car-service-management",
    },
    {
      title: "AI Personality Prediction",
      description: "An AI-powered system that predicts personality traits based on user responses. Utilizes artificial neural networks (ANN) and recurrent neural networks (RNN) to analyze data.",
      githubUrl: "https://github.com/yourusername/ai-personality-prediction",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Bringing ideas to life through dynamic projects—crafting scalable web applications, 
                    intelligent AI solutions, and seamless user experiences with innovation at the core.
                  </p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
