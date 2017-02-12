import Hammer from 'hammerjs'

const CLASS_NAMES = {
  DRAWER_CHECKBOX: '.drawer__checkbox',
  HIT_AREA: '.layout__outer-wrapper'
};

export default function Drawer() {
  let checkbox = document.querySelector(CLASS_NAMES.DRAWER_CHECKBOX);
  let hitArea = document.querySelector(CLASS_NAMES.HIT_AREA);

  let mc = new Hammer(hitArea);

  mc.on('swipe', (event) => {
    if (event.deltaX < 0) {
      hideDrawer(checkbox);
    }

    if (event.deltaX > 0) {
      showDrawer(checkbox);
    }
  });
}

function showDrawer(checkbox) {
  console.log('showDrawer');
  checkbox.checked = true;
}

function hideDrawer(checkbox) {
  console.log('hideDrawer');
  checkbox.checked = false;
}
