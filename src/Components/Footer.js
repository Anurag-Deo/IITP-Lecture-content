import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start bg-light text-muted">
                <section
                    class="d-flex justify-content-center  p-4 border-bottom"
                >
                    <div class="me-5 d-none d-lg-block">
                    </div>

                    <div>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset mx-5">
                            <i class="fab fa-lg fa-github"></i>
                        </a>
                    </div>
                </section>

                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>IITP Lectures
                                </h6>
                                <p>
                                    This is the website for getting all the lecture related contents of B.Tech 2021 batch. Hope this website will help you while your preperation for the exams.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful Links
                                </h6>
                                <p>
                                    <a href="Home" class="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="MA102" class="text-reset">MA102</a>
                                </p>
                                <p>
                                    <a href="ME102" class="text-reset">ME102</a>
                                </p>
                                <p>
                                    <a href="PH103" class="text-reset">PH103</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="CH103" class="text-reset">CH103</a>
                                </p>
                                <p>
                                    <a href="EE102" class="text-reset">EE102</a>
                                </p>
                                <p>
                                    <a href="CS102" class="text-reset">CS102</a>
                                </p>
                                <p>
                                    <a href="CS110" class="text-reset">CS110</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Patna, Bihar, India</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    iitplectures@gmail.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                    © 2022 Copyright:
                    <a class="text-reset fw-bold" href="https://iitplectures.netlify.app" target='_blank'>IITPLectures.netlify.app</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
