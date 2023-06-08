import React, { useState, useEffect } from "react";
import { Row, Container, CardGroup } from "react-bootstrap";
import AboutUsCard from "./AboutUsCard";

const AboutUsMemberList = () => {
  const arrayOfMembers = [
    {
      id: 1,
      name: "Mario Matos",
      team: "Manager",
      description:
        "I work with the Pacific Coastal Lowlands region as a Manager.",
      memberImage:
        "https://media.licdn.com/dms/image/C5603AQE4friug_I-UA/profile-displayphoto-shrink_200_200/0/1659726216692?e=1689811200&v=beta&t=l8gpKRrezXM_SWRVNZao3yu9A8IG5GVQ9L_N_NfTAN0",
    },
    {
      id: 2,
      name: "Jen Peter",
      team: "Human Resources",
      description:
        "I work with the Sierra Madre Oriental region as a HR Specialists.",
      memberImage:
        "https://i.insider.com/59d6611ec68d7b1d008b7f3e?width=600&format=jpeg&auto=webp",
    },
    {
      id: 3,
      name: "Brenda Terry",
      team: "Automation Engineer",
      description: "I work with the Highlands region as a Automation Engineer.",
      memberImage:
        "https://cdn.shopify.com/s/files/1/1817/8293/files/HEADSHOT-CALLISTOGOLD-GIRL_F_512x.jpg?v=1634156351",
    },
    {
      id: 4,
      name: "Mike Thompson",
      team: "Software Developer",
      description:
        "I work with the Gulf Coastal region as a Software developer.",
      memberImage:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80",
    },
  ];

  const [membersData, setMembersData] = useState({
    arrayOfMembers: [],
    membersComponents: [],
  });

  const mapMember = (item) => {
    return <AboutUsCard member={item} />;
  };

  useEffect(() => {
    setMembersData((prevState) => {
      const newStaff = { ...prevState };

      newStaff.arrayOfMembers = arrayOfMembers;

      newStaff.membersComponents = arrayOfMembers.map(mapMember);

      return newStaff;
    });
  }, []);

  return (
    <div className="py-8 py-lg-5 bg-white">
      <Container>
        <div className="bg-primary">
          <div className="container">
            <div className="align-items-center row">
              <div className="col-xl-10 col-10 col-md-12 col-sm-10">
                <div className="py-4 py-lg-6">
                  <h1 className="mb-1 text-white display-4">About Us</h1>
                  <p className="text-white mb-0 lead">Mision statement</p>
                  <p className="text-white mb-0">
                    We have provided the platform for players to showcase their
                    skills and compete in competitve games. The games take on
                    scheduled days as players participate. They will have
                    opportunity to schedule and part-take on the games as they
                    sign up. The players will also have access to viewing
                    reports of their games as they could compare their stats of
                    their previous scorings. The players also have ability to
                    play in the games of different locations, as we have
                    different games occuring in a range of locations. Below we
                    have staff members that are working hard to put together the
                    games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 row">
          <div className="col-md-12">
            <div className="nav-lb-tab nav" role="tablist">
              <p className="ms-0  nav-item lead">Staff Members</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mb-6 row">
            <Row>
              <CardGroup>{membersData.membersComponents}</CardGroup>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default AboutUsMemberList;
