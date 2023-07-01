import React from "react";
import { Container } from "react-bootstrap";
import "./footercss.css";
import { Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from 'react-bootstrap/Button';
function Footer() {
  return (
    <Container className="container-fluid" fluid>
      <Container>
        <div>
          <footer
            className="text-center text-lg-start"
          >
            <div className="container d-flex justify-content-center py-5">
            <Button _blank href="https://www.facebook.com/swagdarealest"
            variant="primary">
                <Image width={30} height={30} src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" thumbnail ></Image>
            </Button>
            <Button variant="secondary">
                <Image width={30} height={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" ></Image>
            </Button>
            <Button variant="success">
                <Image width={30} height={30} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></Image>
            </Button>{' '}{' '}
            </div>
            <div
              class="text-center text-white p-3"
             
            >
              © 2023 Copyright:   
              <span class="text-white">
                    MinhSang
              </span>
            </div>
          </footer>
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
