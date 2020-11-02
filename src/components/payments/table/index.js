import React from 'react';

import Button from '../../ui/button';
import classes from './styles.module.scss';

const table = () => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Item Type</th>
          <th>Price</th>
          <th>Transaction No</th>
          <th colSpan="3">Time</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#27ae60' }}>
              <ion-icon name="ellipse"></ion-icon> Reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: 'gold' }}>
              <ion-icon name="ellipse"></ion-icon> Pending
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#27ae60' }}>
              <ion-icon name="ellipse"></ion-icon> Reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#27ae60' }}>
              <ion-icon name="ellipse"></ion-icon> Reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: 'gold' }}>
              <ion-icon name="ellipse"></ion-icon> Pending
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#ccc' }}>
              <ion-icon name="ellipse"></ion-icon> Un-reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#27ae60' }}>
              <ion-icon name="ellipse"></ion-icon> Reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: '#ccc' }}>
              <ion-icon name="ellipse"></ion-icon> Un-reconcilled
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>

        <tr>
          <td>
            <div className={classes.itemType}>
              <div className={classes.avatar}>VW</div>
              <span>Apple Mac Book 15" 250 SSD 12GB</span>
            </div>
          </td>
          <td>$73430</td>
          <td>1234567890</td>
          <td>12:30</td>
          <td>
            <Button style={{ color: 'gold' }}>
              <ion-icon name="ellipse"></ion-icon> Pending
            </Button>
          </td>
          <td>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;
