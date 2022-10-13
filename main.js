const accordeon = document.querySelector('.filter-list');
const accordeonButtons = accordeon.querySelectorAll('.filter__link');



accordeonButtons.forEach((btn) =>{
    btn.addEventListener('click', () => {
        accordeonButtons.forEach((button) =>{
            
            button.classList.remove('filter__link_active');
            button.nextElementSibling.classList.add('hidden');
            
        })


        btn.classList.toggle('filter__link_active');
        btn.nextElementSibling.classList.toggle('hidden');
    })
})