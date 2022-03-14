import {Navbar, Container, Nav, Link} from 'react-bootstrap'
import styles from './navbar.module.css'
import { Twitter, Facebook, Search, Youtube, Instagram } from 'react-bootstrap-icons';

export default function Navbarmain(){
    return (
        <div>
  <Navbar collapseOnSelect className={styles.navParent}>
    <Container className={styles.navbarContainer}>
    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
    <Nav className="me-auto">

      <Nav.Link href="#home" className={styles.link}>Home</Nav.Link>
      <Nav.Link href="#features" className={styles.link}>Office</Nav.Link>
      <Nav.Link href="#pricing" className={styles.link}>Bath</Nav.Link>
      <Nav.Link href="#pricing" className={styles.link}>Products</Nav.Link>
    </Nav>

    <Nav>
      <Nav.Link href="#deets" className={styles.rightlink}>  <Facebook /></Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className={styles.rightlink}>
      <Twitter />
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className={styles.rightlink}>
      <Youtube />
      </Nav.Link>
      <Nav.Link eventKey={2} href="#memes" className={styles.rightlink}>
      <Instagram />
      </Nav.Link>
      <Nav.Link href="#deets" className={styles.searchbar}>  <Search /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>

</div>
    )
}