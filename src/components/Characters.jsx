import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col, Image } from 'react-bootstrap'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <Container>
      <Row>
        {characters.map((character) => (
          <Col xs={3}>
            <Card className='mb-3'>
              <Card.Body>
                <Card.Title>
                  <Image src={character.image} thumbnail />
                </Card.Title>
                <Card.Text>
                  <h2>{character.name}</h2>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Characters
