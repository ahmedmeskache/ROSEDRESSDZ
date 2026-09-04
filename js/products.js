window.ROSEDRESS = window.ROSEDRESS || {};

var PX = "https://images.pexels.com/photos/";

ROSEDRESS.PROD_IMG = PX + "35463633/pexels-photo-35463633.jpeg?auto=compress&cs=tinysrgb&w=900";

ROSEDRESS.IMG_BY_CAT = {
  "new-arrivals":  PX + "35463633/pexels-photo-35463633.jpeg?auto=compress&cs=tinysrgb&w=900",
  "dresses":       PX + "31974752/pexels-photo-31974752.jpeg?auto=compress&cs=tinysrgb&w=900",
  "evening":       PX + "37068087/pexels-photo-37068087.jpeg?auto=compress&cs=tinysrgb&w=900",
  "modest":        PX + "32272078/pexels-photo-32272078.jpeg?auto=compress&cs=tinysrgb&w=900",
  "accessories":   PX + "34997536/pexels-photo-34997536.jpeg?auto=compress&cs=tinysrgb&w=900",
  "fragrance":     PX + "30463181/pexels-photo-30463181.jpeg?auto=compress&cs=tinysrgb&w=900"
};

ROSEDRESS.IMG = {
  p1:  PX + "35324598/pexels-photo-35324598.jpeg?auto=compress&cs=tinysrgb&w=900",
  p2:  PX + "37068087/pexels-photo-37068087.jpeg?auto=compress&cs=tinysrgb&w=900",
  p3:  PX + "33539326/pexels-photo-33539326.jpeg?auto=compress&cs=tinysrgb&w=900",
  p4:  PX + "35463633/pexels-photo-35463633.jpeg?auto=compress&cs=tinysrgb&w=900",
  p5:  PX + "31974752/pexels-photo-31974752.jpeg?auto=compress&cs=tinysrgb&w=900",
  p6:  PX + "29352053/pexels-photo-29352053.jpeg?auto=compress&cs=tinysrgb&w=900",
  p7:  PX + "32272078/pexels-photo-32272078.jpeg?auto=compress&cs=tinysrgb&w=900",
  p8:  PX + "34997536/pexels-photo-34997536.jpeg?auto=compress&cs=tinysrgb&w=900",
  p9:  PX + "32101064/pexels-photo-32101064.jpeg?auto=compress&cs=tinysrgb&w=900",
  p10: PX + "30463181/pexels-photo-30463181.jpeg?auto=compress&cs=tinysrgb&w=900",
  p11: PX + "14238877/pexels-photo-14238877.jpeg?auto=compress&cs=tinysrgb&w=900",
  p12: PX + "36707016/pexels-photo-36707016.jpeg?auto=compress&cs=tinysrgb&w=900"
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
  {id:"p10", name:"Oud Noir Parfum",    cat:"fragrance",   price:5800,  tag:"",   img:"fragrance"},
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