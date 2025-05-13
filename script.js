
    function calculateClearance() {
      const t = parseFloat(document.getElementById('thickness').value);
      let clearance = "";

      if (t >= 0.2 && t <= 0.4) clearance = t * 0.03;
      else if (t >= 0.5 && t <= 0.7) clearance = t * 0.05;
      else if (t === 0.8) clearance = t * 0.06;
      else if (t >= 0.9 && t <= 1) clearance = t * 0.07;
      else if (t > 1.1 && t <= 1.6) clearance = t * 0.08;
      else if (t >= 2 && t <= 2.3) clearance = t * 0.09;
      else if (t >= 2.6 && t <= 3.2) clearance = t * 0.10;
      else if (t >= 4.5 && t <= 5) clearance = t * 0.11;
      else if (t >= 6 && t <= 10) clearance = t * 0.12;

      const result1 = document.getElementById('clearanceResult');
      const result2 = document.getElementById('doubleResult');

      if (clearance) {
        result1.textContent = clearance.toFixed(3) + " mm";
        result2.textContent = (clearance * 2).toFixed(3) + " mm";
      } else {
        result1.textContent = "-";
        result2.textContent = "-";
      }
    }
  