const svg = document.getElementById("svg");
const width = window.innerWidth;
const height = 200;
svg.setAttribute("width", width);
svg.setAttribute("height", height);

const blades = [];

// create grass blades
for (let i = 0; i < 200; i++) {
  const x = Math.random() * width;
  const bladeHeight = 50 + Math.random() * 50;
  const curve = 10 + Math.random() * 20;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("stroke", "green");
  path.setAttribute("stroke-width", 2);
  path.setAttribute("fill", "none");

  svg.appendChild(path);

  blades.push({
    x,
    bladeHeight,
    baseCurve: curve,
    path,
    phase: Math.random() * Math.PI * 2
  });
}

function animateGrass(time) {
  blades.forEach((blade) => {
    const sway = Math.sin(time / 500 + blade.phase) * 10; // sway left/right
    const d = `M${blade.x},${height} q${blade.baseCurve + sway},-${blade.bladeHeight / 2} 0,-${blade.bladeHeight}`;
    blade.path.setAttribute("d", d);
  });

  requestAnimationFrame(animateGrass);
}

requestAnimationFrame(animateGrass);
