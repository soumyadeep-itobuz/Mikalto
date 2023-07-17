const navItems = document.querySelector(".nav-items");
const room = document.querySelectorAll(".room");

let roomIndex = 0;

function hamburger() {
  navItems.classList.toggle("show");
}

function showRoom(i) {
  room[i].classList.remove("hidden");
  for (let j = 0; j < i; j++) {
    room[j].classList.add("hidden");
  }
  for (let j = i + 1; j < room.length; j++) {
    room[j].classList.add("hidden");
  }
}
function previousRoom() {
  if (roomIndex === 0) {
    roomIndex = room.length - 1;
  } else {
    roomIndex = roomIndex - 1;
  }
  showRoom(roomIndex);
}

function nextRoom() {
  if (roomIndex === room.length - 1) {
    roomIndex = 0;
  } else {
    roomIndex = roomIndex + 1;
  }
  showRoom(roomIndex);
}

showRoom(roomIndex);
