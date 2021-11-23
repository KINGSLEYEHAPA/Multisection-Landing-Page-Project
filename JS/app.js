const clubNews = [ {title:"Arsenal goes to Abuja",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias atque veritatis in voluptatum et!",
                     img: "Assets/champions.webp" },
                     {title:"Arsenal goes to Kano",
                     description: "Lorem r adipisicing elit. Qui alias atque veritatis in voluptatum et!. Lorem r adipisicing elit. Qui alias atque veritatis in volupt",
                      img: "Assets/fans.png" },
                      {title:"Arsenal goes to Calabar",
                      description: "Lorem Qui alias atque veritatis in voluptatum et! Lorem r adipisicing elit. Qui alias atque veritatis in volupt Lorem r adipisicing elit. Qui alias atque veritatis in volupt",
                       img: "Assets/fans.png" }];


                    //    Get Elements
                    
                    let currentItem=0;
                    
                    const eventTitle= document.querySelector(".event-title");
                    const eventDescription= document.querySelector(".description");
                    const eventImage= document.querySelector(".event-img");
                    const prevBtn= document.querySelector(".prev-btn");
                    const nextBtn= document.querySelector(".next-btn");


                    //Show previous news 

                    prevBtn.addEventListener("click", function(){

                        currentItem--;
                        if (currentItem<0){
                            currentItem=clubNews.length-1;



                        }

                        changeContent(currentItem);

                    })

                    //Show next news

                    nextBtn.addEventListener("click", function(){
                        currentItem++
                        if(currentItem>clubNews.length-1){
                            currentItem=0;
                        }

                        changeContent(currentItem);








                    })

                    //Automatic news display
                    randomNewsItem=Math.floor(Math.random()*clubNews.length);

                    setInterval(changeContent(randomNewsItem),1000);




                    function changeContent(currentItem){
                        let item = clubNews[currentItem];
                        eventTitle.textContent =item.title;
                        eventDescription.innerHTML = item.description;
                        eventImage.src=item.img;
                    }




