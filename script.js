// let menuList = document.getElementById('menuList');
// let menuIcon = document.querySelector('.menu-icon');
// function togglemenu(){
//   menuList.style.display = 'grid';
// }
// menuList.style.maxwidth = '0px';
// function togglemenu(){
//   if(menuList.style.maxHeight == 'opx'){
//     menuList.style.maxHeight = '30px';
//   }
//   else{
//     menuList.style.maxHeight = '0px'
//   }
// }
document.getElementById('toggle-menu').addEventListener('click', function(){
  let menuList = document.querySelector('#menuList');
  menuList.classList.toggle('open');
  // if (menuList.style.right === '0px'){
  //   menuList.style.right = '-350px';
  // }else{
  //   menuList.style.right = '0px';
  // }
})
document.getElementById('close-menu').addEventListener('click', function(){
  let menuList = document.querySelector('#menuList');
  menuList.classList.toggle('close');
});