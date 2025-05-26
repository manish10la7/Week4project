// manish 1
const app = () => {
    // manish 2
    console.log("Welcome to Everwinter!");
    
    // Add interactivity or dynamic behavior here
};

// manish 3
document.addEventListener("DOMContentLoaded", app);

// manish 4
$(function() {
    // manish 5
    $('.nav-link').on('click', function(e) {
        // manish 6
        e.preventDefault();
        var target = $(this).attr('href');
        $('main section').hide();
        $(target).fadeIn(200);
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    // manish 7
    $('.nav-link[href="#home"]').addClass('active');
});

/* Add at the end of your main.css file */
@media (max-width: 600px) {
    header, main, footer {
        max-width: 98vw;
        padding: 1rem;
    }
    header h1 {
        font-size: 2rem;
    }
    nav a {
        display: block;
        margin: 10px 0;
    }
}
nav a.active {
    color: #388e3c;
    font-weight: bold;
    text-decoration: underline;
}