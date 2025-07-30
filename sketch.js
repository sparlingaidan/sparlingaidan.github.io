let Latest = 0;
let db;

// Open or create the database
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ImageCacheDB', 1);

    request.onupgradeneeded = event => {
      const db = event.target.result;
      db.createObjectStore('images');
    };

    request.onsuccess = event => {
      db = event.target.result;
      resolve();
    };

    request.onerror = event => {
      reject('DB error: ' + event.target.errorCode);
    };
  });
}

// Save image to IndexedDB
function saveImageToDB(index, blob) {
  const tx = db.transaction('images', 'readwrite');
  const store = tx.objectStore('images');
  store.put(blob, index.toString());
}

// Get image from IndexedDB
function getImageFromDB(index) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('images', 'readonly');
    const store = tx.objectStore('images');
    const request = store.get(index.toString());

    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject('Error retrieving image ' + index);
    };
  });
}

// Preload all images, caching in IndexedDB if needed
async function preloadImages(start, end) {
  for (let i = start; i <= end; i++) {
    const exists = await getImageFromDB(i);
    if (!exists) {
      const response = await fetch('./pic/' + i + '.jpg');
      if (response.ok) {
        const blob = await response.blob();
        saveImageToDB(i, blob);
      }
    }
  }
}

fetch('len.txt')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.text();
  })
  .then(async text => {
    Latest = text.length - 1;
    await openDB();
    await preloadImages(0, Latest);
    const blob = await getImageFromDB(Latest);
    if (blob) {
      const img = document.getElementById('curimg');
      img.src = URL.createObjectURL(blob);
      imgdiv.appendChild(img);
    }
  })
  .catch(error => {
    console.log(error.message);
  });

document.getElementById('viewTimelapse').addEventListener('click', () => {
  const selected = document.querySelector('input[name="timeSpan"]:checked');

  if (selected?.value === "Week") {
    Timelapse(7);
  } else if (selected?.value === "Month") {
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
  const img = document.getElementById('curimg');
  let start = Latest - duration;

  while (start <= Latest) {
    const blob = await getImageFromDB(start);
    if (blob) {
      img.src = URL.createObjectURL(blob);
    } else {
      img.src = './pic/' + start + '.jpg';  // fallback
    }
    console.log('showing:', start);
    await wait(200);
    start += 1;
  }
}
