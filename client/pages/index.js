import React, { useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/slider/1.jpg';
import img3 from '../assets/slider/3.jpg';
import img4 from '../assets/slider/4.jpg';

const Index = () => {

    return (
            <MainLayout>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={img1.src}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="d-block w-100"
                        src={img3.src}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img4.src}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </MainLayout>
    )
}

// export async function getStaticProps() {
//     const res = await fetch('http://localhost:5000/pictures');
//     const pictures = await res.json();

//     return {
//         props: {pictures}
//     }
// }

export default Index