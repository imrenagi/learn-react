import React from 'react';
import ImageHeader from './components/ImageHeader';
import BriefDetail from './components/BriefDetail';
import OrderInstruction from './components/OrderInstruction';

import SidebarRightOverlay from './components/SidebarRightOverlay';

import Chart from './components/Chart';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Chart />
        {/* <ImageHeader />
        <BriefDetail />
        <OrderInstruction /> */}
      </div>
    );
  }
}
