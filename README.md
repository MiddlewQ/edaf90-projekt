# Project Overview

This project is a blog about programming made by Viktor Bergmark and Isac Belfrage. It was made using React + Vite, and contains the following features:

- Start page featuring a "featured video of the day" that can be modified in the code.
- Post Page, where all posts created can viewed and new can be created.  
- About page, where information about the blogger can be viewed.


## Start Page

The start contains two elements:

- Embedded video
- Video Details


### Embedded video

The embedded video is displayed using an iframe and combined without Youtube built-in video displayer. This works without API access, and simply requires youtube to be working correctly.

### Video Details

Video details are loaded using youtubes API access. This will require API access, a key and a login to googles api services. This is done in vite by including a .env file that loads a config path for API access key. 

## Posts

This website is mainly a programming blog, so we used markdown for nice syntax highlighting which works great for our use case. 

Posts have the following properties: 
- ID
- Title
- Content

Posts can be created from the UI by clicking the "New Post" button, filling in the fields in the form and pressing submit. There is a text windows below where you can preview your changes to the post. These changes will also view the markdown formating. When the submit button is pressed, a request will sent to an external json-db server. This server will need to be running for the post to be saved. No windows localstorage is used. Post cannot be deleted or modified from the UI though it can be changed by edlting/deleting it manually through the database. 

All posts can be view from the Posts tab which will load old posts saved in the database.

## About

This is a template about page about the blog "Prog4Lyfe". This page is a simply page with some text. 

# How to Run

To run the program, you will first need to create a .env config file. This is used for api access to reach a specific youtube video. This can be done by either creating your own key or receiving one we made for this project. We will link this key in the assignment report for convenience.

Afterwards, this website can be run by:
- Running the server in a terminal using the command: `npx json-server db.json`
- Running the client in a separate terminal using the command: `npm run dev`