const animationConfig = {
    idle: {
        src: "gif/character/idle.gif",
        scale: 2,
        x: -50,
        y: 0
    },

    attack: {
        src: "gif/character/attack.gif",
        scale: 3.5,
        x: 50,
        y: 40
    },

    hit: {
        src: "gif/character/hit.gif",
        scale: 1.7,
        x: 30,
        y: 30
    },

    dead: {
        src: "gif/character/dead.gif",
        scale: 2.7,
        x: 60,
        y: -150
    },

    skill: {
        src: "gif/character/until.gif",
        scale: 3.3,
        x: -70,
        y: -20
    }
};


// CATEGORY

const categoryButtons = document.querySelectorAll('.category-btn');

const contents = document.querySelectorAll('.animation-content');

categoryButtons.forEach(button => {

    button.addEventListener('click', () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove('active'));

        contents.forEach(content =>
            content.classList.remove('active'));

        button.classList.add('active');

        document
            .getElementById(button.dataset.target)
            .classList.add('active');

    });

});

// CHARACTER STATE

const preview = document.getElementById('characterPreview');

document
    .querySelectorAll('.anim-tab')
    .forEach(tab => {

        tab.addEventListener('click', () => {

            document
                .querySelectorAll('.anim-tab')
                .forEach(t =>
                    t.classList.remove('active'));

            tab.classList.add('active');

            preview.src = tab.dataset.gif;

        });
    });


const tabs = document.querySelectorAll(".anim-tab");

function ShowAnimation(animationName)
{
    const data = animationConfig[animationName];

    preview.style.opacity = 0;

    preview.onload = () =>
    {
        preview.style.transform =
            `translate(${data.x}px, ${data.y}px)
             scale(${data.scale})`;

        preview.style.opacity = 1;
    };

    preview.src = data.src;
}

tabs.forEach(tab =>
{
    tab.addEventListener("click", () =>
    {
        tabs.forEach(t =>
            t.classList.remove("active"));

        tab.classList.add("active");

        ShowAnimation(
            tab.dataset.animation);
    });
});

ShowAnimation("idle");