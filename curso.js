document.addEventListener('DOMContentLoaded', function() {
    // Course data
    const courses = {
        modulo1: {
            title: "Curso 1",
            lessons: [
                { id: 1, title: "Aula 01 - Introdução", duration: "1m", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
                { id: 2, title: "Aula 02 - Como usar a plataforma", duration: "3m", videoUrl: "https://vimeo.com/148751763" },
                { id: 3, title: "Aula 03 - Primeiros passos", duration: "5m", videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
                { 
                    id: 4, 
                    title: "Aula 04 - Configurando sua conta", 
                    duration: "4m", 
                    videoUrl: `html:<div id="vid_67d8b222b5e657217ff91877" style="position: relative; width: 100%; padding: 56.25% 0 0;"> 
                    <img id="thumb_67d8b222b5e657217ff91877" src="https://images.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67d8b222b5e657217ff91877/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> 
                    <div id="backdrop_67d8b222b5e657217ff91877" style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%;"></div> 
                    </div> 
                    <script type="text/javascript" id="scr_67d8b222b5e657217ff91877"> 
                    var s=document.createElement("script"); 
                    s.src="https://scripts.converteai.net/0a8b4b97-a0e3-4633-ac8a-9914c0209ef6/players/67d8b222b5e657217ff91877/player.js"; 
                    s.async=!0; 
                    document.head.appendChild(s); 
                    </script>`

                },
                { id: 5, title: "Aula 05 - Dicas importantes", duration: "6m", videoUrl: "https://player.vimeo.com/video/76979871" },
                { id: 6, title: "Aula 06 - Perguntas frequentes", duration: "3m", videoUrl: "#" },
                { id: 7, title: "Aula 07 - Suporte e ajuda", duration: "2m", videoUrl: "#" },
                { id: 8, title: "Aula 08 - Conclusão do módulo", duration: "1m", videoUrl: "#" }
            ]
        },
        modulo2: {
            title: "Curso 2",
            lessons: [
                { id: 1, title: "Aula 01 - Introdução", duration: "1m", videoUrl: "#" },
                { id: 2, title: "Aula 02 - Como ter uma Mentalidade de Sucesso", duration: "5m", videoUrl: "#" },
                { id: 3, title: "Aula 03 - Superando obstáculos", duration: "4m", videoUrl: "#" },
                { id: 4, title: "Aula 04 - Definindo metas", duration: "3m", videoUrl: "#" },
                { id: 5, title: "Aula 05 - Hábitos de sucesso", duration: "7m", videoUrl: "#" },
                { id: 6, title: "Aula 06 - Gerenciando o tempo", duration: "4m", videoUrl: "#" },
                { id: 7, title: "Aula 07 - Persistência e disciplina", duration: "5m", videoUrl: "#" },
                { id: 8, title: "Aula 08 - Conclusão do módulo", duration: "2m", videoUrl: "#" }
            ]
        },
        modulo3: {
            title: "Curso 3",
            lessons: [
                { id: 1, title: "Aula 01 - Introdução", duration: "1m", videoUrl: "#" },
                { id: 2, title: "Aula 02 - Principais sites de avaliação", duration: "6m", videoUrl: "#" },
                { id: 3, title: "Aula 03 - Como ganhar com sites de avaliação", duration: "8m", videoUrl: "#" },
                { id: 4, title: "Aula 04 - Estratégias eficientes", duration: "5m", videoUrl: "#" },
                { id: 5, title: "Aula 05 - Maximizando seus ganhos", duration: "4m", videoUrl: "#" },
                { id: 6, title: "Aula 06 - Evitando armadilhas", duration: "3m", videoUrl: "#" },
                { id: 7, title: "Aula 07 - Dicas avançadas", duration: "5m", videoUrl: "#" },
                { id: 8, title: "Aula 08 - Conclusão do módulo", duration: "2m", videoUrl: "#" }
            ]
        },
        modulo4: {
            title: "Curso 4",
            lessons: [
                { id: 1, title: "Aula 01 - Introdução ao Cashback", duration: "2m", videoUrl: "#" },
                { id: 2, title: "Aula 02 - Como funciona o Cashback", duration: "4m", videoUrl: "#" },
                { id: 3, title: "Aula 03 - Melhores plataformas", duration: "5m", videoUrl: "#" },
                { id: 4, title: "Aula 04 - Toluna", duration: "6m", videoUrl: "#" },
                { id: 5, title: "Aula 05 - Ysense", duration: "6m", videoUrl: "#" },
                { id: 6, title: "Aula 06 - LifePoints", duration: "5m", videoUrl: "#" },
                { id: 7, title: "Aula 07 - Meseems", duration: "3m", videoUrl: "#" },
                { id: 8, title: "Aula 08 - Swagbucks", duration: "4m", videoUrl: "#" }
            ]
        },
        modulo5: {
            title: "Curso 5",
            lessons: [
                { id: 1, title: "Aula 01 - O que é afiliação", duration: "3m", videoUrl: "#" },
                { id: 2, title: "Aula 02 - Como se tornar um afiliado", duration: "5m", videoUrl: "#" },
                { id: 3, title: "Aula 03 - Escolhendo produtos", duration: "4m", videoUrl: "#" },
                { id: 4, title: "Aula 04 - Estratégias de promoção", duration: "6m", videoUrl: "#" },
                { id: 5, title: "Aula 05 - Redes sociais", duration: "5m", videoUrl: "#" },
                { id: 6, title: "Aula 06 - Email marketing", duration: "4m", videoUrl: "#" },
                { id: 7, title: "Aula 07 - Otimizando conversões", duration: "7m", videoUrl: "#" },
                { id: 8, title: "Aula 08 - Escalando seus resultados", duration: "5m", videoUrl: "#" }
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