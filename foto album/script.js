var thumbnails = document.getElementById("thumbnails");
var ditBenIk = document.getElementById("ditBenIk");
var imageNames = ["ff15.jpg",

    "ff15.jpg",
    "golf3.jpg",
    "heilige-birmaan-op-kussen.jpg",
    "heilige-birmaan.jpg",
    "hond.jpg",
    "hond2.jpg",
    "hond3.jpg",
    "landmacht.jpg",
    "pizza1.jpg",
    "pizza2.jpg",
    "sniper.jpg",
    "sniper2.jpg",
    "tank.jpg",
    "tank2.jpg",
];



ditBenIk.src = "images/" + imageNames[0];

for (let i = 0; i < imageNames.length; i++) {
    let img = document.createElement('img');
    let src = document.createAttribute('src');
    src.value = "images/" + imageNames[i];
    img.setAttributeNode(src);
    thumbnails.appendChild(img);

    img.addEventListener('click', () => {
        ditBenIk.src = "images/" + imageNames[i];


    })
}
