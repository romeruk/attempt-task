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
    preffered.forEach((el) => {
      if (avaible.includes(el) && allowed.includes(el)) {
        els.push(el);
      }
    });

    if (els.length !== preffered.length) {
      const lastNumOfPreffered = preffered[preffered.length - 1];
      let closeMinimumValue = null;
      let firstGreaterValue = null;

      for (let i = els.length; i < allowed.length; i++) {
        const allowedNum = allowed[i];


        if (avaible.includes(allowedNum) && allowedNum > lastNumOfPreffered && !els.includes(allowedNum)) {
          firstGreaterValue = allowedNum;
          break;
        }

        if (avaible.includes(allowedNum) && allowedNum < lastNumOfPreffered && !els.includes(allowedNum)) {
          closeMinimumValue = allowedNum;
        }
      }

      if (closeMinimumValue != null && firstGreaterValue != null || closeMinimumValue == null && firstGreaterValue != null) {
        els.push(firstGreaterValue);
      }
      else if (closeMinimumValue != null && firstGreaterValue == null) {
        els.push(closeMinimumValue);
      }
    }
  }

  return els;
}


module.exports = attempt;