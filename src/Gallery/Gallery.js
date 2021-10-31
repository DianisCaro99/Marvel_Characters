import React, {useState, useEffect} from 'react';
import './gallery.css';
import  Card  from '../Card/Card';
import { Container, Row, Col } from "react-bootstrap";

function Gallery() {

  const [Gallery, setImages] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("marvel") === null) {
        setImages("Loading...")
      } else {
        var local = localStorage.getItem("marvel");
        setImages(JSON.parse(local));
      }
    } else {
        const URL = 'https://gateway.marvel.com:443/v1/public/characters?ts=1635290078374&apikey=14acc7edd73786b20cff5680d21f6ab7&hash=1493e519238c8fdaea6e26cfbc13f1d1';
        fetch(URL).then(res => res.json()).then(res => {
        const data = res.data.results.map((resp) => {
          return {
            id: resp.id,
            name: resp.name,
            description: resp.description,
            modified: resp.modified,
            url: resp.thumbnail.path + '/standard_xlarge.'+ resp.thumbnail.extension,
          }
        });
        setImages(data);
        localStorage.setItem("marvel", JSON.stringify(data));
      })
    }
  }, []);

  return (
    <Container fluid>
         <Row>
            {Gallery?.map((d) => {
            return (
              <Col xs={12} md={8}>
                    <Card
                    key={d.id}
                    name={d.name}
                    description={d.description}
                    modified={d.modified}
                    url={d.url}
                    ></Card>
              </Col>
            );
        })}
        </Row>
    </Container>
  );
}

export default Gallery;