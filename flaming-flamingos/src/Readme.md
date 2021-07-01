

####### Brief Description of Flaming Flamingos 
Flaming Flamingos is a department store. The store sells electronics, clothing, and jewelry. Each category has a link provided for you to navigate easily through the site. There is also a fun link that navigates to a page with Rick and Morty episode photos.  

###### Inspiration  for the project
I was inspired to create this shopping experience project because. I generally love to go shopping online, and I wanted to build one myself. I often went to sites and everything tended to be hard to navigate. There were times where I found myself frustrated about the user experience. So I decided as a project to recreate a shopping experience that I thought would be easy to navigate and user friendly. My main goal was to have a clean and simple page. I never done a project with react before so this was something I was excited about and ultimately inspired me to use react in this project. 

###### My MVP Goals
Have a nav with all the components linked to it.
I did not want the clothing / products to just be rendered onto the page immediately.
 The components must each act as a source of it’s own being that they were different categories.
Have at least one API fetch call to render the required info for the clothing, electronics, and jewelry.
######- Stretch Goals
To have another component composed of another API call for some Rick and Morty  Fun. ( I had this idea come to me, when some of the stores I had often visited online, always have a page for random photos of customers, and since I don’t have actual testimonials from customers, I decided to have a little fun.)
Have a cart with some functionality, where you click remove for all the items in the cart.
I would like to add music to my homepage just for some fun. 
Implement useRedux.
Use Bootstrap.

###### Complications during the project
I encountered a few things when diving into this project.I originally had built out  a wireframing 
 where I had drawn out my components and what they were going to include in them. Although I had everything mapped out on paper, I didn’t realize so many things were just stuck on the page. So I decided to move the logo I created into the component Header, where the body image lives. Another hiccup I had faced was in the components.  I had my useEffect and useState set in App.js, since all my components would need the information being passed from the API, I did not realize that although the props were deconstructed, it still posed an issue. I wasn’t able to render the information, I kept getting a blank copy of the array stored in the useState. I needed an if statement to say, if the length of this array is equal to zero then inform the user “loading…”, and if it did have all the props then return the next step. I also realized I needed to use a .map(). I needed to use this function to map over every element in the array and return to me the image, the title, the price. I noticed looking over the items I had received from the API call wasn’t also categorized the way I  liked, everything was kind of scattered. I was worried. After a long time, thinking through some logic, I thought to myself, this is a lot of calls to this API. As some of you know, fetching multiple times from an API, we’re often limited to the amount of calls we make before getting blocked, or worse, your page is super slow to load, all that memory space. So I decided to use the filter method, as some of you might know, you can’t really change the props that are being passed.  I have to create a variable for just the clothing items matching “men’s clothing || women’s clothing”. I had adapted this idea for the other components that were specifically just those items.In the midst of figuring everything out and working through the problems I encountered, I finally reached my MVP. I had  started to work on building out my cart. The first thing that came to me was to create an add button on each component that sold items. Not only did I not have a cart yet, it was time to make one.  The next step was to have an event listener. After some long extensive research and some thinking, it dawned on me that I needed a useReducer(). So I created a function with a switch statement to deliver the action on hand. I soon then looked over my code, and I needed to pass some type of values for these components to access the data all up the tree of hierarchy of the application. Since all the components, other than the Rick & Morty page, it was the smartest thing to do. I had some problems trying to pass the function over as a prop, but I kept getting an error. I then implemented the useContext where I was easily able to access the useContext so that the cart can then use the data throughout the different components. I did not use the useContext correctly in the beginning and was trying to call the whole function rather than the function of what the dispatch was executing. I was not  sure what needed to  be passed along, so I drew out another tree with the components and walked through my thought process. Some styling also caused me to have some hard time styling, using bootstrap there were alot of things being overridden by Bootstraps styling. In order for me to fix those issues, I had to go to Google Chrome’s inspector and check the elements to see where the styles were applied. 
	These things made me understand React just a bit better. I had read documentation after documentation in order for myself to be well versed in this specific topic. I  have never done a project this dynamic. I have a few things I  would like to perfect over time. 

###### Technologies Used.
    1. Javascript
    2. React
    3. CSS

###### Getting started.
    1.Fork 
    2. Clone down the repo.
    3. Once it’s in your remote repository, cd into the file (make sure you're in the react file).  4. 4. Install dependencies.
    5.Yarn add react-bootstrap. 
    6.Yarn add react-router-dom.
    7.Once you have the dependencies on the forked and clone version in your remote repository, run Yarn start. 
    8.If you notice, your package.json file should have all the dependencies and their versions listed under the dependencies.
    9.Another thing you can notice is that  your file should have a yarn.lock, and  the node modules. 
    10. You should be set to go after these.

###### Contribution Guidelines.
You can add and increment (+)  and decrement (-) amount for the cart purchases on each item
Add some music to the homepage or the Rick and Morty page.
There can be other components to build out the store more, like shoes, and bags. 
Validation for the cart component like the card used and their email info. 
Some styling, instead of using Bootstrap and creating  a card for each item in your own css styling and making it web-responsive.

###### A special thank you to the API creators that made it possible to make this project come together:
1.  https://fakestoreapi.com/ created by  MohammadReza Keikavousi
2. https://rickandmortyapi.com/ created by Axel Fuhrmann 2021


