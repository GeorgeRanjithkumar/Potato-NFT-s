import "./Navbar1.css";
import {
  Card,
  Col,
  Row,
  Navbar,
  Container,
  CardGroup,
  Button,
  Nav,
} from "react-bootstrap";
import img4 from "./img4.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import imgpotato from "../components/Potato nft  (2)/evel.png";
import img31 from "../components/Potato nft  (2)/dottet circle.png";
import img10 from "../components/Potato nft  (2)/header circek background.png";
import img0 from "./0.png";
import img194 from "./194.png";
import img195 from "./195.png";
import img197 from "./197.png";
import img3 from "./img3.png";
import img193 from "./img193.png";
import img199 from "./199.png";
import img198 from "./198.png";
import img196 from "./196.png";
import img6 from "./img6.png";
import { string } from "prop-types";
const Navbar1 = () => {
  return (
    <div>
      <div>
        <Navbar className="navbar122" expand="lg" variant="dark" bg="dark">
          <Nav.Link className="navbar123" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="navbar123" href="#benefit">
            Benefit
          </Nav.Link>
          <Nav.Link className="navbar123" href="#collection">
            Collection
          </Nav.Link>
          <Nav.Link className="navbar123" href="#intro">
            Roadmap
          </Nav.Link>

          <Button id="button" variant="link" href="#connectwallet">
            Connect Wallet
          </Button>
        </Navbar>
      </div>

      <div className="App-header">
        <Container>
          <Row>
            <Col style={{ paddingTop: "5%", paddingBottom: "10%" }}>
              <Card.Img
                variant="top"
                style={{
                  position: "relative",
                  zIndex: "2",
                  marginTop: "0%",
                  marginLeft:"-15%",
                  fontSize: "225em",
                }}
                src={img10}
              />
              <Card
                style={{
                  marginTop: "-100%",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: " #0F0F23",
                  paddingTop: "2%",
                  border: "none",
                }}
              >
                <Card.Body className="card123">
                  <Card.Title className="cardtitle">Discover, find,</Card.Title>
                  <Card.Subtitle className="cardsubtitle">
                    Sell extraordinary
                  </Card.Subtitle>

                  <h1 className="cardtitle144">Potato NFTs</h1>
                  <Card.Text className="text-lg" style={{ opacity: "0.6" }}>
                    Marketplace for potato character collections non fungible
                    token NFTs
                  </Card.Text>
                  <Button
                    className="button155"
                    style={{ marginTop: "4%", marginLeft: "4%" }}
                  >
                    How it Works
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <div className="App-header1s">
                <div className="App-card1">
                  <Card
                    style={{
                      width: "30rem",
                      height: "20rem",
                      marginTop: "45%",
                      // display: "flex",
                      background:
                        "linear-gradient(90deg, #241D40 0%, #1C2946 100%)",
                      borderRadius: "35px",
                      borderColor: "#374153",
                    }}
                  >
                    <Card.Body style={{}}>
                      <Card.Title style={{ fontSize: "2.8rem" }}>
                        Devil
                      </Card.Title>
                      <Card.Title style={{ fontSize: "2.8rem" }}>
                        Potato
                      </Card.Title>
                    </Card.Body>
                    <Card.Img
                      className="potatohead1"
                      style={{
                        width: "24vw",
                        height: "24vw",
                        marginLeft: "9rem",
                      }}
                      variant="top"
                      src={imgpotato}
                    />
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-header1">
        <div className="App-card1">
          <div className="Nft12">
            <div id="about">
              <h3>About us</h3>
              <h1 style={{ color: "#68CEEE", paddingBottom: "1.4rem" }}>
                what is an NFT
              </h1>
              <Card
                className="card55"
                style={{
                  width: "20rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img3} />
                  <div className="Nft1">
                    <div>Potato1</div>
                    <div>#1234</div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="nft11">
              An NFT, which stands for non-fungible token, is a unique unit of
              data employing technology that allows digital content—from videos
              to songs to images—to become logged and authenticated on
              cryptocurrency blockchains, primarily Ethereum.The main impact of
              NFTs is making it easy to own and sell digital content.
            </div>
          </div>
          <div id="collection">
            <Card.Img
              variant="top"
              style={{ position: "absolute", zIndex: "2", marginTop: "-8rem" }}
              src={img31}
            />
            <Container style={{}}>
              <Card
                style={{
                  border: "none",
                  width: "100%",
                  textAlign: "center",
                  backgroundColor: "#0F0F23",
                }}
              >
                <Card.Body>
                  <Card.Title className="mb-2"> Collections</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Sell extraordinary</Card.Subtitle> */}
                  <h4
                    style={{
                      fontWeight: "700",
                      fontSize: "3rem",
                      position: "relative",
                      zIndex: "2",
                    }}
                  >
                    Are you curious to our
                  </h4>
                  <h1
                    style={{
                      fontWeight: "700",
                      fontSize: "560%",
                      color: "#67CDF1",
                    }}
                  >
                    {" "}
                    Potato NFTs
                  </h1>
                  <Card.Text className="text-lg" style={{ fontSize: "1.3rem" }}>
                    Marketplace for potato character collections non fungible
                    token NFTs
                  </Card.Text>
                  <Button
                    className="button155"
                    style={{ marginTop: "4%", marginLeft: "4%" }}
                  >
                    Check Our Collection
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
        <div className="App-header1">
          <Container>
            <Row>
              {/* <Col> */}
              <CardGroup
                style={{
                  marginBlock: "3% ",
                  paddingLeft: "4%",
                  paddingRight: "4%",
                }}
              >
                <Col>
                  <Card
                    className="card55"
                    style={{
                      width: "15rem",
                      // backgroundColor: "#232c64",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body style={{}}>
                      <Card.Img variant="top" src={img198} />
                      <div className="Nft1">
                        <div>
                          <h5>AngryPotato1</h5>
                          <h6>#1234</h6>
                        </div>
                        <div
                          style={{
                            paddingTop: "25px",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "#DFBD36",
                              borderRadius: "15px",
                              color: "white",
                              maxWidth: "100%",
                            }}
                          >
                            Common
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="card55"
                    style={{
                      width: "15rem",
                      // backgroundColor: "#232c64",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body style={{}}>
                      <Card.Img variant="top" src={img193} />
                      <div className="Nft1">
                        <div>
                          <h5>AngryPotato1</h5>
                          <h6>#1234</h6>
                        </div>
                        <div
                          style={{
                            paddingTop: "25px",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "#DFBD36",
                              borderRadius: "15px",
                              color: "white",
                              maxWidth: "100%",
                            }}
                          >
                            Common
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="card55"
                    style={{
                      width: "15rem",
                      // backgroundColor: "#232c64",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body style={{}}>
                      <Card.Img variant="top" src={img199} />
                      <div className="Nft1">
                        <div>
                          <h5>AngryPotato1</h5>
                          <h6>#1234</h6>
                        </div>
                        <div
                          style={{
                            paddingTop: "25px",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "#DF4037",
                              borderRadius: "15px",
                              color: "white",
                              maxWidth: "100%",
                            }}
                          >
                            Common
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    className="card55"
                    style={{
                      width: "15rem",
                      // backgroundColor: "#232c64",
                      borderRadius: "15px",
                    }}
                  >
                    <Card.Body style={{}}>
                      <Card.Img variant="top" src={img196} />
                      <div className="Nft1">
                        <div>
                          <h5>AngryPotato1</h5>
                          <h6>#1234</h6>
                        </div>
                        <div
                          style={{
                            paddingTop: "25px",
                          }}
                        >
                          <button
                            style={{
                              backgroundColor: "#3C47DF",
                              borderRadius: "15px",
                              color: "white",
                              maxWidth: "100%",
                            }}
                          >
                            Common
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </CardGroup>
              {/* </Col> */}
            </Row>
          </Container>
        </div>
      </div>
      <div id="intro" className="App-header">
        <Container>
          <Row>
            <Col style={{ textAlign: "left" }}>
              <Card
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: " #0F0F23",
                  border: "none",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      color: "#67CDF1",
                      fontWeight: "700",
                      fontSize: "3.7rem",
                    }}
                  >
                    Introduce
                  </h1>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "100%",
                  textAlign: "left",
                  backgroundColor: " #0F0F23",
                  border: "none",
                }}
              >
                <Card.Body>
                  <h1
                    style={{
                      color: "#67CDF1",
                      fontWeight: "700",
                      fontSize: "3.7rem",
                    }}
                  >
                    Ourselves
                  </h1>
                </Card.Body>
              </Card>
              <h6 style={{ color: "#84BDC4" }}>
                1000 total Eyes each awesome and unique. Although all Eyes are
                awesome some are more awesome than others. Each Eye is hand
                drawn and randomly generated from 143+ possible traits ranging
                from 7 categories: Background, Bottom lid, Eye color, Eyeball,
                Iris, Shine, Air and Top lid.
              </h6>
            </Col>
            <Col>
              <div className="App-header">
                <div className="App-card">
                  <>
                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>01 </span>
                          High-quality rendered and equally affordable artwork
                        </Card.Title>
                        <Card.Title></Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>02 </span>
                          Learning,researching, and studying the crypto market
                          daily
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>03 </span>
                          The immersive world of NFTs with all its collectors &
                          projects
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>

                    <Card
                      style={{
                        width: "100%",
                        backgroundColor: " #0F0F23",
                        border: "none",
                      }}
                    >
                      {/* <Card.Header></Card.Header> */}
                      <Card.Body>
                        <Card.Title style={{ fontSize: "2rem" }}>
                          <span style={{ fontSize: "4rem" }}>04 </span>
                          Slow,steady and natural community growth within the
                          Lazy Lounge Club
                        </Card.Title>
                      </Card.Body>
                      <hr></hr>
                    </Card>
                  </>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="benefit" className="App-header1">
        <div className="App-card1">
          <Card
            style={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "#0F0F23",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title>Benefits</Card.Title>
              <Card.Link href="#" style={{ textDecoration: "none" }}>
                <h1 style={{ color: "#67CDF1", textDecoration: "none" }}>
                  What make us different?
                </h1>
              </Card.Link>
            </Card.Body>
          </Card>
          <div className="App-header">
            <Container>
              <Row>
                <Col>
                  <Card
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                      // border:"wh"
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Explosive and rare tokens
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        With a hard limit at 10,00 and all copyrights held by
                        the buyer
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Community
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        Join our community to trade, play and display your pets
                        and arts
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      width: "25rem",
                      padding: "8%",
                      textAlign: "center",
                      backgroundColor: " #181832",
                    }}
                  >
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "1.5rem", opacity: "0.8" }}
                      >
                        Members only space
                      </Card.Title>
                      <Card.Text style={{ fontSize: "17px" }}>
                        Discussion board where you can have a say in the future
                        of nft
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <div className="App-header1" style={{ backgroundColor: "#0F0F23" }}>
        <h1 style={{ color: "#67CDF1", marginLeft: "15%" }}>Top NFT's</h1>
        <Container style={{ backgroundColor: "#0F0F23" }}>
          <Row>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img198}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img0}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img197}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img195}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img194}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img196}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img199}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                style={{ width: "8rem", borderRadius: "35px" }}
                variant="top"
                src={img193}
              />
              <div className="">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    paddingTop: "20%",
                  }}
                >
                  <h5>AngryPotato1</h5>
                  <h6>0.5 SOL</h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-header1">
        <h1 style={{ color: "#67CDF1", marginLeft: "15%" }}>Live Auction</h1>
        <Container>
          <Row>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato1</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creatorName
                      </h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        BSC
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}>4.89 ETH </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato1</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creatorName
                      </h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        BSC
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}>4.89 ETH </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato1</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creatorName
                      </h6>
                    </div>
                    <div>
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        BSC
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}>4.89 ETH </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card55"
                style={{
                  width: "17rem",
                  // backgroundColor: "#232c64",
                  borderRadius: "15px",
                }}
              >
                <Card.Body style={{}}>
                  <Card.Img variant="top" src={img199} />
                  <div className="Nft1">
                    <div>
                      <h5 style={{ color: "white" }}>AngryPotato1</h5>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creator
                      </h6>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        creatorName
                      </h6>
                    </div>
                    <div id="connectwallet">
                      <button
                        style={{
                          backgroundColor: "#5652FB",
                          borderRadius: "15px",
                          color: "white",
                          width: "100%",
                          marginRight: "40px",
                        }}
                      >
                        BSC
                      </button>
                      <h6 style={{ color: "white", opacity: "0.6" }}>
                        Current Bid
                      </h6>
                      <h5 style={{ color: "white" }}>4.89 ETH </h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Navbar1;
