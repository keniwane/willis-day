
// Create HTML overlay for 'Hello' text
const helloDiv = document.createElement('div');
helloDiv.innerText = 'Will you be my valentine? ❤️ - Ken';
helloDiv.style.position = 'absolute';
helloDiv.style.fontFamily = "'Press Start 2P', 'Courier New', monospace";
helloDiv.style.fontSize = '24px';
helloDiv.style.color = '#222';
helloDiv.style.pointerEvents = 'none';
helloDiv.style.display = 'none';
document.body.appendChild(helloDiv);

// Create Yes and No buttons
let pressEHidden = false;
const yesBtn = document.createElement('button');
yesBtn.innerText = 'Yes';
yesBtn.style.position = 'absolute';
yesBtn.style.fontFamily = "'Press Start 2P', 'Courier New', monospace";
yesBtn.style.fontSize = '18px';
yesBtn.style.padding = '8px 24px';
yesBtn.style.display = 'none';
yesBtn.style.zIndex = 10;
yesBtn.style.background = '#e0c080';
yesBtn.style.border = '4px solid #7c5c2c';
yesBtn.style.borderRadius = '0';
yesBtn.style.boxShadow = '0 0 0 2px #fff inset, 2px 2px 0 #7c5c2c';
yesBtn.style.color = '#3a2a0a';
yesBtn.style.textShadow = '1px 1px 0 #fff, -1px -1px 0 #fff';
yesBtn.style.cursor = 'pointer';
yesBtn.style.outline = 'none';
yesBtn.style.transition = 'background 0.2s, box-shadow 0.2s';
yesBtn.addEventListener('mouseenter', () => {
  yesBtn.style.background = '#fff6d6';
  yesBtn.style.boxShadow = '0 0 0 2px #fff inset, 4px 4px 0 #7c5c2c';
});
yesBtn.addEventListener('mouseleave', () => {
  yesBtn.style.background = '#e0c080';
  yesBtn.style.boxShadow = '0 0 0 2px #fff inset, 2px 2px 0 #7c5c2c';
});
document.body.appendChild(yesBtn);

const noBtn = document.createElement('button');
noBtn.innerText = 'No';
noBtn.style.position = 'absolute';
noBtn.style.fontFamily = "'Press Start 2P', 'Courier New', monospace";
noBtn.style.fontSize = '18px';
noBtn.style.padding = '8px 24px';
noBtn.style.display = 'none';
noBtn.style.zIndex = 10;
noBtn.style.background = '#e0c080';
noBtn.style.border = '4px solid #7c5c2c';
noBtn.style.borderRadius = '0';
noBtn.style.boxShadow = '0 0 0 2px #fff inset, 2px 2px 0 #7c5c2c';
noBtn.style.color = '#3a2a0a';
noBtn.style.textShadow = '1px 1px 0 #fff, -1px -1px 0 #fff';
noBtn.style.cursor = 'pointer';
noBtn.style.outline = 'none';
noBtn.style.transition = 'background 0.2s, box-shadow 0.2s';
noBtn.addEventListener('mouseenter', () => {
  noBtn.style.background = '#fff6d6';
  noBtn.style.boxShadow = '0 0 0 2px #fff inset, 4px 4px 0 #7c5c2c';
  // Move No button to random position within viewport
  const rect = canvas.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const btnWidth = 100;
  const btnHeight = 40;
  const minX = Math.max(rect.left, 0);
  const maxX = Math.min(rect.right - btnWidth, viewportWidth - btnWidth);
  const minY = Math.max(rect.top, 0);
  const maxY = Math.min(rect.bottom - btnHeight, viewportHeight - btnHeight);
  const randX = minX + Math.random() * (maxX - minX);
  const randY = minY + Math.random() * (maxY - minY);
  noBtn.style.left = Math.round(randX) + 'px';
  noBtn.style.top = Math.round(randY) + 'px';
});
noBtn.addEventListener('mouseleave', () => {
  noBtn.style.background = '#e0c080';
  noBtn.style.boxShadow = '0 0 0 2px #fff inset, 2px 2px 0 #7c5c2c';
});
document.body.appendChild(noBtn);

