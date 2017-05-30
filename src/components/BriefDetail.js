import React from 'react';
import { Button, Image, Header } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';

import logo from './../static/img/eatever-head.png';

export default class BriefDetail extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Image src={logo} className="img-responsive center-block logo medium" />
          </div>
          <p>Marketplace berbasis teknologi kuliner di Indonesia untuk menghubungkan para homechef andalan kami dengan para pecinta kuliner. Sekarang siapapun bisa menikmati santapan lezat berbeda dari homechef andalan kami!</p>
        </div>
    );
  }
}
