import {ListGroup} from 'react-bootstrap'
import styles from './socialBar.module.css'
import { FaTwitter, FaFacebookF  } from "react-icons/fa";


export default function Socialbar(){
    return (
        <div>
<ListGroup horizontal>
  {/* <ListGroup.Item  className={styles.listGroup + ' ' + styles.listGroupFirst}>  <a href="https://www.facebook.com" target="_blank"><img src="/images/social/facebook.png" className={styles.tile}></img></a></ListGroup.Item>
  <ListGroup.Item  className={styles.listGroup + ' ' + styles.listGroupTwitter}>  <a href="https://www.twitter.com" target="_blank"><img src="/images/social/twitter.png" className={styles.tile}></img></a></ListGroup.Item> */}
  <ListGroup.Item  className={styles.listGroup + ' ' + styles.listGroupFirst}>  <a href="https://www.facebook.com" target="_blank"><FaTwitter></FaTwitter></a></ListGroup.Item>
  <ListGroup.Item  className={styles.listGroup + ' ' + styles.listGroupTwitter}>  <a href="https://www.twitter.com" target="_blank"><FaFacebookF></FaFacebookF></a></ListGroup.Item>
</ListGroup>
</div>
    )
}