import { Navbar, Container, Nav, Link } from 'react-bootstrap'
import styles from './navbar.module.css'
import { Twitter, Facebook, Search, Youtube, Instagram } from 'react-bootstrap-icons';
import React, { useEffect, useRef, forwardRef, useState, useCallback } from 'react'
import { useScrollDirection } from 'react-use-scroll-direction'

export default function Navbarmain(props) {



  const ref = useRef();
  const bigRef = useRef();
  useEffect(() => {
    const navHeight = ref.current?.clientHeight;


    props.func(navHeight);

  }, []);

  const {
    isScrolling,
    isScrollingX,
    isScrollingY,
    isScrollingUp,
    isScrollingDown,
    isScrollingLeft,
    isScrollingRight,
    scrollDirection,
  } = useScrollDirection()

  const [isOpen, setOpen] = useState(0);

  // useEffect(() => {
  //   const navHeight = ref.current?.clientHeight;
  //   if (window.scrollY > navHeight) {

  //     if (isScrollingUp && setOpen(!isOpen)) {
  //       setOpen(isOpen);
  //       console.log('Open!');
  //     }
  //     else {
     
  //       console.log('Not Open');
  //     }

  //   }

  // });



  // const contentClassname = isModal
  // ? `${styles["nav-open"]} ${styles.ModalContainer}`
  // : styles.ModalContainer;

  // if (isScrollingUp && pageYOffset > 500){
  //   if (isOpen != setOpen){

  //  console.log('hey');
  //   }


  //   // console.log(scrollDirection) ;
  // }
  // if (isScrollingDown){
  //   if (setOpen != isOpen){
  //     setOpen(!isOpen);
  //     console.log('no');
  //   }
  //   else{
  //     console.log('on');
  //   }


  // }

  // const [scroll, setScroll] = useState(0)

  // useEffect(() => {
  //   const navHeight = ref.current?.clientHeight;
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY > navHeight
  //     if (scrollCheck !== scroll && isScrollingUp) {
  //       console.log(scrollCheck);
  //       setScroll(scrollCheck)
  //     }
  //   })
  // })


  return (
    <div ref={ref} className={isOpen ? styles.open : styles.close} >
      <Nav className={"justify-content-center" + " " + styles["customNav"]} >
        <Navbar className={styles["navParent"] + " " + styles["widthFull"]}>

          <Container className={styles.navbarContainer}>

            <Navbar.Brand href="#home">LOGO</Navbar.Brand>

          </Container>
        </Navbar>
        <Navbar className={styles.lowerNav}>
          <Nav className="me-auto">

            <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
            <Nav.Link href="#features" className={styles.link}>Office</Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>Bath</Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>Products</Nav.Link>
            <Nav.Link href="#pricing" className={styles.link}>Lookbook</Nav.Link>
          </Nav>
        </Navbar>
      </Nav>
    </div>
  )
}