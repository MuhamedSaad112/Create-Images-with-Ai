const api = "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";
const input = document.getElementById('input');
const images = document.querySelector('.images');

const getImages = async () => {
  try {
    const methods = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api}`
      },
      body: JSON.stringify({
        "prompt": input.value,
        "n": 4,
        "size": "512x512",
      }),
    };

    const res = await fetch(
      "https://api.openai.com/v1/images/generations",
      methods
    );

    const data = await res.json();

    if (data && data.data) {
      const listImages = data.data;
      images.innerHTML = '';
      listImages.forEach(photo => {
        const container = document.createElement("div");
        images.append(container);
        const img = document.createElement("img");
        container.append(img); 
        img.src = photo.url;
      });
    } else {
      console.error("No data or images found.");
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
};
