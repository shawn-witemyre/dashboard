fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`;
  });

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw Error("Something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `;
  })
  .catch((err) => console.error(err));