yesBtn.addEventListener('click', () => {
    // Play win.mp3 audio
    const winAudio = new Audio('/win.mp3');
    winAudio.play();
  // spawnFireworks();
  // Hide overlays and letter/icon
  if (letter) {
    letter.destroy();
    letter = null;
    letterSpawned = false;
  }
  if (icon) {
    icon.destroy();
    icon = null;
    iconSpawned = false;
  }
  helloDiv.style.display = 'none';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
  pressEHidden = true;

  // Create confetti overlay
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.left = '0';
  confettiContainer.style.top = '0';
  confettiContainer.style.width = '100vw';
  confettiContainer.style.height = '100vh';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '9999';
  document.body.appendChild(confettiContainer);

  // Generate confetti pieces
  const colors = ['#f9d423', '#ff4e50', '#a1ffce', '#38b2ac', '#ff6e7f', '#bfe9ff', '#fbc2eb', '#fdc2a2'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.width = '12px';
    confetti.style.height = '12px';
    confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';
    confetti.style.opacity = '0.85';
    confetti.style.transform = `rotate(${Math.random()*360}deg)`;
    confetti.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
    confetti.style.animation = `confetti-fall ${2 + Math.random()*2}s linear forwards`;
    confettiContainer.appendChild(confetti);
  }

  // Add confetti keyframes to document
  const style = document.createElement('style');
  style.innerHTML = `@keyframes confetti-fall {
    0% { opacity: 0.85; }
    80% { opacity: 0.85; }
    100% { top: 100vh; opacity: 0; }
  }`;
  document.head.appendChild(style);

  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.remove();
    style.remove();
  }, 4000);
});

// Move No button to random position when hovered
noBtn.addEventListener('mouseenter', () => {
  const rect = canvas.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const btnWidth = 100;
  const btnHeight = 40;
  // Random position within viewport, but also within canvas
  const minX = Math.max(rect.left, 0);
  const maxX = Math.min(rect.right - btnWidth, viewportWidth - btnWidth);
  const minY = Math.max(rect.top, 0);
  const maxY = Math.min(rect.bottom - btnHeight, viewportHeight - btnHeight);
  const randX = minX + Math.random() * (maxX - minX);
  const randY = minY + Math.random() * (maxY - minY);
  noBtn.style.left = Math.round(randX) + 'px';
  noBtn.style.top = Math.round(randY) + 'px';
});
import './style.css'
import {resources} from "./src/Resource.js";
import {Sprite} from "./src/Sprite.js";
import {Vector2} from "./src/Vector2.js";
import {GameLoop} from "./src/GameLoop.js";
import {Input} from "./src/Input.js";
import {gridCells} from "./src/helpers/grid.js";
import {GameObject} from "./src/GameObject.js";
import {Hero} from "./src/objects/Hero/Hero.js";
import {Camera} from "./src/Camera.js";
import {Inventory} from "./src/objects/Inventory/Inventory.js";

// Grabbing the canvas to draw to
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

// Establish the root scene
const mainScene = new GameObject({
  position: new Vector2(0,0)
})

// Build up the scene by adding a sky, ground, and hero
const skySprite = new Sprite({
  resource: resources.images.sky,
  frameSize: new Vector2(1920, 960),
  scale: 0.3,
})

const groundSprite = new Sprite({
  resource: resources.images.ground,
  frameSize: new Vector2(320, 180),
  position: new Vector2(gridCells(-3), gridCells(0))
})
mainScene.addChild(groundSprite);

const house = new Sprite({
  resource: resources.images.house,
  frameSize: new Vector2(80, 112),
  position: new Vector2(gridCells(7), gridCells(-2))
})
mainScene.addChild(house);

let icon = null;
let iconSpawned = false;
let letter = null;
let letterSpawned = false;
// Listen for E key press
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "e" && iconSpawned && !letterSpawned) {
    // Spawn letter.png above hero
 letter = new Sprite({
      resource: resources.images.letter,
      frameSize: new Vector2(1000, 180), // adjust as needed
      scale: 0.5,
      position: new Vector2(gridCells(5), gridCells(0.5))
    });
    mainScene.addChild(letter);
    letterSpawned = true;
  }
});



const mail = new Sprite({
  resource: resources.images.mail,
  frameSize: new Vector2(200, 200),
  scale: 0.3,
  position: new Vector2(gridCells(9.8), gridCells(0.5))
})
mainScene.addChild(mail);

// Bobbing animation variables
let mailBobTime = 0;
const mailBaseY = mail.position.y;


const hero = new Hero(gridCells(9), gridCells(4))
mainScene.addChild(hero);

const camera = new Camera()
mainScene.addChild(camera);

const inventory = new Inventory();


// Add an Input class to the main scene
mainScene.input = new Input();


