import React from 'react';
import { Button, Image, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';
import  './../static/css/colors.css';

import logo from './../static/img/eatever-logo.png';
import pesanMakananImg from './../static/img/discover-big.png'
import creditCardImg from './../static/img/credit-big.png'
import deliveryImg from './../static/img/shipping-big.png'

import OrderStep from './OrderStep';

export default class OrderInstruction extends React.Component {

  render() {
    return (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 order">
            <Image src={logo} className="img-responsive center-block logo small" />
          </div>
          <div className="order">
            <h2 className="section-title order dark-orange">CARA PESAN DI EATEVER</h2>
          </div>
          <div className="order">
            <OrderStep img={pesanMakananImg} title="Pesan Makanan" detail="Pesan makananmu maksimum 3 jam sebelum waktu yang kamu inginkan untuk dikirim."/>
            <OrderStep img={creditCardImg} title="Pembayaran" detail="Pembayaran dapat dilakukan dengan transfer atau COD (Cash On Delivery)."/>
            <OrderStep img={deliveryImg} title="Pesanan Dikirim!" detail="Pesanan akan langsung dikirim ke rumahmu dengan biaya ongkos kirim terjangkau."/>
          </div>
        </div>
    );
  }
}
