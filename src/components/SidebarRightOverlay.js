import React from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

import './../static/css/sidebar.css';

class SidebarRightOverlay extends React.Component {
  state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
      const { visible } = this.state
      return (
        <div className="row">
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' width='very wide' visible={true} icon='labeled' vertical inverted>
              <Menu.Item name='home'>



                <Button >XXXX</Button>
                <Button >XXXX</Button>
                <Button >XXXX</Button>
                <Button >XXXX</Button>
                <Button >XXXX</Button>
                <Button >XXXX</Button>
                <Button >XXXX</Button>
              </Menu.Item>

              <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
              </Menu.Item>
              <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='/assets/images/wireframe/paragraph.png' />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      )
    }
};

export default SidebarRightOverlay;
