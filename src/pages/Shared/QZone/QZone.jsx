import React from 'react';
import qzom1 from '../../../assets/qZone1.png'
import qzom2 from '../../../assets/qZone2.png'
import qzom3 from '../../../assets/qZone3.png'
import { Image } from 'react-bootstrap';



const QZone = () => {
    return (
        <div className='text-center mt-4 bg-light'>
            <h4>Q-Zone</h4>
            <div>
                <Image src={qzom1} fluid/>
                <Image src={qzom2} fluid/>
                <Image src={qzom3} fluid/>
            </div>
        </div>
    );
};

export default QZone;