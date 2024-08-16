'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroupAnimate } from "@/util/swiperOption"
import Link from "next/link"

export default function RecentLauchedCar() {
    return (
        <>

            <section className="section-box box-recent-lauched-car background-2">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-9">
                            <h2 className="neutral-1000">Recent Launched Car</h2>
                            <p className="text-xl-medium neutral-500">The world's leading car brands</p>
                        </div>
                        <div className="col-md-3 position-relative mb-30">
                            <div className="box-button-slider box-button-slider-team justify-content-end">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-animate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-animate">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" >
                                        <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-slider box-swiper-padding">
                    <div className="box-swiper mt-30">
                        <div className="swiper-container swiper-group-animate swiper-group-journey">
                            <Swiper {...swiperGroupAnimate}>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car2.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car3.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car4.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">New South Wales,
                                                        Australia</p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car.png" alt="Travila" /></div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car2.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car3.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">Manchester, England
                                                    </p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-journey-small background-card">
                                        <div className="card-image"> <Link className="wish" href="#">
                                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.071 10.1422L11.4141 15.7991C10.6331 16.5801 9.36672 16.5801 8.58568 15.7991L2.92882 10.1422C0.9762 8.1896 0.9762 5.02378 2.92882 3.07116C4.88144 1.11853 8.04727 1.11853 9.99989 3.07116C11.9525 1.11853 15.1183 1.11853 17.071 3.07116C19.0236 5.02378 19.0236 8.1896 17.071 10.1422Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            </svg></Link><img src="/assets/imgs/page/homepage2/car4.png" alt="Travila" />
                                        </div>
                                        <div className="card-info">
                                            <div className="card-rating">
                                                <div className="card-left"> </div>
                                                <div className="card-right"> <span className="rating">4.96 <span className="text-sm-medium neutral-500">(672 reviews)</span></span>
                                                </div>
                                            </div>
                                            <div className="card-title"> <Link className="heading-6 neutral-1000" href="/rental-detail">Audi A3 1.6 TDI S line</Link></div>
                                            <div className="card-program">
                                                <div className="card-location">
                                                    <p className="text-location text-md-medium neutral-500">New South Wales,
                                                        Australia</p>
                                                </div>
                                                <div className="card-facitlities">
                                                    <p className="card-miles text-md-medium">25,100 miles</p>
                                                    <p className="card-gear text-md-medium">Automatic</p>
                                                    <p className="card-fuel text-md-medium">Diesel</p>
                                                    <p className="card-seat text-md-medium">7 seats</p>
                                                </div>
                                                <div className="endtime">
                                                    <div className="card-price">
                                                        <h6 className="heading-6 neutral-1000">$498.25</h6>
                                                        <p className="text-md-medium neutral-500">/ person</p>
                                                    </div>
                                                    <div className="card-button"> <Link className="btn btn-gray" href="/rental-detail">Book Now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="box-search-category">
                        <h4 className="heading-4 mb-16 neutral-1000">Search by category</h4>
                        <p className="text-xl-medium neutral-500">There has 30+ Brand Category Available</p>
                        <div className="box-list-brand-car">
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/jaguar.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/jaguar-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/honda.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/honda-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/chevrolet.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/chevrolet-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/acura.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/acura-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/bmw.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/bmw-w.png" alt="Travila" /></div>
                            <div className="item-brand"> <img className="light-mode" src="/assets/imgs/page/homepage2/toyota.png" alt="Travila" /><img className="dark-mode" src="/assets/imgs/page/homepage2/toyota-w.png" alt="Travila" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
