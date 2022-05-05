import { ListGroup } from 'react-bootstrap'
import styles from './socialSideBar.module.css'
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";


export default function SocialSideBar() {
    return (
        <div className={styles.wrapper}>
            <ListGroup >
                <ListGroup.Item className={styles.listGroup + ' ' + styles.listGroupFirst}>
                    <a href="https://www.facebook.com" target="_blank"><FaTwitter></FaTwitter></a>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listGroup + ' ' + styles.listGroupTwitter}>
                    <a href="https://www.twitter.com" target="_blank"><FaFacebookF></FaFacebookF></a>
                </ListGroup.Item>
                <ListGroup.Item className={styles.listGroup + ' ' + styles.listGroupTwitter}>
                    <a href="https://www.instagram.com" target="_blank"><FaInstagram></FaInstagram></a>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}