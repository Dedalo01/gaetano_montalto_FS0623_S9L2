import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import data from "../data/books.json";
console.log(data);

const allBooksArr = [
  ...data.fantasy.slice(0, 3),
  ...data.history.slice(0, 3),
  ...data.horror.slice(0, 3),
  ...data.romance.slice(0, 3),
  ...data.scifi.slice(0, 3),
];
console.log(allBooksArr);

const AllTheBooks = () => {
  return (
    <main>
      <Container>
        <Row>
          {allBooksArr.map((book) => {
            return (
              <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text className="btn btn-warning">
                      {book.category}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-end">{book.price}$</Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default AllTheBooks;
