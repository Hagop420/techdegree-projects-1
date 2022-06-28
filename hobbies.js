// const main_animation = () => {
//    const all_main = document.querySelector('main');
//    const main_from_window = all_main.getBoundingClientRect().top;
//    const innerH_main = innerHeight;
//    if (main_from_window < innerH_main) {
//       all_main.classList.add('body_see')
//    }
//  ;
// }
// main_animation();

// addEventListener('scroll' , main_animation)



const functionArrow = () => {
   setTimeout(() => {
      const link_a = document.querySelector('body')
   const position = link_a.getBoundingClientRect().top;
   const height_res = innerHeight;

console.log(position);
   if (position < height_res) {
        link_a.classList.add('body_see')
      }
   }, 1000);
}    


functionArrow()
addEventListener('scroll', functionArrow)