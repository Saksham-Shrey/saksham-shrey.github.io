document.addEventListener('DOMContentLoaded', () => {
    // Experience section toggle
    const showMoreExp = document.getElementById('show-more-exp');
    const moreExperience = document.getElementById('more-experience');
    
    if (showMoreExp && moreExperience) {
        showMoreExp.addEventListener('click', (e) => {
            e.preventDefault();
            moreExperience.classList.toggle('hidden');
            showMoreExp.querySelector('a').textContent = 
                moreExperience.classList.contains('hidden') ? 'Show more' : 'Show less';
        });
    }
    
    // Projects section toggle
    const showMoreProjects = document.getElementById('show-more-projects');
    const moreProjects = document.getElementById('more-projects');
    
    if (showMoreProjects && moreProjects) {
        showMoreProjects.addEventListener('click', (e) => {
            e.preventDefault();
            moreProjects.classList.toggle('hidden');
            showMoreProjects.querySelector('a').textContent = 
                moreProjects.classList.contains('hidden') ? 'Show more' : 'Show less';
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 