const cardsContainer = document.querySelector('.news-cards');

//Fetch posts from API
async function getNews() {
    const res = await fetch(
        'https://mocki.io/v1/4cc63346-9ded-4f50-9011-ad0d01e86761'
    );
    const data = await res.json();

    return data;
}

//Show posts in DOM
async function showNews() {
    const news = await getNews();

    news.forEach((data, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
    <a href="${data.link}"><div class="number">${index + 1}</div></a>
      <div class="post-info">
        <h2 class="title">${data.title}</h2>
      </div>
      `;
        cardsContainer.appendChild(postElement);
    });
}
showNews();