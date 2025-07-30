fetch('len.txt')  // Replace with your actual file path
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
  })
  .then(text => {
    Latest = text.length - 1;
    let img = document.getElementById('curimg');
    img.src = "./pic/" + Latest.toString() + ".jpg";
    imgdiv.appendChild(img);
  })
  .catch(error => {
    console.log(error.message);
  });

document.getElementById('viewTimelapse').addEventListener('click', () => {
  // Get selected radio button value
  const selected = document.querySelector('input[name="timeSpan"]:checked');

  if (selected.value == "Week") {
    Timelapse(7);
  } else if (selected.value == "Month") {
    Timelapse(31);
  } else if (selected) {
    Timelapse(Latest);
  } else {
    alert('Please select a time span first.');
  }
});

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Timelapse(duration) {
  let img = document.getElementById('curimg');
  let start = Latest - duration;

  while (start <= Latest) {
    img.src = "./pic/" + start.toString() + ".jpg";
    console.log("showing:", img.src);
    await wait(100);
    start += 1;
  }
}

