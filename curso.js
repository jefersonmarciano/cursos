document.addEventListener('DOMContentLoaded', function() {
    // Course data
    const courses = {
        modulo1: {
            title: "Money Mentality",
            lessons: [
                { id: 1, title: "Money Mindset Introduction", duration: "1m", videoUrl: `html:<div id="vid_67f2b6d3902b8a612190404c" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b6d3902b8a612190404c" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6d3902b8a612190404c/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b6d3902b8a612190404c" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b6d3902b8a612190404c"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6d3902b8a612190404c/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 2, title: "Unlock Your Money Prosperity Mindset", duration: "3m", videoUrl: `html:<div id="vid_67f2b6cdd75d2074cce2d224" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b6cdd75d2074cce2d224" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6cdd75d2074cce2d224/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b6cdd75d2074cce2d224" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b6cdd75d2074cce2d224"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6cdd75d2074cce2d224/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                
                
            ]
        },
        modulo2: {
            title: "TEMU AFFILIATE REWARDS",
            lessons: [
                { id: 1, title: "Introduction - Temu Affiliate", duration: "1m", videoUrl: `html:<div id="vid_67f2f8a02e231b1e37d27f7d" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_67f2f8a02e231b1e37d27f7d" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2f8a02e231b1e37d27f7d/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_67f2f8a02e231b1e37d27f7d" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div> <script type="text/javascript" id="scr_67f2f8a02e231b1e37d27f7d"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2f8a02e231b1e37d27f7d/player.js", s.async=!0,document.head.appendChild(s); </script>`                    
                     },
                { id: 2, title: "How I Made $3,989 My FIRST Month", duration: "5m", videoUrl: `html:<div id="vid_67f2e2d1541a9a7be5a30115" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e2d1541a9a7be5a30115" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e2d1541a9a7be5a30115/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e2d1541a9a7be5a30115" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e2d1541a9a7be5a30115"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e2d1541a9a7be5a30115/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                    
                    
                     },
                { id: 3, title: "Lesson 1 – Proof of Earnings & Why Temu Pays You", duration: "4m", videoUrl: `html:<div id="vid_67f2e174902b8a61219063aa" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e174902b8a61219063aa" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e174902b8a61219063aa/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e174902b8a61219063aa" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e174902b8a61219063aa"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e174902b8a61219063aa/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`

                    
                     },
                { id: 4, title: "Lesson 2 – How the Temu Affiliate Program Works", duration: "3m", videoUrl: `html:<div id="vid_67f2e17b06dd518b2f4674f4" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e17b06dd518b2f4674f4" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e17b06dd518b2f4674f4/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e17b06dd518b2f4674f4" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e17b06dd518b2f4674f4"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e17b06dd518b2f4674f4/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                    
                     },
                { id: 5, title: "Lesson 3 – TikTok Strategy Go Viral", duration: "7m", videoUrl: `html:<div id="vid_67f2e18b69e879f5a2451646" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e18b69e879f5a2451646" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e18b69e879f5a2451646/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e18b69e879f5a2451646" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e18b69e879f5a2451646"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e18b69e879f5a2451646/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`                    
                     },
                { id: 6, title: "Lesson 4 – TikTok Strategy part 2", duration: "4m", videoUrl: `html:<div id="vid_67f2e1a55f4ceec86cc5b022" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e1a55f4ceec86cc5b022" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e1a55f4ceec86cc5b022/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e1a55f4ceec86cc5b022" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e1a55f4ceec86cc5b022"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e1a55f4ceec86cc5b022/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                    
                     },
                     { id: 7, title: "Lesson 5 – YouTube Shorts + Facebook Groups = Fast", duration: "4m", videoUrl: `html:<div id="vid_67f2e1b887bbe40eb12623e9" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                        <img id="thumb_67f2e1b887bbe40eb12623e9" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e1b887bbe40eb12623e9/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                        <div id="backdrop_67f2e1b887bbe40eb12623e9" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                        </div> 
                        <script type="text/javascript" id="scr_67f2e1b887bbe40eb12623e9"> 
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e1b887bbe40eb12623e9/player.js"; 
                        s.async=!0; 
                        document.head.appendChild(s); 
                        </script>`
                        
                        
                         },
                    
                
            ]
        },
        modulo3: {
            title: "PLAY GAMES EARN MONEY",
            lessons: [
                { id: 1, title: "Introduction", duration: "2m", videoUrl: `html:<div id="vid_67f2b77d5f4ceec86cc58d91" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b77d5f4ceec86cc58d91" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b77d5f4ceec86cc58d91/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b77d5f4ceec86cc58d91" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b77d5f4ceec86cc58d91"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b77d5f4ceec86cc58d91/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 2, title: "Understanding the platform with real people", duration: "8m", videoUrl: `html:<div id="vid_67f2b749541a9a7be5a2da9c" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b749541a9a7be5a2da9c" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b749541a9a7be5a2da9c/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b749541a9a7be5a2da9c" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b749541a9a7be5a2da9c"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b749541a9a7be5a2da9c/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                    },
                { id: 3, title: "How Freecash Works to Make Money Online (Quick Guide)", duration: "1m", videoUrl: `html:<div id="vid_67f2b734d75d2074cce2d2a1" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b734d75d2074cce2d2a1" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b734d75d2074cce2d2a1/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b734d75d2074cce2d2a1" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b734d75d2074cce2d2a1"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b734d75d2074cce2d2a1/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 4, title: "How to Cash Out Freecash App (QUICK GUIDE)", duration: "2m", videoUrl: `html:<div id="vid_67f2b73887bbe40eb125ff90" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b73887bbe40eb125ff90" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b73887bbe40eb125ff90/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b73887bbe40eb125ff90" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b73887bbe40eb125ff90"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b73887bbe40eb125ff90/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 5, title: "How to Change Your Freecash Profile", duration: "4m", videoUrl: `html:<div id="vid_67f2b74e541a9a7be5a2dac0" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b74e541a9a7be5a2dac0" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b74e541a9a7be5a2dac0/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b74e541a9a7be5a2dac0" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b74e541a9a7be5a2dac0"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b74e541a9a7be5a2dac0/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 6, title: "How to MAKE MONEY on Freecash App", duration: "3m", videoUrl: `html:<div id="vid_67f2b75269e879f5a244f298" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b75269e879f5a244f298" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75269e879f5a244f298/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b75269e879f5a244f298" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b75269e879f5a244f298"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75269e879f5a244f298/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                { id: 7, title: "How to Earn on FREECASH APP", duration: "2m", videoUrl: `html:<div id="vid_67f2b756902b8a61219040b6" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b756902b8a61219040b6" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b756902b8a61219040b6/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b756902b8a61219040b6" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b756902b8a61219040b6"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b756902b8a61219040b6/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                     },
                     { id: 8, title: "How to Get Freecash Report", duration: "2m", videoUrl: `html:<div id="vid_67f2b75e06dd518b2f465178" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                        <img id="thumb_67f2b75e06dd518b2f465178" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75e06dd518b2f465178/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                        <div id="backdrop_67f2b75e06dd518b2f465178" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                        </div> 
                        <script type="text/javascript" id="scr_67f2b75e06dd518b2f465178"> 
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75e06dd518b2f465178/player.js"; 
                        s.async=!0; 
                        document.head.appendChild(s); 
                        </script>`

                         },
                         { id: 9, title: "How to Use FREECASH for Roblox", duration: "2m", videoUrl: `html:<div id="vid_67f2b75a06dd518b2f465164" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                            <img id="thumb_67f2b75a06dd518b2f465164" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75a06dd518b2f465164/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                            <div id="backdrop_67f2b75a06dd518b2f465164" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                            </div> 
                            <script type="text/javascript" id="scr_67f2b75a06dd518b2f465164"> 
                            var s=document.createElement("script"); 
                            s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b75a06dd518b2f465164/player.js"; 
                            s.async=!0; 
                            document.head.appendChild(s); 
                            </script>`
    
    
                             },
                { id: 10, title: "How to Withdraw from Freecash To Paypal", duration: "2m", videoUrl: `html:<div id="vid_67f2b762541a9a7be5a2dae4" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b762541a9a7be5a2dae4" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b762541a9a7be5a2dae4/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b762541a9a7be5a2dae4" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b762541a9a7be5a2dae4"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b762541a9a7be5a2dae4/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                },
                { id: 11, title: "How to REDEEM Your Paypal Gift Card Freecash App", duration: "2m", videoUrl: `html:<div id="vid_67f2b76869e879f5a244f2b6" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2b76869e879f5a244f2b6" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b76869e879f5a244f2b6/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2b76869e879f5a244f2b6" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2b76869e879f5a244f2b6"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b76869e879f5a244f2b6/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`

                },
                
            ]
        },
        modulo4: {
            title: "Get Paid For Surveys",
            lessons: [
                { id: 1, title: "Introduction", duration: "2m", videoUrl: `html:<div id="vid_67f2b72f69e879f5a244f274" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                    <img id="thumb_67f2b72f69e879f5a244f274" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b72f69e879f5a244f274/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_67f2b72f69e879f5a244f274" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>
                    </div>
                    <script type="text/javascript" id="scr_67f2b72f69e879f5a244f274">
                    var s=document.createElement("script");
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b72f69e879f5a244f274/player.js";
                    s.async=!0;
                    document.head.appendChild(s);
                    </script>`
                     },
                { id: 2, title: "Lesson 1 - Toluna - Intro and creating account", duration: "4m", videoUrl: `html:<div id="vid_67f2b6f6902b8a6121904066" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                    <img id="thumb_67f2b6f6902b8a6121904066" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6f6902b8a6121904066/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_67f2b6f6902b8a6121904066" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>
                    </div>
                    <script type="text/javascript" id="scr_67f2b6f6902b8a6121904066">
                    var s=document.createElement("script");
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b6f6902b8a6121904066/player.js";
                    s.async=!0;
                    document.head.appendChild(s);
                    </script>`
                     },
                { id: 3, title: "Lesson 2 - Understanding the site", duration: "5m", videoUrl: `html:<div id="vid_67f2b709d75d2074cce2d24d" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                    <img id="thumb_67f2b709d75d2074cce2d24d" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b709d75d2074cce2d24d/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_67f2b709d75d2074cce2d24d" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>
                    </div>
                    <script type="text/javascript" id="scr_67f2b709d75d2074cce2d24d">
                    var s=document.createElement("script");
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b709d75d2074cce2d24d/player.js";
                    s.async=!0;
                    document.head.appendChild(s);
                    </script>`
                     },
                { id: 4, title: "Lesson 3 - How to answer surveys and earn money", duration: "6m", videoUrl: `html:<div id="vid_67f2b71cbdab914c19ac2746" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                    <img id="thumb_67f2b71cbdab914c19ac2746" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b71cbdab914c19ac2746/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_67f2b71cbdab914c19ac2746" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>
                    </div>
                    <script type="text/javascript" id="scr_67f2b71cbdab914c19ac2746">
                    var s=document.createElement("script");
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b71cbdab914c19ac2746/player.js";
                    s.async=!0;
                    document.head.appendChild(s);
                    </script>`
                     },
                { id: 5, title: "Lesson 4 - Withdrawal and final", duration: "6m", videoUrl: `html:<div id="vid_67f2b729541a9a7be5a2da82" style="position: relative; width: 100%; padding: 56.25% 0 0;">
                    <img id="thumb_67f2b729541a9a7be5a2da82" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b729541a9a7be5a2da82/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail">
                    <div id="backdrop_67f2b729541a9a7be5a2da82" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div>
                    </div>
                    <script type="text/javascript" id="scr_67f2b729541a9a7be5a2da82">
                    var s=document.createElement("script");
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2b729541a9a7be5a2da82/player.js";
                    s.async=!0;
                    document.head.appendChild(s);
                    </script>`
                    },
               
            ]
        },
        modulo5: {
            title: "Temu especial bonus",
            lessons: [
                { id: 1, title: "How to Get 3 Free Items Temu", duration: "2m", videoUrl: `html:<div id="vid_67f2e5ccd75d2074cce2f94c" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67f2e5ccd75d2074cce2f94c" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e5ccd75d2074cce2f94c/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67f2e5ccd75d2074cce2f94c" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67f2e5ccd75d2074cce2f94c"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67f2e5ccd75d2074cce2f94c/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`
                    },
                
            ]
        }
    };

    // Get course ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    // DOM Elements
    const courseTitle = document.getElementById('courseTitle');
    const lessonsList = document.getElementById('lessonsList');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const videoTitle = document.getElementById('videoTitle');
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const prevCourse = document.getElementById('prevCourse');
    const nextCourse = document.getElementById('nextCourse');
    const prevCourseName = document.getElementById('prevCourseName');
    const nextCourseName = document.getElementById('nextCourseName');

   
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

   
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(event.target) && 
            !toggleSidebar.contains(event.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    
    if (courseId && courses[courseId]) {
        loadCourse(courseId);
    } else {
        
        window.location.href = 'index.html';
    }

    
    function detectVideoType(url) {
        if (!url || url === '#') return 'none';
        
        // HTML embed code
        if (url.startsWith('html:')) {
            return 'html';
        }
        
        // YouTube
        if (url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)) {
            return 'youtube';
        }
        
        // Vimeo
        if (url.match(/vimeo\.com\/(?:.*\/)?(?:\w+\/)?(\d+)/i) || url.match(/player\.vimeo\.com\/video\/(\d+)/i)) {
            return 'vimeo';
        }
        
        // Direct video file
        if (url.match(/\.(mp4|webm|ogg|mov)$/i)) {
            return 'direct';
        }
        
        // Default to iframe for other embedded players
        return 'iframe';
    }


    function getVideoId(url, type) {
        if (type === 'youtube') {
            const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
            return match ? match[1] : null;
        }
        
        if (type === 'vimeo') {
            const match = url.match(/vimeo\.com\/(?:.*\/)?(?:\w+\/)?(\d+)/i) || url.match(/player\.vimeo\.com\/video\/(\d+)/i);
            return match ? match[1] : null;
        }
        
        return null;
    }

    
    function createVideoElement(url) {
        const videoType = detectVideoType(url);
        const videoContainer = document.querySelector('.video-player');
        
        
        while (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
        }
        
      
        switch (videoType) {
            case 'html':
                
                const htmlContent = url.substring(5); // Remove 'html:' prefix
                
                
                const wrapper = document.createElement('div');
                wrapper.style.position = 'absolute';
                wrapper.style.top = '0';
                wrapper.style.left = '0';
                wrapper.style.width = '100%';
                wrapper.style.height = '100%';
                
                // Set the HTML content
                wrapper.innerHTML = htmlContent;
                
                // Find and execute scripts
                videoContainer.appendChild(wrapper);
                
                // Execute scripts manually since innerHTML doesn't execute them
                const scripts = wrapper.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    
                    // Copy all attributes
                    Array.from(oldScript.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    
                    // Copy inline script content
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    
                    // Replace old script with new one
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
                break;
                
            case 'youtube':
                const youtubeId = getVideoId(url, 'youtube');
                const youtubeEmbed = document.createElement('iframe');
                youtubeEmbed.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
                youtubeEmbed.frameBorder = '0';
                youtubeEmbed.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                youtubeEmbed.allowFullscreen = true;
                youtubeEmbed.style.position = 'absolute';
                youtubeEmbed.style.top = '0';
                youtubeEmbed.style.left = '0';
                youtubeEmbed.style.width = '100%';
                youtubeEmbed.style.height = '100%';
                videoContainer.appendChild(youtubeEmbed);
                break;
                
            case 'vimeo':
                const vimeoId = getVideoId(url, 'vimeo');
                const vimeoEmbed = document.createElement('iframe');
                vimeoEmbed.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
                vimeoEmbed.frameBorder = '0';
                vimeoEmbed.allow = 'autoplay; fullscreen';
                vimeoEmbed.allowFullscreen = true;
                vimeoEmbed.style.position = 'absolute';
                vimeoEmbed.style.top = '0';
                vimeoEmbed.style.left = '0';
                vimeoEmbed.style.width = '100%';
                vimeoEmbed.style.height = '100%';
                videoContainer.appendChild(vimeoEmbed);
                break;
                
            case 'direct':
                const video = document.createElement('video');
                video.id = 'videoPlayer';
                video.controls = true;
                video.autoplay = true;
                video.style.position = 'absolute';
                video.style.top = '0';
                video.style.left = '0';
                video.style.width = '100%';
                video.style.height = '100%';
                
                const source = document.createElement('source');
                source.src = url;
                source.type = `video/${url.split('.').pop()}`;
                
                video.appendChild(source);
                videoContainer.appendChild(video);
                break;
                
            case 'iframe':
                // For other embedded players
                if (url !== '#') {
                    const iframe = document.createElement('iframe');
                    iframe.src = url;
                    iframe.frameBorder = '0';
                    iframe.allow = 'autoplay; fullscreen';
                    iframe.allowFullscreen = true;
                    iframe.style.position = 'absolute';
                    iframe.style.top = '0';
                    iframe.style.left = '0';
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    videoContainer.appendChild(iframe);
                } else {
                    showPlaceholder();
                }
                break;
                
            case 'none':
            default:
                showPlaceholder();
                break;
        }
    }

    // Function to show placeholder
    function showPlaceholder() {
        const videoContainer = document.querySelector('.video-player');
        
        // Clear previous content
        while (videoContainer.firstChild) {
            videoContainer.removeChild(videoContainer.firstChild);
        }
        
        // Create placeholder
        const placeholder = document.createElement('div');
        placeholder.id = 'videoPlaceholder';
        placeholder.className = 'video-placeholder';
        placeholder.innerHTML = `
            <i class="fas fa-play-circle"></i>
            <p>Clique em uma aula para começar</p>
        `;
        
        placeholder.style.position = 'absolute';
        placeholder.style.top = '0';
        placeholder.style.left = '0';
        placeholder.style.width = '100%';
        placeholder.style.height = '100%';
        placeholder.style.display = 'flex';
        placeholder.style.flexDirection = 'column';
        placeholder.style.justifyContent = 'center';
        placeholder.style.alignItems = 'center';
        placeholder.style.color = 'white';
        placeholder.style.backgroundColor = '#1a1a1a';
        
        videoContainer.appendChild(placeholder);
    }

    // Function to load course content
    function loadCourse(courseId) {
        const course = courses[courseId];
        
        // Set course title
        if (courseTitle) {
            courseTitle.textContent = course.title;
        }
        
        // Clear previous lessons
        if (lessonsList) {
            lessonsList.innerHTML = '';
            
            // Add lessons to the list
            course.lessons.forEach((lesson, index) => {
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                lessonItem.setAttribute('data-video', lesson.videoUrl);
                lessonItem.setAttribute('data-index', index);
                
                lessonItem.innerHTML = `
                    <div class="lesson-status not-completed">
                        <i class="fas fa-circle"></i>
                    </div>
                    <div class="lesson-info">
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-meta">
                            <i class="fas fa-play-circle"></i> Aula em vídeo
                            <span class="lesson-duration"><i class="fas fa-clock"></i> ${lesson.duration}</span>
                        </div>
                    </div>
                `;
                
                // Add click event to play the video
                lessonItem.addEventListener('click', function() {
                    const videoUrl = this.getAttribute('data-video');
                    const lessonTitle = this.querySelector('.lesson-title').textContent;
                    
                    // Remove active class from all lessons
                    document.querySelectorAll('.lesson-item').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to clicked lesson
                    this.classList.add('active');
                    
                    // Update video player with the appropriate video
                    if (videoUrl && videoUrl !== '#') {
                        createVideoElement(videoUrl);
                    } else {
                        showPlaceholder();
                    }
                    
                    // Update video title
                    videoTitle.textContent = lessonTitle;
                });
                
                lessonsList.appendChild(lessonItem);
                
                // Auto-select first lesson
                if (index === 0) {
                    setTimeout(() => {
                        lessonItem.click();
                    }, 500);
                }
            });
        }

        // Set up navigation between courses
        setupCourseNavigation(courseId);
    }

    // Function to set up navigation between courses
    function setupCourseNavigation(currentCourseId) {
        const courseIds = Object.keys(courses);
        const currentIndex = courseIds.indexOf(currentCourseId);
        
        // Previous course
        if (currentIndex > 0) {
            const prevCourseId = courseIds[currentIndex - 1];
            prevCourse.href = `curso.html?id=${prevCourseId}`;
            prevCourseName.textContent = courses[prevCourseId].title;
            prevCourse.style.display = 'flex';
        } else {
            prevCourse.style.display = 'none';
        }
        
        // Next course
        if (currentIndex < courseIds.length - 1) {
            const nextCourseId = courseIds[currentIndex + 1];
            nextCourse.href = `curso.html?id=${nextCourseId}`;
            nextCourseName.textContent = courses[nextCourseId].title;
            nextCourse.style.display = 'flex';
        } else {
            nextCourse.style.display = 'none';
        }
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });
});