# Project 2 - Yugioh Store Backend 

# Visit Backend
https://ygo-store-backend.herokuapp.com/

# Project Description  
A fake online card store with a deck making feature

# Technology Used  
-Node  
-MongoDB  
-Javascript  

# API Used  
https://db.ygoprodeck.com/api/v7/cardinfo.php  

# API Description  
This API keeps track of every Yugioh card Konami has made.

# Routes  
**Card Routes**  
'/' - Gets every card from the backend : GET  

'/archetype/:archetype' - Gets every card from a specific archetype (/archetype/Elemental HERO, will get every card that belongs to the Elemental HERO archetype) (Case sensitive) : GET  

'/name/:name' - Gets every card that shares the name you queried for (Not case sensitive) : GET  

'/name/exact/:name' - Gets the card that shares the exact name you queried for (Case sensitive) : GET  

'/similar/:similar' - Gets all cards that includes the query in their name (/similar/Dark, will get all cards that include "Dark" in their name) (Not case sensitive) : GET  

'/card/edit/:edit' - Finds a card by it's Konami card ID, and allows you to edit any property of that card : PUT  

**Cart Routes**  
'/cart' - Gets every card in the cart collection : GET  

'/cart/add' - Adds a card to the cart collection : POST  

'/cart/delete' - Deletes every card in teh cart cart collection : DELETE  

**Deck Routes**  
'/deck' - Gets every deck in the deck collection : GET  

'/decklist/:name' - Finds and gets a single deck based off it's name : GET  

'/deck/add' - Adds a deck to the deck collection : POST  

