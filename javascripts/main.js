// Filter fish that are "on sale"

// Dynamically listen for events that happen on buttons with a class of add or remove
    //add fish
    $('body').on('click', 'button.add' , (e) => {
        //what is the div that has the fish
        const fishToMove = $(e.target).closest('.fish');
        //move that fish to the 'snagged' div
        $("#snagged").append(fishToMove);
        // button text => Remove from basket | change class - 'add' + 'remove'
        $(e.target).text('Remove from Basket').addClass('remove').removeClass('add');
    });
    //remove fish
   $('body').on('click', 'button.remove', (e) => {
        const fishToMove = $(e.target).closest('.fish');
        $('#available').append(fishToMove);
        $(e.target).text('Add to Basket').addClass('add').removeClass('remove');

    })


//write the fishes
const writeFishes = (arrayOfFishes) => {
    let domString = '';
    arrayOfFishes.forEach((fish)=> { //in the dollar sign brackets is asking if "onSale" is true//
        domString += `
        <div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">
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
    $('#available').append(domString);  //append adds this after the content that's already in the div
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

