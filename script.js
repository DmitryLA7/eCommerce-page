let menuItems = document.getElementById('menuItems')
let menuIcon = document.getElementById('suck')
menuItems.style.maxHeight = '0px'

menuIcon.addEventListener('click', function(){

  if(menuItems.style.maxHeight == '0px'){
      menuItems.style.maxHeight = '200px'
  }
  else{
    menuItems.style.maxHeight = '0px'
  }
})
