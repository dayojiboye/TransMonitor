import React from 'react';

import {
  Overview,
  AllPayments,
  ReconciledPayments,
  UnReconciledPayments,
  ManualSettlements,
  AllOrders,
  PendingOrders,
  ReconciledOrders,
  MerchantProfile,
} from '../../../assets/svg';

const items = [
  {
    heading: 'Main',
    subItems: [
      {
        icon: <Overview />,
        text: 'Overview',
      },
    ],
    active: true,
  },
  {
    heading: 'Payments',
    subItems: [
      {
        icon: <AllPayments />,
        text: 'All Payments',
      },
      {
        icon: <ReconciledPayments />,
        text: 'Reconciled Payments',
      },
      {
        icon: <UnReconciledPayments />,
        text: 'Un - Reconciled Payments',
      },
      {
        icon: <ManualSettlements />,
        text: 'Manual Settlement',
      },
    ],
    active: false,
  },
  {
    heading: 'Orders',
    subItems: [
      {
        icon: <AllOrders />,
        text: 'All Orders',
      },
      {
        icon: <PendingOrders />,
        text: 'Pending Orders',
      },
      {
        icon: <ReconciledOrders />,
        text: 'Reconciled Orders',
      },
    ],
    active: false,
  },
  {
    heading: '',
    subItems: [
      {
        icon: <MerchantProfile />,
        text: 'Merchant Profile',
      },
    ],
    active: false,
  },
];

export default items;
