import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import useWindowSize from './useWindowSize';

import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Large = () => {

    const [formData, setFormData] = useState({
        email: '',
    })
    const { email } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
       try{
        const response = await axios.post("http://localhost:8080/api/admin/subscribe/subscribe", formData)
        if (response.data.success) {
            toast.success(response.data.message);
        }
    }
        catch(error) {
            console.error('Error uploading product:', error);
          }
    }

    return (
        <div>
            <div className='container-fluid' style={{ marginTop: '35px', backgroundColor: '#f0f0f0' }}>


                <div className='container-fluid'>
                    <div className='row'>
                        <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                            <div className='col-auto fs-2 py-1'><FaTruck /></div>
                            <div className='col content d-flex flex-column py-2'>
                                <b>Free Shipping</b>
                                <p>Free Shipping for order above PKR3000</p>
                            </div>
                        </div>

                        <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                            <div className='col-auto fs-2 py-1'><BsHeadset /></div>
                            <div className='col content d-flex flex-column py-2'>
                                <b>Customer Support</b>
                                <p>Monday - Saturday | 9:00AM TO 12:00PM</p>
                            </div>
                        </div>

                        <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                            <div className='col-auto fs-2 py-1'><FaRegArrowAltCircleLeft /></div>
                            <div className='col content d-flex flex-column py-2'>
                                <b>10 DAYS Return & Exchange</b>
                                <p>Simple return within 10 days for an Exchange</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb_50'>
                            <div className='b1' style={{ marginTop: '40px' }}>
                                <h5>Get in Touch</h5>
                                <div className='contact-links' style={{ marginTop: '25px' }}>
                                    <div className='call'>
                                        <span style={{ fontSize: '18px' }}><BsTelephone /></span>
                                        <a href="mailto:+92%2042%20111178956"
                                            style={{ textDecoration: 'none', color: 'black' }}>+92 11 11111111</a>
                                    </div>
                                    <div className='email'>
                                        <span style={{ fontSize: '20px' }}><MdOutlineMailOutline /></span>
                                        <a href="mailto:support@stylo.pk"
                                            style={{ textDecoration: 'none', color: 'black', marginLeft: '10px' }}>support@stylo.pk</a>
                                    </div>
                                    <div className='social' style={{ marginTop: '5px' }}>
                                        <a href="https://www.facebook.com/StyloShoes/"><span style={{ fontSize: '20px' }}><FaFacebook /></span></a>
                                        &nbsp;
                                        <a href="https://x.com/StyloShoesPK"><span style={{ fontSize: '20px' }}><FaXTwitter /></span></a>
                                        &nbsp;
                                        <a href="https://www.instagram.com/stylopk/"><span style={{ fontSize: '20px' }}><FaInstagram /></span></a>
                                        &nbsp;
                                        <a href="https://www.linkedin.com/company/stylo-pvt-ltd"><span style={{ fontSize: '20px' }}><FaLinkedin /></span></a>
                                        &nbsp;
                                        <a href="https://www.pinterest.com/stylopk01/"><span style={{ fontSize: '20px' }}><FaPinterestP /></span></a>
                                        &nbsp;
                                        <a href="https://www.youtube.com/channel/UCFvLQNgT9Gy4GKmLkhSMG-Q"><span style={{ fontSize: '20px' }}><SiYoutubekids /></span></a>
                                    </div>
                                    <div className='app-store'>
                                        <a href="https://apps.apple.com/pk/app/stylo-pk/id1628734919"><img
                                            src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_APP_STORE.webp?v=1665137415"
                                            alt="Apple Store" width="90" height="30" /></a>
                                        &nbsp;
                                        <a href="https://play.google.com/store/apps/details?id=pk.stylo&pli=1"><img
                                            src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_GOOGLE_PLAY.webp?v=1665137385"
                                            alt="Google Play Store" width="90" height="30" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
                            <div className='b2' style={{ marginTop: '40px' }}>
                                <h5>About</h5>
                                <div className='list-bottom1' style={{ marginTop: '25px', listStyle: 'none' }}>
                                    <li><a href="">Our Story</a></li>
                                    <li><a href="">Career@Stylo</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href="">Download Our App</a></li>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
                            <div className='b3' style={{ marginTop: '40px' }}>
                                <h5>Information</h5>
                                <div className='list-bottom1' style={{ marginTop: '25px', listStyle: 'none' }}>
                                    <li><a href="">Shipping Policy</a></li>
                                    <li><a href="">Returns&Exchange</a></li>
                                    <li><a href="">Policy</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Store Locator</a></li>
                                    <li><a href="">Terms of Service</a></li>
                                    <li><a href="">Refund Policy</a></li>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
                            <div className='b4' style={{ marginTop: '40px' }}>
                                <h5>Size Chart</h5>
                                <div className='list-bottom1' style={{ marginTop: '25px', listStyle: 'none' }}>
                                    <li><a href="">Ladies Shoes Size Chart</a></li>
                                    <li><a href="">Ladies Apparel Size</a></li>
                                    <li><a href="">Chart</a></li>
                                    <li><a href="">Denim Size Chart</a></li>
                                    <li><a href="">Kids Shoes Size Chart</a></li>
                                    <li><a href="">Kids Pret Size Chart</a></li>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12 mb_50'>
                            <div className='b5' style={{ marginTop: '40px' }}>
                                <h5>Newsletter Signup</h5>
                                <div className='newsletter-signup' style={{ marginTop: '25px' }}>
                                    <p>Subscribe and Stay Updated!</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="email row justify-content-center align-items-center"
                                        style={{
                                            padding: '20px 0'
                                        }}>
                                        <div className="col-lg-8 col-md-8 p-1">
                                            <input
                                                className="mailbox form-control"
                                                type="email"
                                                name='email'
                                                value={email}
                                                onChange={onChange}
                                                placeholder="Your Email Address"
                                                style={{
                                                    padding: '10px 0px 10px 0px',
                                                    fontSize: '14px',
                                                    textAlign: 'center',
                                                    borderRadius: '4px',
                                                    border: '1px solid #ccc',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4 p-1">
                                            <button
                                                className="mailsubmit btn btn-block"
                                                type="submit"
                                                style={{
                                                    backgroundColor: '#e6007e',
                                                    color: '#fff',
                                                    padding: '10px 0px 10px 0px',
                                                    fontSize: '14px',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    width: '100%',
                                                }}
                                            >
                                                <span style={{padding:'3px'}} >Subscribe</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='container-fluid'>
                <div className='row' style={{ margin: '10px 0' }}>

                    <div className='copyrights col_1 col-lg-6 col-md-12 col-12'>
                        <p>© 2024 Stylo| All Rights Reserved</p>
                    </div>

                    <div className='payment_icons col_2 col-lg-6 col-md-12 col-12'>
                        <img
                            src="//stylo.pk/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" />
                        <img
                            src="//stylo.pk/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" />
                    </div>

                </div>
            </div>

        </div>
    );
};




const Small = () => {

    const [formData, setFormData] = useState({
        email: '',
    })
    const { email } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/api/admin/subscribe/subscribe", formData)
        if (response.data.success) {
            toast.success(response.data.message);
        }
        else {
            toast.error(response.data.message);
        }
    }

    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                        <div className='col-auto fs-2 py-1'><FaTruck /></div>
                        <div className='col content d-flex flex-column py-2'>
                            <b>Free Shipping</b>
                            <p>Free Shipping for order above PKR3000</p>
                        </div>
                    </div>

                    <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                        <div className='col-auto fs-2 py-1'><BsHeadset /></div>
                        <div className='col content d-flex flex-column py-2'>
                            <b>Customer Support</b>
                            <p>Monday - Saturday | 9:00AM TO 6:00PM</p>
                        </div>
                    </div>

                    <div className='bxe col-lg-4 col-md-6 col-sm-12 border border-dark d-flex gap-3 py-2'>
                        <div className='col-auto fs-2 py-1'><FaRegArrowAltCircleLeft /></div>
                        <div className='col content d-flex flex-column py-2'>
                            <b>10 DAYS Return & Exchange</b>
                            <p>Simple return within 10 days for an Exchange</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='accordion accordion-flush' id='accordionFlushExample'>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingOne'>
                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
                            <h5>Get in touch</h5>
                        </button>
                    </h2>
                    <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>

                            <div className='b1'>
                                <div className='contact-links' style={{ margin: '25px 0' }}>
                                    <div className='call'>
                                        <span style={{ fontSize: '18px' }}><BsTelephone /></span>
                                        <a href="mailto:+92%2042%20111178956"
                                            style={{ textDecoration: 'none', color: 'black' }}>+92 42 111178956</a>
                                    </div>
                                    <div className='email'>
                                        <span style={{ fontSize: '20px' }}><MdOutlineMailOutline /></span>
                                        <a href="mailto:support@stylo.pk"
                                            style={{ textDecoration: 'none', color: 'black', marginLeft: '10px' }}>support@stylo.pk</a>
                                    </div>
                                    <div className='social' style={{ marginTop: '5px' }}>
                                        <a href="https://www.facebook.com/StyloShoes/"><span style={{ fontSize: '20px' }}><FaFacebook /></span></a>
                                        &nbsp;
                                        <a href="https://x.com/StyloShoesPK"><span style={{ fontSize: '20px' }}><FaXTwitter /></span></a>
                                        &nbsp;
                                        <a href="https://www.instagram.com/stylopk/"><span style={{ fontSize: '20px' }}><FaInstagram /></span></a>
                                        &nbsp;
                                        <a href="https://www.linkedin.com/company/stylo-pvt-ltd"><span style={{ fontSize: '20px' }}><FaLinkedin /></span></a>
                                        &nbsp;
                                        <a href="https://www.pinterest.com/stylopk01/"><span style={{ fontSize: '20px' }}><FaPinterestP /></span></a>
                                        &nbsp;
                                        <a href="https://www.youtube.com/channel/UCFvLQNgT9Gy4GKmLkhSMG-Q"><span style={{ fontSize: '20px' }}><SiYoutubekids /></span></a>
                                    </div>
                                    <div className='app-store'>
                                        <a href="https://apps.apple.com/pk/app/stylo-pk/id1628734919"><img
                                            src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_APP_STORE.webp?v=1665137415"
                                            alt="Apple Store" width="90" height="30" /></a>
                                        &nbsp;
                                        <a href="https://play.google.com/store/apps/details?id=pk.stylo&pli=1"><img
                                            src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_GOOGLE_PLAY.webp?v=1665137385"
                                            alt="Google Play Store" width="90" height="30" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingTwo'>
                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseTwo' aria-expanded='false' aria-controls='flush-collapseTwo'>
                            <h5>About</h5>
                        </button>
                    </h2>
                    <div id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>

                            <div className='b2'>
                                <div className='list-bottom1' style={{ margin: '25px 0', listStyle: 'none' }}>
                                    <li><a href="">Our Story</a></li>
                                    <li><a href="">Career@Stylo</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href="">Download Our App</a></li>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingThree'>
                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseThree' aria-expanded='false' aria-controls='flush-collapseThree'>
                            <h5>Information</h5>
                        </button>
                    </h2>
                    <div id='flush-collapseThree' className='accordion-collapse collapse' aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>

                            <div className='b3'>
                                <div className='list-bottom1' style={{ margin: '25px 0', listStyle: 'none' }}>
                                    <li><a href="">Shipping Policy</a></li>
                                    <li><a href="">Returns&Exchange</a></li>
                                    <li><a href="">Policy</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Store Locator</a></li>
                                    <li><a href="">Terms of Service</a></li>
                                    <li><a href="">Refund Policy</a></li>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingFour'>
                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseFour' aria-expanded='false' aria-controls='flush-collapseFour'>
                            <h4>Size Chart</h4>
                        </button>
                    </h2>
                    <div id='flush-collapseFour' className='accordion-collapse collapse' aria-labelledby='flush-headingFour' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>

                            <div className='b4'>
                                <div className='list-bottom1' style={{ margin: '25px 0', listStyle: 'none' }}>
                                    <li><a href="">Ladies Shoes Size Chart</a></li>
                                    <li><a href="">Ladies Apparel Size</a></li>
                                    <li><a href="">Chart</a></li>
                                    <li><a href="">Denim Size Chart</a></li>
                                    <li><a href="">Kids Shoes Size Chart</a></li>
                                    <li><a href="">Kids Pret Size Chart</a></li>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingFive'>
                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseFive' aria-expanded='false' aria-controls='flush-collapseFive'>
                            <h5>Newsletter Signup</h5>
                        </button>
                    </h2>
                    <div id='flush-collapseFive' className='accordion-collapse collapse' aria-labelledby='flush-headingFive' data-bs-parent='#accordionFlushExample'>
                        <div className='accordion-body'>

                            <div className='b5'>
                                <div className='newsletter-signup' style={{ margin: '25px 0' }}>
                                    <p style={{ textAlign: 'center' }}><b>Subscribe and Stay Updated!</b></p>
                                </div>
                                <div className="email row justify-content-center align-items-center"
                                    style={{
                                        padding: '20px 0'
                                    }}>
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-12 col-lg-8 col-md-6">
                                            <input
                                                className="mailbox form-control"
                                                type="email"
                                                name='email'
                                                value={email}
                                                onChange={onChange}
                                                placeholder="Your Email Address"
                                                style={{
                                                    padding: '10px 10px 10px 10px',
                                                    fontSize: '14px',
                                                    textAlign: 'center',
                                                    borderRadius: '4px',
                                                    border: '1px solid #ccc',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <button
                                                className="mailsubmit btn btn-block"
                                                type="submit"
                                                style={{
                                                    backgroundColor: '#e6007e',
                                                    color: '#fff',
                                                    padding: '10px',
                                                    marginTop: '15px',
                                                    fontSize: '14px',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    width: '100%',
                                                }}
                                            >
                                                <span>Subscribe</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid' style={{ backgroundColor: '#f0f0f0' }}>
                <div className='row' style={{ margin: '10px 0' }}>

                    <div className='copyrights col_1 col-lg-6 col-md-12 col-12'>
                        <p>© 2024 Stylo| All Rights Reserved</p>
                    </div>

                    <div className='payment_icons col_2 col-lg-6 col-md-12 col-12'>
                        <img
                            src="//stylo.pk/cdn/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg" />
                        <img
                            src="//stylo.pk/cdn/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg" />
                    </div>

                </div>
            </div>


        </div>


    );
};



const End = () => {
    const { width } = useWindowSize();

    return (
        <div>
            {width >= 768 ? <Large /> : <Small />}
        </div>
    );
};

export default End;