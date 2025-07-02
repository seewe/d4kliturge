export function extractNumber(str) {
  // Match digits after "ch_"
  const match = str.match(/ch_(\d+)/);
  if (match) {
    return Number(match[1]);
  }
  return null; // or undefined if no match found
}

// Simple fuzzy matcher (subsequence match)
export function fuzzyMatch(needle, haystack) {
  needle = needle.toLowerCase();
  haystack = haystack.toLowerCase();

  let i = 0;
  for (let char of haystack) {
    if (char === needle[i]) {
      i++;
    }
    if (i === needle.length) return true;
  }
  return false;
}

export function fuzzyHighlight(text, query) {
  let t = text;
  let q = query.toLowerCase();
  let result = "";
  let ti = 0;
  let qi = 0;

  while (ti < t.length) {
    const tc = t[ti];
    if (qi < q.length && tc.toLowerCase() === q[qi]) {
      result += `<mark>${tc}</mark>`;
      qi++;
    } else {
      result += tc;
    }
    ti++;
  }

  // Only return highlighted if all query letters matched
  if (qi === q.length) {
    return result;
  } else {
    return null; // not a match
  }
}

function watchScrollToBottom(targetId) {
  const element = document.getElementById(targetId);

  window.addEventListener("scroll", () => {
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.85;

    if (atBottom) {
      element.classList.add("at-bottom");
    } else {
      element.classList.remove("at-bottom");
    }
  });
}

export function clickCloseOffcanvas() {
  document.querySelectorAll(".offcanvas-link").forEach((link) => {
    link.addEventListener("click", () => {
      const offcanvasEl = document.getElementById("offcanvasNavbar-expand-md");
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    });
  });
}
