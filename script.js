document.getElementById("f1").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "01 Juniperus Communis - The berries are in fact not berries at all but pine cones of the female tree! The classic and must have gin ingredient - piney, floral and woody. An unmistakable flavour and smell."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/juniper_6ae8b42c-29da-4835-b7d1-52cfb99a27f9_1024x1024.png?v=1649241613')"
    // document.getElementById("fdiv").style.transition = "rotate(90deg)";
})
document.getElementById("f2").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "02 Coriandrum Sativum - Not the fresh leaves that some can eat and taste soap, but the dried fruits - coriander seeds. Giving a nutty, warm, spicy and lemony citrus flavour. Evidence suggests that coriander has been cultivated since at least the second millennium BC"
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Coriander_1_1024x1024.png?v=1647345938')"
})
document.getElementById("f3").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "03 Angelica Archangelica - The root, once distilled gives a wonderful earthy flavour. Slightly bitter with herbal tones it has a real aromatic characteristic and works in perfect harmony with juniper and coriander. The triumpervate."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Angelica_2_1024x1024.png?v=1647346040')"
})
document.getElementById("f4").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "04 Citrus Limon - The taste is tart, but fresh and quite delicious, though its flavour is frontloaded and doesn’t linger on the palate. The oils contained in the peel have a higher citral and limonene content than the juice itself giving a stronger “lemon” flavour"
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Lemon_5_1024x1024.png?v=1647346090')"
})
document.getElementById("f5").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "05 Citrus Sinensis - The word orange derives from the Sanskrit word for Just like lemons, the flavours in the peel are at their most concentrated especially once dried. Using sweet oranges, adds a sharp, tangy quality but with lovely underlying sweetness."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Orange_5_1024x1024.png?v=1647346123')"
})
document.getElementById("f6").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "06 Arctium Lappa Radix Bardanae - Traditionally used in Britain as a flavouring in the herbal drink “dandelion and burdock” it belongs to the sunflower family. A pungent flavour but one that is very crisp, sweet and mild."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Burdock_4_1024x1024.png?v=1647344121')"
})
document.getElementById("f7").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "07 Gentianaceae - The name is a tribute to Gentius, an Illyrian king, who may have been the discoverer of its tonic properties. Complex and aromatic with notes of bittersweet herbs and subtle accents of vanilla, candied orange and spice with a delicately bitter finish."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Gentian_Root_5_be418732-0938-4d0c-b1c6-34c664fd862d_1024x1024.png?v=1647352569')"
})
document.getElementById("f8").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "08 Foeniculum Vulgare - Similar in flavour to licorice or anise, fennel has a fresh and earthy taste which adds a real savoury depth to the more bitter botanicals."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Fennel_2_ba079967-7dd7-4a28-a0df-4e6de7af508c_1024x1024.png?v=1647346297')"
})
document.getElementById("f9").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "09 Artemisia Absinthium - A herbaceous perennial plant with fibrous roots, as it’s Latin names suggests is the main flavouring behind the Green Fairy! The classic anise bitter."
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Wormwood_1_8a790fa4-84e7-4118-8561-0042a36a00e6_1024x1024.png?v=1647346338')"
})
document.getElementById("f10").addEventListener("mouseover", (e) => {
    document.getElementById("fc").innerText = "10 Rhizoma Iridis - Once distilled it retains its floral notes, but develops a distinct earthy and woody flavour which lingers long in the mouth before a sweet finish. It had the common name of Queen Elizabeth Root because of its historical use for feminine power, love and as a divination pendulum!"
    document.getElementById("fdiv").style.backgroundImage = "url('https://decemdrinks.com/cdn/shop/files/Orris_Root_5_1024x1024.png?v=1647346469')"
})




document.getElementById("b1").addEventListener("mouseover", (e) => {
    document.getElementById("b1").style.flex = "2";
    document.getElementById("b2").style.flex = "1";
    document.getElementById("b3").style.flex = "1";
    document.getElementById("b11").style.display = "block";
    document.getElementById("b21").style.display = "none";
    document.getElementById("b31").style.display = "none";

})

document.getElementById("b2").addEventListener("mouseover", (e) => {
    document.getElementById("b1").style.flex = "1";
    document.getElementById("b2").style.flex = "2";
    document.getElementById("b3").style.flex = "1";
    document.getElementById("b11").style.display = "none";
    document.getElementById("b21").style.display = "block";
    document.getElementById("b31").style.display = "none";
})
document.getElementById("b3").addEventListener("mouseover", (e) => {
    document.getElementById("b1").style.flex = "1";
    document.getElementById("b2").style.flex = "1";
    document.getElementById("b3").style.flex = "2";
    document.getElementById("b11").style.display = "none";
    document.getElementById("b21").style.display = "none";
    document.getElementById("b31").style.display = "block";
})


document.getElementById("slider_1").addEventListener("click", (e) => {
    document.getElementById("slider_image").innerHTML = `<img src="https://decemdrinks.com/cdn/shop/products/LondonDry_Serve.png?v=1659602585" alt="#" style="height:558px;"/>`
})

document.getElementById("slider_2").addEventListener("click", (e) => {
    document.getElementById("slider_image").innerHTML = `<img src="https://decemdrinks.com/cdn/shop/products/LondonDry_Front_1024x1024.png?v=1659602585" alt="#" style="height:558px;"/>`
})

document.getElementById("slider_3").addEventListener("click", (e) => {
    document.getElementById("slider_image").innerHTML = `<img src="https://decemdrinks.com/cdn/shop/products/LondonDry_Back_1024x1024.png?v=1659602585" alt="#" style="height:558px;"/>`
})
// document.getElementById("slider_1").innerHTML = "<style='height:1000px'>";



// var coll = document.getElementsByClassName("collapsible_taste");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

// var coll = document.getElementsByClassName("collapsible_description");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//       document.getElementsByClassName("collapsible_serve").style.display="none";
//     }
//   });
// }



// var coll = document.getElementsByClassName("collapsible_serve");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//     document.getElementById("collapsible_taste").style.display = "none";
//   });
// }

document.getElementById("collapsible_description").addEventListener("click",(e)=>{
    document.getElementById("cdd").style.display="block";
    document.getElementById("ctd").style.display="none";
    document.getElementById("csd").style.display="none";
})
document.getElementById("collapsible_taste").addEventListener("click",(e)=>{
    document.getElementById("cdd").style.display="none";
    document.getElementById("ctd").style.display="block";
    document.getElementById("csd").style.display="none";
})
document.getElementById("collapsible_serve").addEventListener("click",(e)=>{
    document.getElementById("cdd").style.display="none";
    document.getElementById("ctd").style.display="none";
    document.getElementById("csd").style.display="block";
})


var slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}