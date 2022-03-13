import React from "react";
import { Card, Carousel, Button } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/ebook1.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/ebook1.jpg")}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../images/ebook1.jpg")}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex flex-column " style={{ marginTop: "3.5rem" }}>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: "12rem", marginRight: "12rem" }}
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="d-flex justify-content-between mt-4"
          style={{ marginLeft: "12rem", marginRight: "12rem" }}
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
        </div>
        <div
          className="d-flex justify-content-between mt-4"
          style={{ marginLeft: "12rem", marginRight: "12rem" }}
        >
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={require("../images/book_register.jpg")}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="secondary">View</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
