function adjustLine(from, to, line) {
  let top;
  let left;
  const fT = from.offsetTop + from.offsetHeight / 2;
  const tT = to.offsetTop + to.offsetHeight / 2;
  const fL = from.offsetLeft + from.offsetWidth / 2;
  const tL = to.offsetLeft + to.offsetWidth;
  const CA = Math.abs(tT - fT);
  const CO = Math.abs(tL - fL);
  const H = Math.sqrt(CA * CA + CO * CO);
  let ANG = (180 / Math.PI) * Math.acos(CA / H);

  if (tT > fT) {
    top = (tT - fT) / 2 + fT;
  } else {
    top = (fT - tT) / 2 + tT;
  }
  if (tL > fL) {
    left = (tL - fL) / 2 + fL;
  } else {
    left = (fL - tL) / 2 + tL;
  }

  if (
    (fT < tT && fL < tL) ||
    (tT < fT && tL < fL) ||
    (fT > tT && fL > tL) ||
    (tT > fT && tL > fL)
  ) {
    ANG *= -1;
  }
  top -= H / 2;

  line.style.transformOrigin = `rotate(${ANG}deg)`;
  line.style.transform = `rotate(${ANG}deg)`;
  line.style.top = `${top}px`;
  line.style.left = `${left}px`;
  line.style.height = `${H}px`;
}

export default adjustLine;
