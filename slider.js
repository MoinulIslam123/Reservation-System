document.addEventListener("DOMContentLoaded", function () {
    const sliderContent = `
    <div class="container">
        <div class="slide">
            <div class="item" style="background-image: url(https://i.ibb.co/qCkd9jS/img1.jpg);">
                <div class="content">
                    <div class="name">Switzerland</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg);">
                <div class="content">
                    <div class="name">Singapore</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(https://images.pexels.com/photos/1074442/pexels-photo-1074442.jpeg);">
                <div class="content">
                    <div class="name">Thailand</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?);">
                <div class="content">
                    <div class="name">Dubai</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(https://images.pexels.com/photos/3546189/pexels-photo-3546189.jpeg);">
                <div class="content">
                    <div class="name">Venice</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
            <div class="item" style="background-image: url(https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg);">
                <div class="content">
                    <div class="name">Greece</div>
                    <div class="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                    <button>See More</button>
                </div>
            </div>
        </div>
        <div class="button">
        <button class="prev"><span class="sp"><</span></button>
        <button class="next">></i></button>
    </div>
`;

const sliderSection = document.getElementById("special-section");

if (sliderSection) {
    sliderSection.innerHTML = sliderContent;
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});
});