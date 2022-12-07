import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Container, Row, Form, Col, Button, Spinner } from "react-bootstrap";
import Property from "../component/Property";
import { useGetSearchResultMutation } from "../services/appApi";
function Home() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [getResult, { isLoading }] = useGetSearchResultMutation();
  const [properties, setProperties] = useState({});
  function handleSearch(e) {
    e.preventDefault();
    getResult({
      location: location,
      availability: checkIn,
      rent: price,
      propertytype: propertyType,
    }).then((res) => {
      setProperties(res.data);
    });
  }
  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" role="status" />
        <br />
        <h2 className="py-2">Loading...</h2>
      </div>
    );
  }
  console.log(properties);

  return (
    <div>
      <Container style={{ padding: "10px" }}>
        <div style={{border:"1px solid grey",borderRadius:"10px",padding:"20px"}}>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col xs={3}>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    style={{ border: "0px" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={3}>
                <Form.Group>
                  <Form.Label>When</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setCheckIn(e.target.value);
                    }}
                    value={checkIn}
                    type="date"
                    style={{ border: "0px" }}
                    placeholder="Select Move-In Date"
                  />
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group>
                  <Form.Label>Rent</Form.Label>
                  <Form.Select
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    type="text"
                    style={{ border: "0px" }}
                  >
                    <option value="500-2500">$500-$2500</option>
                    <option value="2501-5000">$2501-$5000</option>
                    <option value="5001-7500">$5001-$7500</option>
                    <option value="7501-10000">$7501-$10000</option>
                    <option value="10001-12500">$10001-$12500</option>
                    <option value="12501-15000">$12501-$15000</option>
                    <option value="15001-20000">$15001-$20000 </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Form.Group>
                  <Form.Label>PropertyType</Form.Label>
                  <Form.Select
                    onChange={(e) => {
                      setPropertyType(e.target.value);
                    }}
                    value={propertyType}
                    type="text"
                    style={{ border: "0px" }}
                  >
                    <option value="house">House</option>
                    <option value="home">Home</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="villa">villa</option>
                    <option value="craftsman">craftsman</option>
                    <option value="apartments">Apartment</option>
                    <option value="cottage">Cottage</option>
                    <option value="farmhouse">Farmhouse</option>
                    <option value="townhomes">Townhomes</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={2} style={{ paddingTop: "15px" }}>
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <Grid container>
          {properties.length > 0 &&
            properties.map((property, idx) => (
              <Grid item sm={4}>
                <Property property={property} key={idx} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
