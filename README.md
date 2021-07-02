
<img width="1264" alt="Screen Shot 2021-07-01 at 6 49 46 PM" src="https://user-images.githubusercontent.com/72947727/124197702-23c89280-da9d-11eb-8bad-7743cba306c5.png">
<img width="1270" alt="Screen Shot 2021-07-01 at 6 52 54 PM" src="https://user-images.githubusercontent.com/72947727/124198157-1a8bf580-da9e-11eb-911a-54d187e22d3b.png">
<img width="1405" alt="Screen Shot 2021-07-01 at 6 56 18 PM" src="https://user-images.githubusercontent.com/72947727/124198187-2972a800-da9e-11eb-8e6a-1e3ce865b0b1.png">

# FlamingFlamingos

An online shop to make you Flaming Hot!

## Description of Flaming Flamingos 
Flaming Flamingos is a department store. The store sells electronics, clothing, and jewelry. Each category has a link provided for you to navigate easily through the site. There is also a fun link that navigates to a page with Rick and Morty episode photos.  

 #### This project was deployed to netlify, heres the link: https://gifted-perlman-16f6e4.netlify.app/


### Inspiration  for the project

I was inspired to create this shopping experience project because. I generally love to go shopping online, and I wanted to build one myself. I often went to sites and everything tended to be hard to navigate. There were times where I found myself frustrated about the user experience. So I decided as a project to recreate a shopping experience that I thought would be easy to navigate and user friendly. My main goal was to have a clean and simple page. I never done a project with react before so this was something I was excited about and ultimately inspired me to use react in this project. 

## My MVP Goals

 - Have a nav with all the components linked to it.
 - I did not want the clothing / products to just be rendered onto the page immediately.
 - The components must each act as a source of it’s own being that they were different categories.
 - Have at least one API fetch call to render the required info for the clothing, electronics, and jewelry.

## Stretch Goals

1. To have another component composed of another API call for some Rick and Morty  Fun. ( I had this idea come to me, when some of the stores I had often visited online, always have a page for random photos of customers, and since I don’t have actual testimonials from customers, I decided to have a little fun.)
2. Have a cart with some functionality, where you click remove for all the items in the cart.
3 I would like to add music to my homepage just for some fun. 
4. Implement useRedux.
5. Use Bootstrap.
###### Wireframing
[Scan.pdf](https://github.com/micheleGao/FlamingFlamingos/files/6749020/Scan.pdf)

### Complications during the project

- The API for the clothing was really categorized except for two things which were the electronics and jewelry
- Some components were not rendering properly, had to use a conditional statement.
- Building out the cart, did not realize I needed a another form component.
- Bootstrap styling with cards and buttons overriding my personal perferences for my styles.
- Creating a button for each page for the add button with the function to handle useReducer function (useContext came in handy!)
- Creating the remove button for the cart component. 


## Technologies Used.
1. Javascript
2. React
3. CSS
4. React-router-dom
5. React-Bootstrap

## Getting started.
1.Fork 
2. Clone down the repo.
3. Once it’s in your remote repository, cd into the file (make sure you're in the react file). Install dependencies.
4. Yarn add react-bootstrap. 
5. Yarn add react-router-dom.
6. Once you have the dependencies on the forked and clone version in your remote repository, run Yarn start. 
 -If you notice, your package.json file should have all the dependencies and their versions listed under the dependencies.
 -Another thing you can notice is that  your file should have a yarn.lock, and  the node modules. 
 -You should be set to go after these.

### Contribution Guidelines.
1. You can add and increment (+)  and decrement (-) amount for the cart purchases on each item
2. Add some music to the homepage or the Rick and Morty page.
3. There can be other components to build out the store more, like shoes, and bags. 
4. Validation for the cart component like the consumers card used and their email info. 
5. Some styling, instead of using Bootstrap and creating  a card for each item in your own css styling and making it web-responsive.
6. Refactor using redux. 

 ### A special thank you to the API creators that made it possible to make this project come together:
1.  https://fakestoreapi.com/ created by  MohammadReza Keikavousi
2. https://rickandmortyapi.com/ created by Axel Fuhrmann 2021
