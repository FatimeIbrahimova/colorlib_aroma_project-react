import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from "axios"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Home = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:8080/users")
        setData(res.data)
        console.log(res.data);
    }
    useEffect(() => {
        getData()
    }, [])
    console.log('hbuh', data[0]);

    const handleDelete = (id) => {
        console.log(id);
        console.log("delete")
        axios.delete(`http://localhost:8080/users/${id}`)
        getData()
    }
    return (
        <>
            <div className='hero-sec'>
                <div className='hero-sec_left'>
                    <div className='hero-sec_left_img'>
                        <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="img" />
                    </div>
                </div>
                <div className='hero-sec_right'>
                    <div className='hero-sec_right_desc'>
                        <h4>Shop is fun</h4>
                        <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button className='btn-browse'>Browse Now</button>
                    </div>
                </div>
            </div>
            <div className='second-sec'>
                <div className='img-wrapper'>
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png" alt='img' />
                    {/* </div> */}
                    {/* <div className='img-wrapper'> */}
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png" alt='img' />
                    {/* </div> */}
                    {/* <div className='img-wrapper'> */}
                    <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png" alt='img' />
                </div>
            </div>
            <div className='third-sec'>
                <div className='third-sec_wrapper'>
                    <div className='third-sec_desc'>
                        <h4>Popular item in the market</h4>
                        <h1>Trending Product</h1>
                    </div>
                    <div className='cards'>
                        {data && data.map((product) => (
                            <div className='first-card'>
                                <div className='first-card_img'>
                                    <img src={product.url} />
                                </div>
                                <div className='first-card_img_desc'>
                                    <h3>{product.category}</h3>
                                    <h2>{product.name}</h2>
                                    <span>{product.price}</span>
                                </div>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className='fourth-sec'>
                <div className='fourth-sec_desc'>
                    <h2>Up To 50% Off</h2>
                    <h3>Winter Scale</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button className='shop'>Shop Now</button>
                </div>
                <div className='fourth-sec_img'>
                    <img src="https://st4.depositphotos.com/15795830/28740/i/600/depositphotos_287400012-stock-photo-a-shopping-cart-with-boxes.jpg" />
                </div>
            </div>
            <div className='fifth-sec' style={{ marginBottom: 30 }}>
                <div className='fifth-sec_desc'>
                    <h4>Popular Item in the Market</h4>
                    <h1>Best Sellers</h1>
                </div>

                <div className='fifth-sec_cards' style={{ display: "flex" }}>

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide> <div className='firstt-card'>
                            <div className='first-card_img'>
                                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg" alt="img" />
                            </div>
                            <div className='first-card_img_desc'>
                                <h3>Accessories</h3>
                                <h2>Quartz Belt Watch</h2>
                                <span>$150.00</span>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='firstt-card'>
                            <div className='first-card_img'>
                                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg" alt="img" />
                            </div>
                            <div className='first-card_img_desc'>
                                <h3>Accessories</h3>
                                <h2>Quartz Belt Watch</h2>
                                <span>$150.00</span>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='firstt-card'>
                            <div className='first-card_img'>
                                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg" alt="img" />
                            </div>
                            <div className='first-card_img_desc'>
                                <h3>Accessories</h3>
                                <h2>Quartz Belt Watch</h2>
                                <span>$150.00</span>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide> <div className='firstt-card'>
                            <div className='first-card_img'>
                                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg" alt="img" />
                            </div>
                            <div className='first-card_img_desc'>
                                <h3>Accessories</h3>
                                <h2>Quartz Belt Watch</h2>
                                <span>$150.00</span>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Home
