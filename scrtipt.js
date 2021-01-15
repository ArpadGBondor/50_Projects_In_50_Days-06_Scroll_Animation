const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerTop = (window.innerHeight / 20) * 1;
  const triggerBottom = (window.innerHeight / 20) * 19;

  boxes.forEach((box) => {
    const { top: boxTop, bottom: boxBottom } = box.getBoundingClientRect();
    if (boxBottom > triggerTop && boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
