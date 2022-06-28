document.querySelector('header a').addEventListener('mouseover', () => {
   document.querySelector('  div span').className = '   bi bi-chevron-right';

   document.querySelector('  div span').style.color = '#000'

 
   document.querySelector(' header a').style.background = 'yellow';

   document.querySelector('header a').style.color='#000'

   
   document.querySelector(' header div' ).style.textAlign='center'

})
document.querySelector('header a').addEventListener('mouseout', () => {
   // transition: 1s all ease-in;
//   transform: translateX(30px);
  
document.querySelector(' header a').style.background = 'deeppink';

document.querySelector('header a').style.color='#333'

   document.querySelector('  div span').className = ' ';

})



// document.querySelector('#show_A').addEventListener('mouseout', () => {
//    const hobbiedBtn = document.querySelector('#show_A');
//    hobbiedBtn.style.background = 'lime';
//    hobbiedBtn.style.color = '#000';
// })



// document.querySelector('#hobbies a').addEventListener('mouseout', () => {
//    const span_in_a=document.querySelector('#hobbies a span')
//    span_in_a.className='bi bi-hand-index'
// })



// document.querySelector('#hobbies a').addEventListener('mouseout', () => {
//    const span_in_a=document.querySelector('#hobbies a span')
//    span_in_a.className=''
// })



// document.querySelector('header a').addEventListener('click', () => {
//    if (document.querySelector('#btm-section .A1').style.display === 'block') {
//    window.open('https://hookahjohn.com')
   
//    }
// })



// const header_animation = () => {
//    const hobbies_a_link = document.querySelector('header a');
//    const hobbie_appear_pos = hobbies_a_link.getBoundingClientRect().top
//    const screen_position = innerHeight
   
//    if (hobbie_appear_pos < screen_position) {
//       hobbies_a_link.classList.add('appearTransition')
//    }
// }


// addEventListener('scroll', header_animation)


const functionArrow = () => {
  setTimeout(() => {
   const link_hobbs = document.querySelector('#hobbies_i_like a');
   // console.log(link_hobbs);
   const get_bounding_pos = link_hobbs.getBoundingClientRect().top;
   const height_is = innerHeight;
   // console.log(get_bounding_pos);
   if (get_bounding_pos < height_is) {
      link_hobbs.classList.add('body_see')
   }
  }, 3000);
}

    
      



functionArrow()
    addEventListener('scroll', functionArrow);
