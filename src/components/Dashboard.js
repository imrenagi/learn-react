import React from 'react';
import WebFrame from './WebFrame';

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './../static/css/index.css';

export default class Dashboard extends React.Component {
  render() {
    return (
          <div className="row">
            <WebFrame className="half" url="https://wiki.infosec.ebay.com:8443/pages/viewrecentblogposts.action?key=IRP" />
            <WebFrame className="half" url="https://slc-spksh-100.corp.ebay.com:8000/en-US/app/SplunkEnterpriseSecuritySuite/topalertoffenders" />
            <WebFrame className="half" url="https://m.google.com" />
            <WebFrame className="half" url="https://www.splunk.com" />
          </div>
    );
  }
}
