import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';


const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>

            </div>
            <div>
                <h4 className='mt-2 mb-2'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF className='text-primary' /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary' /> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger' /> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            
            <Card className="bg-dark text-white text-center mt-4">
                <Card.Img src={bg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='mt-4'>Create an Amazing Newspaper</Card.Title>
                    <Card.Text>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </Card.Text>
                    <Button variant="danger">Learn More</Button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default RightNav;