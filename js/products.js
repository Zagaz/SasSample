
    myProducts();
function myProducts(){

    const url = "https://dummyjson.com/products?limit=12";
    
    fetch(url)
      .then(response => response.json())
      .then(data => data['products'])
      .then (data =>{
        const divProducts = document.querySelector("#products");

        data.map((item) => {
            //card
            card = document.createElement("div");
            card.setAttribute ('id' ,"card_" + item.id)
            card.setAttribute ('class' , "card")
            //Thumb
            thumb = document.createElement ("img");
            thumb.setAttribute ('id' , "img_" + item.id)
            thumb.setAttribute ('src' , item.thumbnail)
            thumb.setAttribute ('class' , "thumbnail")
            

            // Title
            title = document.createElement("h1")
            title.setAttribute("id", "title_" + item.id)
            title.setAttribute("class", "title")
            title.innerHTML = item.title;
            
            // Description
            description = document.createElement("p");
            description.setAttribute("id", "description_" + item.id)
            description.setAttribute("class", "description")
            description.innerHTML = item.description;

            //Price
            price = document.createElement("h3");
            price.setAttribute("id", "price_" + item.id)
            price.setAttribute("class", "price")
            price.innerHTML = item.price;


            card.appendChild(title)
            card.appendChild(thumb)
            card.appendChild(description)
            card.appendChild(price)
            divProducts.appendChild(card);

        })

        

      

        
      })
      
      

      
      
      
     
}




            