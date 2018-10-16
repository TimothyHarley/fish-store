// Filter fish that are "on sale"

// Add fish to "Basket"

const writeFishes = (arrayOfFishes) => {
    let domString = '';
    arrayOfFishes.forEach((fish)=> { //in the dollar sign brackets is asking if "onSale" is true//
        domString += `
        <div class="${fish.onSale ? 'on-sale' : ''} card col-md-6 col-md-offset-3">
                <div class="thumbnail">
                    <img src="${fish.imageSoure}"
                        alt="" width="40%">
                    <div class="caption">
                        <h3 id="thumbnail-label">${fish.name}</h3>
                        <p>$
                            <span class="price">${fish.basePrice}</span>
                        </p>
                    </div>
                    <div class="caption card-footer">
                        <button class="add btn btn-danger">Add To Basket</button>
                    </div>
                </div>
            </div>
        `
    })
    //write to the available div
    $('#available').append(domString);
}

// Load Fish
$.get('../db/fishes.json')
    .done((data)=> {
        console.log(data);
        writeFishes(data.fishes);
    })
    .fail((error)=> {
        console.error(error);
    });

