import React from 'react';
import styles from './styles.scoped.css';
import DocumentBackground from './../../utils/DocumentBackground';
import { IMAGES } from '../../configs';

export default function Profile() {
  DocumentBackground(`url(${IMAGES.BG_PROFILE})`);
  return (
    <div className={styles['profile-content']}>
      <h2>About Chapter <br/> Developer</h2>
      <p>Why should you join Telkom Indonesia's Chapter Developer? <br/>
        Because here is the right place to develop the potential that <br/>
        you already have, as long as you have high determination and <br/>
        the willingness to continue learning. A lot of work? Lazy? Dizzy? <br/>
        Just calm down here you get a comfortable work environment <br/>
        and place that can support your productivity. Soft skill and hard <br/>
        skill development are also accompanied by experienced <br/>
        friends, so don't worry about that.
      </p>
      <div>
        <div>
          <img alt="" src={IMAGES.FRIENDS} />
        </div>
      </div>
    </div>
  );
}
