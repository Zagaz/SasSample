
    myProducts();
function myProducts(){

    const url = "https://fakestoreapi.com/products";
    
    fetch(url)
      .then(response => response.json())
      //.then(data => data['products'])
      .then (data =>{
        const divProducts = document.querySelector("#products");

        data.map((item) => {
          
    
                
                //card
                card = document.createElement("div");
                card.setAttribute ('class' , "itemContainer")
                    
                    // //thumbContainer
                    // thumbContainer = document.createElement ("div");
                    // thumbContainer.setAttribute ('id' , "tc_" + item.id)
                    // thumbContainer.setAttribute ('class' , "thumbContainer")
                    
                        //Thumb
                        thumb = document.createElement ("img");
                        thumb.setAttribute ('id' , "img_" + item.id)
                        thumb.setAttribute ('src' , item.image)
                        thumb.setAttribute ('class' , "thumbnail img-fluid rounded thumbnail-image")
                    
                    //TitleContainer
                    titleContainer = document.createElement ("div");
                    titleContainer.setAttribute ('id' , "titlec_" + item.id)
                    titleContainer.setAttribute ('class' , "titleContainer")
                        // Title
                        title = document.createElement("h1")
                        title.setAttribute("id", "title_" + item.id)
                        title.setAttribute("class", "title")
                        title.innerHTML = item.title
                    
                    //PriceContainer
                    priceContainer = document.createElement ("div");
                    priceContainer.setAttribute ('id' , "price_" + item.id)
                    priceContainer.setAttribute ('class' , "priceContainer")
                        //Price
                        price = document.createElement("h3");
                        price.setAttribute("id", "price_" + item.id)
                        price.setAttribute("class", "price")
                        price.innerHTML = "$" + item.price

                //Rendering
                divProducts.appendChild(card);
                 
                    card.appendChild(thumb)  
                    card.appendChild(title)
                    card.appendChild(priceContainer)
                        priceContainer.appendChild(price)
        })

        

      

        
      })
      
      

      
      
      
     
}




            