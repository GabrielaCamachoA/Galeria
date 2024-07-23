document.addEventListener("DOMContentLoaded", function() {
    const ButtonFilter = document.querySelectorAll(".filter-btn");
    const gallery = document.querySelectorAll(".item");

    ButtonFilter.forEach(button => {
        button.addEventListener("click", () => {
            ButtonFilter.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filterImg = button.getAttribute("data-filter");

            gallery.forEach(item =>{
                if (filterImg === 'all' || item.classList.contains(filterImg)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});