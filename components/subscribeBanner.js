import styles from './subscribeBanner.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css'


export default function SubscribeBanner( ) {

  return (
<div className={styles.wrapper}>

    <Row>
        <Col xs={3} className={styles.left} ></Col>
        <Col xs={6} className={styles.middle}>
            <div className={styles.middleOverlay}></div>
           <div className={styles.middleDiv}>
               <h2>ENTER THE WORLD OF LEVELUP</h2>
               <h3>Read. Watch. Shop. Learn.</h3>
               <div className={styles.field}>

                <div className={styles.subscribeWrap}>
                <div className={styles.input}>
                  <input id="field_email" name="email" type="email" required placeholder></input>
                </div>
                <div className={utilStyles.subscribeButton}>
                  <Button variant="primary" type="submit">SUBSCRIBE</Button>

                </div>
                </div>
                </div>
           </div>

        </Col>
        <Col xs={3} className={styles.right}></Col>
    </Row>


</div>


  )
}