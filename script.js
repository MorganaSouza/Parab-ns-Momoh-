let currentPage = 0;
const pages = document.querySelectorAll('.page');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = 3;
        } else if (i < index) {
            page.style.transform = 'rotateY(-180deg)';
            page.style.zIndex = 1;
        } else {
            page.style.transform = 'rotateY(180deg)';
            page.style.zIndex = 2;
        }
    });
}

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });
});

showPage(currentPage);

// Ajuste para responsividade
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.querySelector('.birthdayBook').style.width = '90vw';
        document.querySelector('.birthdayBook').style.height = '70vh';
    } else {
        document.querySelector('.birthdayBook').style.width = '300px';
        document.querySelector('.birthdayBook').style.height = '400px';
    }
});
