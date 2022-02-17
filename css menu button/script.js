let menutoggle = document.querySelector(".toggle");

const handleClick = () => {
    menutoggle.classList.toggle("active");
}

menutoggle.addEventListener("click", handleClick);