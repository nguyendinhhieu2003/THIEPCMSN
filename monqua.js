
var to = 'Thu Huệ';
var gift_url = 'https://www.facebook.com/vt.thuhue?mibextid=ZbWKwL';
var gift_image_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/383692508_611401981160567_8128508146863173371_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=_1Hz2w9_VYIAX9s19sb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRIzR1wpaps-ArDPcfV6_ej97XJQiZpLp2NMi1kXx6IvQ&oe=653A127A';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

