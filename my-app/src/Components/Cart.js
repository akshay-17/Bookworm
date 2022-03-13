import React from "react";
import { Card, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <div className="d-flex align-items-center">
      <div>
        <h3 className="mb-4" style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          Books
        </h3>
        <div>
          <Card style={{ width: "65rem", marginLeft: "1rem" }}>
            <Card.Body>
              <div className="d-flex">
                <img
                  src={require("../images/book_register.jpg")}
                  height={"120rem"}
                  width={"100rem"}
                />
                <div
                  className="d-flex flex-column "
                  style={{ marginLeft: "1rem" }}
                >
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Button
                    variant="danger"
                    style={{
                      width: "10rem",
                      marginLeft: "45rem",
                      marginTop: "1rem",
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="d-flex flex-column " style={{ marginLeft: "1rem" }}>
        <h3>Subtotal (2 items): 398.00</h3>
        <Button variant="warning" className="mt-2 ml-2">
          Proceed to buy
        </Button>
        <Button variant="secondary" className="mt-2 ml-2">
          Proceed to rent
        </Button>
        <h6 className="mt-2 ml-2">Continue shopping on bookworm</h6>
      </div>
    </div>
  );
};

export default Cart;
