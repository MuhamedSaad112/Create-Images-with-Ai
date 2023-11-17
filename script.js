const api = "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";
const input = document.getElementById('input');
const images = document.querySelector('.images');
const getImages = async () => {
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
    const listImages = data.data;
    images.innerHTML = ''
    listImages.map(photo => {
      const container = document.createElement("div");
      images.append(container);
      const img = document.createElement("img");
      container.append(img); 
      img.src = photo.url;
    })
};
