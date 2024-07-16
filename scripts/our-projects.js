let images;

fetch('./scripts/project-images.json')
    .then( res => {
        if(!res.ok){
            throw new Error("HTTP error! Status:" + res.status);
        }
        return res.json();
    })
    .then( data => {
        images = data;
        updateUI(images);
        updateFilters(images);
        //console.log(data);
        //Update the images container with the given data;
    })
    .catch( error => {
        console.error("Unable to fetch data:", error);
    })

const updateUI = images => {
    let container = document.getElementsByClassName("project-images")[0], innerHTML = ``, i, src;

    for(i=0; i<images.length; i++){
        for(j=0; j < images[i].images.length; j++){
            src = images[i].root;
            innerHTML += `<a class='box' href="#"><img src='./assets/${src}/${images[i].images[j].src}'/></a>`;
        }
    }

    container.innerHTML = innerHTML;
    mosaic(document.getElementsByClassName("box"), 20);
}

const updateFilters = (images, id) => {
    let i, innerHTML, filtersContainer = document.getElementsByClassName("filters")[0];
    
    if(id == undefined){
        innerHTML = `<button onclick='handleFilterClick(event)' class="active">All</button>`;
    } else {
        innerHTML = `<button onclick='handleFilterClick(event)'>All</button>`;
    }
    
    for(i=0; i<images.length; i++){
        if(images[i].id == id){
            innerHTML += `<button onclick='handleFilterClick(event)' class='active' data-id='${images[i].id}'>${images[i].name}</button>`;
        } else {
            innerHTML += `<button onclick='handleFilterClick(event)' data-id='${images[i].id}'>${images[i].name}</button>`;
        }
    }

    filtersContainer.innerHTML = innerHTML;
}

const handleFilterClick = event => {
    let i;
    updateFilters(images, event.target.dataset.id);
    
    for(i=0; i < images.length; i++){
        if(images[i].id == event.target.dataset.id){
            updateUI([images[i]]);
            break;
        }
        if(i == images.length-1){
            /**
             * If the id is not found it should display all the images
             * We'll assume he's pressed the all button
             */
            updateUI(images);
        }
    }
}