<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="xwrapper">
        <div class="header">
            <div class="logo">
                <img src="images/ar-logo.png" alt="">
                <h1>Aribot</h1>
            </div>
            <!---here is the search bar-->
            <div class="search">
                <input type="search" id="searchInput" placeholder="Search here....">
                <button id="searchBtn"><i class="fa fa-search"></i></button>
            </div>
            <!--from here the social media link are shown-->
            <div class="media">
                <span class="link"><a href="#"></a><img src="images/instagram.png" width="40px" height="40px"
                        alt=""></span>
                <span class="link"><a href="#"></a><img src="images/linkedin1.png" width="40px" height="40px"
                        alt=""></span>
                <span class="link"><a href="#"></a><img src="images/telegram.png" width="40px" height="40px"
                        alt=""></span>
                <span class="link"><a href="#"></a><img src="images/whatsapp.png" width="70px" height="70px"
                        alt=""></span>
            </div>
            <!--here is the login section -->
            <div class="login-btn">
                <button id="authBtn" class="buttom">login</button>
            </div>
        </div>
        <div class="container">
            <nav>
                <a class="nav-item active" href="index.html">Home</a>
                <a class="nav-item" href="research.html">research</a>
                <a class="nav-item" href="latest.html">Latest News</a>
                <a class="nav-item" href="updated.html">Updated</a>
                <a class="nav-item" href="popular.html">Popular</a>
                <a class="nav-item" href="contact.html">Contact us</a>
            </nav>
        </div>

        <!-- HERO -->
        <section id="hero" class="hero">
            <div class="main-hero">
                <div class="tag">What AR Looks Like in the Real World</div>
                <h1 class="hero-title typewriter">
                    <span id="typing-text"></span>
                </h1>
                <p class="hero-sub">
                    This website demonstrates how Augmented Reality works.
                    You'll see how devices scan your surroundings, detect surfaces, and place digital holograms into
                    real spaces — shown through videos, animations, and interactive visuals.
                </p>
                <div class="hero-actions">
                    <button class="btn-primary">Launch AR Experience</button>
                    <button class="btn-primary">View Live Demo</button>
                </div>
                <p style="margin-top: 10px; font-size: 0.99rem; opacity: 0.85;">
                    Move your cursor over this panel to feel the subtle depth and motion. In a real AR
                    environment, these elements would track your movement in 3D space.
                </p>
            </div>
        </section>
        <!---from here there is the explaination section of augmented reality with link which connect to another page-->
        <section>
            <a href="latest.html">
                <div class="ar-disp">
                    <div class="disp">
                        <h1 style="color: black;">what todays AR looks like</h1>
                        <p>AR glasses project digital information onto transparent lenses, allowing users to see
                            holograms layered over the
                            real world. Built-in sensors scan the environment, while AI interprets objects, depth,
                            and movement. This lets the glasses place 3D menus, data, and visuals directly into your
                            field of view in real time.</p>
                    </div>
                    <div class="images">
                        <img src="images/glass-ar.jpg">
                    </div>
                </div>
            </a>
        </section>

        <section>
            <a href="popular.html">
                <div class="ar-disp">
                    <div class="disp">
                        <h1 style="color: black;">The Future of Interaction: Virtual Reality and Augmented Reality
                            Control with AI </h1>
                        <p>Virtual Reality places the user inside a fully digital world using a headset that tracks head
                            and hand movements.
                            The system displays interactive holographic elements—like DNA models, data panels, and
                            virtual controls—that respond
                            to gestures in real time. This technology is used for scientific visualization, training,
                            simulation, and advanced data interaction.</p>
                    </div>
                    <div class="images">
                        <img src="images/work-ar.jpg">
                    </div>
                </div>
            </a>
        </section>

        <section>
            <a href="popular.html">
                <div class="ar-disp">
                    <div class="disp">
                        <h1 style="color: black;">how Future looks: Real-Time AR Planning for Modern Cities</h1>
                        <p>The future blends reality with intelligent holograms, where AR glasses and VR systems
                            let us design, explore, and interact with digital worlds as naturally as the physical
                            one—turning imagination into living, responsive space.</p>
                    </div>
                    <div class="images">
                        <img src="images/creative.jpg">
                    </div>
                </div>
            </a>
        </section>

        <section>
            <a href="popular.html">
                <div class="ar-disp">
                    <div class="disp">
                        <h1 style="color: black;">The Future of Computing: Immersive Interaction Through Future AR
                            Interfaces</h1>
                        <p>A new digital future emerges where AR goggles let users touch holograms, control
                            data in mid-air, and blend physical and virtual worlds. Technology becomes intuitive,
                            immersive, and seamlessly connected to human movement.</p>
                    </div>
                    <div class="images">
                        <img src="images/future-ar.jpeg">
                    </div>
                </div>
            </a>

        </section>

        <div id="cookie-consent" class="cookie-consent">
            <h3>We Use Cookies</h3>
            <p>
                We use cookies to improve your browsing experience, personalize content,
                and analyze traffic. You can choose to accept or reject cookies.
            </p>
            <div class="cookie-buttons">
                <button id="acceptAll" class="cookie-btn accept">Accept All</button>
                <button id="rejectAll" class="cookie-btn reject">Consent</button>
            </div>
        </div>

        <footer class="footer" style="clear: both;">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>My Streaming Site</h3>
                    <p>Live Viewers: <span id="viewerCount">0</span></p>
                </div>
                <div class="footer-section">
                    <h4>Pages</h4>
                    <a href="viewer.html">Viewer</a>
                    <a href="subscription.html">Subscription</a>
                </div>

                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <a href="#">YouTube</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>

            <p class="copyright">© 2026 My Streaming Site</p>
        </footer>

        <section style="display: flex;">
            <div class="foot">

                <div class="link-box">
                    <a href="research.html">👉 History of Augmented Reality from 1800s to present</a>
                    <a href="updated.html">👉 whats AR looks like Todays</a>
                    <a href="latest.html">👉 what if we can add AI Agent with AR</a>
                    <a href="popular.html">👉 Understanding AR Through the Lens of AI</a>
                    <a href="popular.html">👉 The Fusion of AR Vision and AI Intelligence</a>
                    <a href="popular.html">👉 AI-Enhanced Augmented Reality Explained Simply</a>
                    <a href="popular.html">👉 When AR Meets AI: A Smarter Digital World</a>
                    <a href="updated.html">👉 Augmented Reality Powered by Intelligent AI</a>
                </div>
                <div class="link-box">
                    <div class="link-icon">
                        <a href="#"><img src="images/instagram.png" width="40px" height="40px"></a>
                        <a href="#"><img src="images/linkedin1.png" width="40px" height="40px"></a>
                        <a href="#"><img src="images/youtube-icon.svg" width="40px" height="40px"></a>
                        <a href="#"><img src="images/telegram.png" width="40px" height="40px"></a>
                        <a href="#"><img src="images/whatsapp.png"
                                style=" width: 70px; height: 70px; margin-top: -12px;"></a>
                    </div>
                    <form>
                        <textarea id="comment" name="comment" rows="6" cols="50"
                            placeholder="write your comments here...." maxlength="200"></textarea><br><br>
                        <input type="submit" value="submit" class="buttom">
                    </form>
                </div>
            </div>
        </section>
        <section>
            <div class="footer">
                <h1>All copyright Reserved @ Bibek Mahato</h1>
            </div>
        </section>
    </div>
    <!-- JAVASCRIPT -->
    <script src="index.js"></script>

</body>

</html>