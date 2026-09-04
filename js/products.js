window.ROSEDRESS = window.ROSEDRESS || {};

var PX = "https://images.pexels.com/photos/";

ROSEDRESS.PROD_IMG = "images/dress_bandeau.jpg";

ROSEDRESS.IMG_BY_CAT = {
  "new-arrivals":  "images/dress_highneck.jpg",
  "dresses":       "images/dress_bandeau.jpg",
  "evening":       "images/dress_rhinestones.jpg",
  "modest":        "images/dress_mockneck.jpg",
  "accessories":   "images/bag_shoulder.jpg",
  "fragrance":     PX + "264819/pexels-photo-264819.jpeg?auto=compress&cs=tinysrgb&w=900"
};

ROSEDRESS.IMG = {
  p1:  "images/dress_mockneck.jpg",
  p2:  "images/dress_rhinestones.jpg",
  p3:  "images/dress_highneck.jpg",
  p4:  "images/dress_bandeau.jpg",
  p5:  "images/dress_lacestrap.jpg",
  p6:  "images/dress_halter.jpg",
  p7:  "images/dress_ruchedmidi.jpg",
  p8:  "images/bag_buckles.jpg",
  p9:  "images/sandals_mule1.jpg",
  p10: PX + "32645088/pexels-photo-32645088.jpeg?auto=compress&cs=tinysrgb&w=900",
  p11: PX + "14238877/pexels-photo-14238877.jpeg?auto=compress&cs=tinysrgb&w=900",
  p12: "images/dress_halterties.jpg"
};

ROSEDRESS.CATEGORIES = [
  {id:"new-arrivals", name:"New Arrivals", tag:"New"},
  {id:"dresses",      name:"Dresses"},
  {id:"evening",      name:"Evening Collection"},
  {id:"modest",       name:"Modest Collection"},
  {id:"accessories",  name:"Accessories"},
  {id:"fragrance",    name:"Fragrance"}
];

ROSEDRESS.PRODUCTS = [
  {id:"p1", name:"The Aria Abaya",      cat:"modest",      price:8900,  tag:"new", img:"modest"},
  {id:"p2", name:"Selene Evening Gown", cat:"evening",     price:16400, tag:"",   img:"evening"},
  {id:"p3", name:"Layla Chiffon Hijab", cat:"modest",      price:2400,  tag:"",   img:"modest"},
  {id:"p4", name:"Noor Day Dress",      cat:"dresses",     price:7400,  tag:"new", img:"dresses"},
  {id:"p5", name:"Amara Pleated Skirt", cat:"dresses",     price:5200,  tag:"",   img:"dresses"},
  {id:"p6", name:"Zahra Beaded Gown",   cat:"evening",     price:19800, tag:"",   img:"evening"},
  {id:"p7", name:"Ilyana Silk Abaya",   cat:"modest",      price:11200, tag:"",   img:"modest"},
  {id:"p8", name:"Lina Leather Handbag",cat:"accessories", price:6800,  tag:"new", img:"accessories"},
  {id:"p9", name:"Rima Gold Sandals",   cat:"accessories", price:3900,  tag:"",   img:"accessories"},
  {id:"p10", name:"Rose Élixir Parfum", cat:"fragrance",   price:5800,  tag:"",   img:"fragrance"},
  {id:"p11", name:"Amber Rose Eau",     cat:"fragrance",   price:4600,  tag:"new", img:"fragrance"},
  {id:"p12", name:"Nadia Embroidered Gown", cat:"evening", price:17900, tag:"",   img:"evening"}
];

ROSEDRESS.getCat = function(id){ return ROSEDRESS.CATEGORIES.find(function(c){return c.id===id;}); };
ROSEDRESS.getProduct = function(id){ return ROSEDRESS.PRODUCTS.find(function(p){return p.id===id;}); };

ROSEDRESS.img = function(p){
  var key = ROSEDRESS.IMG[p.id] || ROSEDRESS.IMG_BY_CAT[p.img] || ROSEDRESS.IMG_BY_CAT[p.cat] || ROSEDRESS.PROD_IMG;
  return key;
};

ROSEDRESS.money = function(n){
  return n.toLocaleString('en-DZ') + " DZD";
};