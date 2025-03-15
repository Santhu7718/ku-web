import React, { useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: white;
    overflow: hidden;
  }
`;

// Styled Components
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ bg }) => `url(${bg}) center/cover`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  color: #ffcc00;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const EventContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventCard = styled(Link)`
  text-decoration: none;
  padding: 20px;
  width: 220px;
  height: 150px;
  border-radius: 15px;
  background-color: ${({ color }) => color};
  box-shadow: 0px 8px 32px rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
  }
`;

// Event Data
const events = [
  { name: "Hackathons", color: "#28a745", description: "Showcase your coding skills!", bg: "https://res.cloudinary.com/dt4prsjxx/image/upload/v1741781464/Image_qgughv.jpg" },
  { name: "Fests", color: "#007bff", description: "Celebrate creativity and culture!", bg: "https://res.cloudinary.com/dt4prsjxx/image/upload/v1737703496/ku_ecbwcf.jpg" },
  { name: "Events", color: "#ff9800", description: "Engage in seminars and activities!", bg: "https://res.cloudinary.com/dt4prsjxx/image/upload/v1737703496/ku_ecbwcf.jpg" },
  { name: "Workshops", color: "#8a2be2", description: "Learn new skills from experts!", bg: "https://res.cloudinary.com/dt4prsjxx/image/upload/v1737703496/ku_ecbwcf.jpg" },
  { name: "More", color: "#dc3545", description: "Join clubs and activities!", bg: "https://res.cloudinary.com/dt4prsjxx/image/upload/v1737703496/ku_ecbwcf.jpg" },
];

function EventPage() {
  const { eventName } = useParams();
  const event = useMemo(() => events.find((e) => e.name.toLowerCase() === eventName), [eventName]);

  if (!event) return <Navigate to="/" />;

  return (
    <Container bg={event.bg}>
      <Header>
        <Logo>{event.name}</Logo>
        <Nav>
          <Link to="/">⬅ Back to Home</Link>
        </Nav>
      </Header>
      <h2 style={{ fontSize: "2rem", backdropFilter: "blur(6px)", padding: "10px 20px", borderRadius: "10px", background: "rgba(0,0,0,0.5)" }}>
        {event.description}
      </h2>
    </Container>
  );
}

function Dashboard() {
  return (
    <Container bg="https://res.cloudinary.com/dt4prsjxx/image/upload/v1737703496/ku_ecbwcf.jpg">
      <GlobalStyle />
      <Header>
        <Logo>KARUNYA UNIVERSITY</Logo>
        <Nav>
          {["About Us", "Completed Events", "Upcoming Events", "Log in"].map((item, index) => (
            <a key={index} href="#">{item}</a>
          ))}
        </Nav>
      </Header>
      <h2 style={{ fontSize: "2rem", marginTop: "20px" }}>Unlock Limitless Opportunities</h2>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Join a community to learn new skills, network with peers, and participate in engaging activities.</p>
      <EventContainer>
        {events.map((event, index) => (
          <EventCard key={index} to={`/event/${event.name.toLowerCase()}`} color={event.color}>
            {event.name}
          </EventCard>
        ))}
      </EventContainer>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/event/:eventName" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
