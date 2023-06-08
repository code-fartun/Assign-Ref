import React, { useEffect, useState } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { AiFillPlayCircle } from "react-icons/ai";
import podcastService from "../../services/podcastService";
import toastr from "toastr";
import debug from "sabio-debug";
import "./podcast.css";

const _logger = debug.extend("Podcast");
const Podcast = () => {
  const [podcastData, setPodcastsData] = useState({
    podcastsArray: [
      {
        title: "",
        description: "",
        link: "",
        coverPhoto: "",
        date: "",
      },
    ],
    podcastsComponents: [],
  });
  const [selectedAudio, setSelectedAudio] = useState(null);

  useEffect(() => {
    podcastService.getPodcasts().then(onPodcastSuccess).catch(onPodcastError);
  }, []);

  function onPodcastSuccess(response) {
    _logger("onPodcastSuccess", response);
    setPodcastsData((prevState) => {
      const newList = { ...prevState };
      newList.podcastsArray = response.items;
      newList.podcastsComponents = response.items.map(mapPodcasts);
      return newList;
    });
    toastr.success("Audio Playing");
  }
  function onPodcastError(response) {
    _logger("onPodcastError", response);
    toastr.error("Audio Not Playing");
  }
  const mapPodcasts = (aPodcast) => {
    const onPlayClick = () => {
      setSelectedAudio(aPodcast);
    };

    return (
      <tr>
        <td>
          <AiFillPlayCircle
            cursor="pointer"
            showSkipControls
            onClick={onPlayClick}
          />
        </td>
        <td>{aPodcast.title}</td>
        <td>{aPodcast.description}</td>
        <td>{aPodcast.link}</td>
        <td>{aPodcast.date}</td>
      </tr>
    );
  };

  return (
    <div className="py-8 py-lg-5 bg-white">
      <Container>
        <Row>
          <Col md={2}>
            <Image
              src={selectedAudio && selectedAudio.coverPhoto}
              className="podcast-audio-image"
            />
          </Col>
          <Col md={10}>
            <AudioPlayer
              src={selectedAudio && selectedAudio.link}
              layout="stacked-reverse"
            />
            <Col md={2} className="mb text-black mb-0 lead">
              {selectedAudio && selectedAudio.title}
              <Col className="mb text-black mb-0 lead">
                {" "}
                {selectedAudio && selectedAudio.description}
              </Col>
            </Col>
          </Col>
        </Row>

        <Table bordered hover variant="dark">
          <thead>
            <tr>
              <th>Episodes</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{podcastData.podcastsComponents}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Podcast;
