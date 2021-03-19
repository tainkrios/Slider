const pic = document.querySelector('.page-2__img');
const area = document.querySelector('.page-2_area');
const time = document.querySelector('.page-2_time');
const cost = document.querySelector('.page-2_cost');
const city = document.querySelector('.page-2_city');
const next = document.querySelector('.arrowright');
const prev = document.querySelector('.arrowleft');
const navigateSection = document.querySelectorAll('.page2Navigate a');
const circle = document.querySelectorAll('.circle');
let startIndex = 0;

const slide = [{
    pic: '/images/image_0.jpg',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
  },
  {
    pic: '/images/image_1.jpg',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
  },
  {
    pic: '/images/image_2.jpg',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
  }
];

let currentIndex = slide.length;

const activeDot = (circle, dot) => {
  circle.forEach((dot) => {
    dot.classList.remove('enabled');
  });
  dot.classList.add('enabled');
};

const activeNav = (navigateSection, nav) => {
  navigateSection.forEach((nav) => {
    nav.classList.remove('isactive');
  });
  nav.classList.add('isactive');
};

let slider = (index) => {
  pic.src = slide[index].pic;
  city.innerHTML = slide[index].city;
  area.innerHTML = slide[index].area;
  time.innerHTML = slide[index].time;
  cost.innerHTML = slide[index].cost;
  activeDot(circle, circle[index]);
  activeNav(navigateSection, navigateSection[index]);
};

next.addEventListener('click', () => {
  if (startIndex === currentIndex - 1) {
    startIndex = 0;
  } else {
    startIndex += 1;
  }
  slider(startIndex);
});

prev.addEventListener('click', () => {
  if (startIndex === 0) {
    startIndex = currentIndex - 1;
  } else {
    startIndex -= 1;
  }
  slider(startIndex);
});

navigateSection.forEach((item, i) => {
  item.addEventListener('click', () => {
    slider(i);
  });
});


circle.forEach((item, i) => {
  item.addEventListener('click', () => {
    slider(i);
  });
});