fetch(`https://api.unsplash.com/photos?per_page=12`, {
    headers: {'Authorization': 'Client-ID 2vqpX83uFEKv0dDseumwYo4cF9dm5atv6bdQUj0fgYU'}
})
    .then(res => res.json())
    .then(data => viewImages(data))
    .catch(error => console.error(error));

const gridImages = document.querySelector('.grid_images');
function viewImages(response) {
    console.log(response)
    const images = response;

    images.forEach(item => {
        const imgWrapper = document.createElement('div');
        imgWrapper.classList.add('img_Wrapper')
        const img = document.createElement('img');
        img.src = item.urls.small;
        imgWrapper.append(img);
        gridImages.append(imgWrapper);
    })
}