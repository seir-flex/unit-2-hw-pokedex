# Pokedex

# Pokedex

Your mission is to be the very best, like no one ever was, at making a Pokémon manager (a Pokédex).

### **Learning Objectives**

- Full CRUD App

### **Prerequisites**

- JavaScript
- Node / Express
- HTML / CSS

## **Getting Started**

All you are given is a pokemon.js file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). You can render this as JSON in your browser. If you decide to check it out in your text editor, don't click on or open this file unless you are prepared to wait a minute or so for it to load. It is a huge file.

It is up to you how you build your app, in what order you want to do things, what kind of design flow your app will have, where you put your delete button, etc, and what parts of the Pokémon data your pages will display.

There are a few requirements to keep in mind:

### **MVP (Minimum Viable Product)**

Your app should:

- display a bunch of Pokémon images on the index
- have separate show pages for each Pokémon, accessible by clicking on a Pokémon's image on the index page
- have the ability to add a new Pokémon
- have the ability to edit existing Pokémon
- have the ability to delete Pokémon
- have some styling

### **Setting up**

Fork and clone this repository

1. Ideally, your app should follow the MVC format of models, views, and controllers (these are your routes for now).
2. However, note you don't actually need a controllers folder for now since all your routes will be in your `server.js`file

### **Routes**

Your app should use RESTful routes:

- Index
    - GET `/pokemon`
- Show
    - GET `/pokemon/:id`
- New
    - GET `/pokemon/new`
- Edit
    - GET `/pokemon/:id/edit`
- Create
    - POST `/pokemon`
- Update
    - PUT `/pokemon/:id`
- Destroy
    - DELETE `/pokemon/:id`

## **Data**

### **Notes on the Pokémon data and what to display**

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are suggestions for what to display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.

## **Style Your App**

Try and make your app look and act nicely with static assets *(set up a public folder and add some css, js)*

Consider using some jQuery!

### **Need some style inspiration?**

These are screenshots from what other students have done to their Pokedex ***(Click Each Example To See Illustration)***:

- **Example 1**
    
    ![https://imgur.com/MZ361IP.png](https://imgur.com/MZ361IP.png)
    
    ![https://imgur.com/65HTgw1.png](https://imgur.com/65HTgw1.png)
    
- **Example 2**
    
    ![https://imgur.com/XsaaJ2x.png](https://imgur.com/XsaaJ2x.png)
    
    ![https://imgur.com/zppz3ev.png](https://imgur.com/zppz3ev.png)
    
- **Example 3**
    
    ![https://imgur.com/ZRFfwgR.png](https://imgur.com/ZRFfwgR.png)
    
    ![https://imgur.com/gEOi0KX.png](https://imgur.com/gEOi0KX.png)
    

## **Commits**

The order of your commits this time does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. Make your commits **as you complete the work**, not all at once in the end! Some sample commits can be found below.

```
"Server is working and displays a plain index page"

"Displays a bunch of Pokémon images on the index"

"Has separate show pages for each Pokémon"

"Has the ability to add a new Pokémon"

"Has the ability to edit existing Pokémon"

"Has the ability to delete Pokémon"

"The app uses RESTful routing, all seven RESTful routes"

"View templates are complete"

"Static assets included (CSS) and styled app"
```

## **Deliverables**

- A Pokedex app that meets all the MVP requirements outlined at the beginning of this markdown.

## **Technical Requirements**

- Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong

