import React from 'react';
import ImageHeader from './components/ImageHeader';
import BriefDetail from './components/BriefDetail';
import OrderInstruction from './components/OrderInstruction';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ImageHeader />
        <BriefDetail />
        <OrderInstruction />
      </div>
    );
  }
}