// Establish update and draw loops
const update = (delta) => {
    // Remove letter and hide Hello text and buttons if icon is not spawned
    if (!iconSpawned && letterSpawned && letter) {
      letter.destroy();
      letter = null;
      letterSpawned = false;
      helloDiv.style.display = 'none';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';
    }
    // Show and position Hello text and buttons if letter is spawned
    if (letterSpawned && letter) {
      helloDiv.style.display = 'block';
      yesBtn.style.display = 'block';
      noBtn.style.display = 'block';
      // Position above the letter (convert game to screen coordinates)
      const rect = canvas.getBoundingClientRect();
      const x = letter.position.x + camera.position.x + rect.left + 400;
      const y = letter.position.y + camera.position.y + rect.top + 180;
      helloDiv.style.left = Math.round(x) + 'px';
      helloDiv.style.top = Math.round(y) + 'px';
      // Position Yes and No buttons below Hello
      yesBtn.style.left = Math.round(x) + 'px';
      yesBtn.style.top = Math.round(y + 40) + 'px';
      // No button starts next to Yes button
      if (noBtn.style.left === '' || noBtn.style.display === 'none') {
        noBtn.style.left = Math.round(x + 120) + 'px';
        noBtn.style.top = Math.round(y + 40) + 'px';
      }
    } else {
      helloDiv.style.display = 'none';
      yesBtn.style.display = 'none';
      noBtn.style.display = 'none';
    }
  mainScene.stepEntry(delta, mainScene);
  // Bob mail up and down
  mailBobTime += delta;
  // Bobbing amplitude and speed
  const amplitude = 1; // pixels
  const speed = 0.004; // radians/ms
  mail.position.y = mailBaseY + Math.sin(mailBobTime * speed) * amplitude;

  // Spawn or remove icon over hero's head at specific positions
  const px = hero.position.x;
  const py = hero.position.y;
  const positions = [
    {x:160, y:64},
    {x:176, y:80},
    {x:192, y:64}
  ];
  let inZone = false;
  for (const pos of positions) {
    if (Math.abs(px - pos.x) < 2 && Math.abs(py - pos.y) < 2) {
      inZone = true;
      break;
    }
  }
  if (inZone) {
    if (!iconSpawned) {
      icon = new Sprite({
        resource: resources.images.icon,
        frameSize: new Vector2(1000, 1000),
        scale: 0.02,
        position: new Vector2(px - 20, py - 300) // above hero's head
      });
      mainScene.addChild(icon);
      iconSpawned = true;
    } else {
      // Update icon position if already spawned
      icon.position.x = px;
      icon.position.y = py - 24;
    }
  } else {
    if (iconSpawned && icon) {
      icon.destroy();
      icon = null;
      iconSpawned = false;
    }
  }
};
const draw = () => {

  // Clear anything stale
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the sky
  skySprite.drawImage(ctx, 0, 0)

  // Save the current state (for camera offset)
  ctx.save();

  //Offset by camera position
  ctx.translate(camera.position.x, camera.position.y);

  // Draw objects in the mounted scene
  mainScene.draw(ctx, 0, 0);

  // Draw 'PRESS E' text above hero if icon is spawned and letter is not spawned and not hidden
  if (iconSpawned && hero && !letterSpawned && !pressEHidden) {
    ctx.save();
    ctx.font = "bold 16px 'Press Start 2P', 'Courier New', monospace";
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    const text = "PRESS E";
    const textX = hero.position.x + camera.position.x - 40;
    const textY = hero.position.y + camera.position.y + 50;
    ctx.strokeText(text, textX, textY);
    ctx.fillText(text, textX, textY);
    ctx.restore();
  }

  // Draw 'Hello' text on the letter if spawned
  // if (letterSpawned && letter) {
  //   ctx.save();
  //   ctx.font = "bold 10px 'Press Start 2P', 'Courier New', monospace";
  //   ctx.fillStyle = "#222";
  //   ctx.strokeStyle = "#fff";
  //   ctx.lineWidth = 3;
  //   // Position text centered on the letter
  //   const text = "Will you be my valentine?";
  //   const textX = letter.position.x + camera.position.x + 14;
  //   const textY = letter.position.y + camera.position.y + 10;
  //   ctx.strokeText(text, textX, textY);
  //   ctx.fillText(text, textX, textY);
  //   ctx.restore();
  // }

  // Restore to original state
  ctx.restore();

  // Draw anything above the game world
  inventory.draw(ctx, 0, 0)

}

// Start the game!
const gameLoop = new GameLoop(update, draw);
gameLoop.start();
