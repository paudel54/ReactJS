import React from 'react'
import Product from '../product/Product'
import './home.scss'
export default function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/61QH1LQm4KL.jpg" alt="banner" />

                <div className="home__row">
                    <Product
                        id='1'
                        title='DJI Mini SE Fly More Combo Drone' price={512}
                        image="https://m.media-amazon.com/images/I/71JJgCAQKSL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id='2'
                        title='The AR Orgin Headset' price={43.2}
                        image="https://m.media-amazon.com/images/I/71VR6c3j2bL._SL1500_.jpg"
                        rating={4}
                    />
                    {/* product */}
                    {/* product */}
                </div>
                <div className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                    <Product
                        id='3'
                        title='Multicolor Om Sun Hemp Cotton Backpack For Unisex' price={12}
                        image="https://www.himalayanmartonline.com/wp-content/uploads/2018/03/hemp-bags-10.jpg"
                        rating={4}
                    />
                    <Product
                        id='4'
                        title='Smart Watch 2023 | Fitness Tracker' price={220}
                        image="https://m.media-amazon.com/images/I/61TzjMeU3mS._AC_UF894,1000_QL80_.jpg"
                        rating={4}
                    />
                    <Product
                        id='5'
                        title='White Cotton Round Neck Half Sleeve' price={39}
                        image="http://thulo.com/images/detailed/209/1_vfim-cs.jpg"
                        rating={3}
                    />

                </div>
                <div className="home__row">
                    {/* product */}

                    <Product
                        id='6'
                        title='SAMSUNG 49" Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black'
                        price={360}
                        image="https://m.media-amazon.com/images/I/81gf+wgrcfS.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

