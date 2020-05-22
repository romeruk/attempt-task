function attempt(avaible, allowed, preffered) {
  const els = [];

  if (allowed.includes('any')) {
    preffered.forEach(el => {
      if (avaible.includes(el)) {
        els.push(el);
      }
    })
  }
  else if (preffered.includes('any')) {
    allowed.forEach(el => {
      if (avaible.includes(el)) {
        els.push(el);
      }
    })
  }
  else {
    let counter = 0;
    preffered.forEach((el, i) => {
      if (avaible.includes(el) && allowed.includes(el)) {
        els.push(el);
        counter++;
      }
    });

    if (counter !== preffered.length) {
      for (let i = preffered.length - 1; i < allowed.length; i++) {
        const allowedNum = allowed[i];
        const lastNumOfPreffered = preffered[preffered.length - 1];
        const avaibleNum = avaible[i];

        if (avaible.includes(allowedNum) && allowedNum > lastNumOfPreffered && !els.includes(avaibleNum)) {
          els.push(allowedNum);
          break;
        }
        else if (avaible.includes(allowedNum) && allowedNum < lastNumOfPreffered && !els.includes(avaibleNum)) {
          els.push(allowedNum);
          break;
        }
      }
    }
  }

  return els;
}

module.exports = attempt;