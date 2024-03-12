function ShowNav(){
  var nav = document.getElementById("nav");
  var bg = document.getElementById("navbg");
  if (nav.style.display != "flex") {
    nav.style.display = "flex";
    bg.style.display = "block";
  } else {
    nav.style.display = "none";
    bg.style.display = "none";
  }
}





  var check = check + 1

window.onload = () => {
   var headTag = document.getElementsByTagName('body')[0]
  const linkforCSSfile = document.createElement("link");
  if (check > 1) {
    linkforCSSfile.href = z
 } else {
   linkforCSSfile.href = "dark.css"
  }
  linkforCSSfile.type = 'text/css'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
   var check = check + 1
 };




light = () => {
  var headTag = document.getElementsByTagName('body')[0]
  const linkforCSSfile = document.createElement("link");
  linkforCSSfile.href = 'light.css'
  linkforCSSfile.type = 'text/css'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
  var z = "light.css"
  var check = check + 1
};

dark = () => {
  var headTag = document.getElementsByTagName('body')[0]
  const linkforCSSfile = document.createElement("link");
  linkforCSSfile.href = 'dark.css'
  linkforCSSfile.type = 'text/css'
  linkforCSSfile.rel = 'stylesheet'
  headTag.appendChild(linkforCSSfile);
  document.body.appendChild(headTag);
  var z = "dark.css"
  var check = check + 1
};