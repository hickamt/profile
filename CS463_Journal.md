# Todd Hickam | Profile Journal | CS463 Winter 2023

- [Deployed on Vercel:](https://profile-hickamt.vercel.app)

- [GitHub Repository:](https://github.com/hickamt/profile)

- [Vite Dev Docs](https://vitejs.dev/guide/)

  Vite allows hot module replacement that is faster than create-react-app.

## DEPENDENCIES

```
• Bootstrap         5
• React             18
• React-dom         18
• React-router-dom  6
• React-markdown    8
• Styled-components 5
```

## DEPLOYMENT

Routing the links using react-router-dom route and routes would not allow deployment on GitHub.io pages. Because of the dynamic routing, I was required to deploy with Vercel which is also free and handles updates through a hot reload link to my GitHub repository. Meaning, when I make a change and push to GitHub the changes will be updated with Vercel keeping my deployed website in line with my current changes.

Of course, this also means that anything I push that would break my website will also break the deployed site on Vercel which was frequently. It was nice to see how easy deploying a simple website can be compared to some years ago when it would have taken a week just to figure out how to get everything you need set up and to sync correctly.

### BUILD

Our instructions outlined the pages required for the website and I tried to keep this project simple and focused on just the required implementation.

My reason for using react-router was to ensure that the page would render without a page refresh and react-router handles this for me. With many examples online, implementation was not as difficult as I thought and adding additional pages to the router is straight forward.

Initially I included a footer but a with some input from others I removed this for now as the footer did not have important information that would require a footer.

Two files handle the route links which are /app.jsx and /shared/layout.jsx. Using react allowed me to separate the pages and other shared functionality into separate directories. This kept my build clean and allowed me to work within a directory for each page without the clutter of every file residing in /root.

## PAGES

### Home:

I didn’t know what I wanted for a home page but I wanted it simple and clean. If someone wanted more details about who I am professionally, they can take a look at the resume page. In looking at other profile websites I saw that many used a card with profile picture and just a few statements.

Finally, I just took a card that was created in my /projects page and re-worked it for the home page. It doesn’t have the feel I want but in time I will figure out a way to make this look better. My main goal for each page was a look that was responsive, and I feel that the home page and all other pages have that functionality.

### Projects:

When first implementing the project page, I laid out all three of the cards I wanted to use and hard coded the data into each. After I had the look and responsiveness, I refactored it to be modular.

This page uses the row – column grid system of Bootstrap 5 that allowed a responsive design that looks clean from mobile to tablet and larger pc screens. For any screen size larger than medium there are three cards displayed in the middle of the page implemented using a data file, component file, and primary jsx dom render export.

Creating the page in this way allows me to add or remove projects by editing the data file alone. The components are now re-usable, and the default export uses a map() function across the data object to return a card for each object in the data array.

### Resume:

My first iteration was using an iFrame library to display the resume and allow download. This approach, as pointed out by the TA and Instructor, was not the best. iFrame is not responsive. As the screen size is reduced below medium, the text becomes unreadable. To fix this issue, I built the resume as a jsx component which allowed the view to be responsive. Further, I began the build for the resume in mobile view and worked out toward larger screen sizes.

I still wanted users to have the ability to download the .pdf and found that a front-end application must use fetch or axios to get and display the file. There are several sites online that walk through methods of creating a button link to fetch and display .pdf files and my function is the combination of several examples including MDN web docs – using-fetch.

### Contact:

This was a little easier as I copied the form used in our homework. A friend pointed out that I should try and implement the form in a similar fashion to how Google does their contact. Eliminate the outer input labels, which are there but hidden, and add placeholder names. Then, center the content for larger screens and left justify for mobile. I like the look of this approach as it cleans up the form and reduces the amount of information the user will have to absorb while retaining clear instructions on what each input requires.

A common issue for each page was figuring out what Bootstrap 5 required to align and size different items. Trying to handle the form using Bootstrap is especially taxing. Eventually, I will create my own form component templates that do not use Bootstrap.

### 404 Not Found:

React Routes allows a simple solution to handle routing to my 404 not found page. If a bad URL is entered, the page is redirected by catching all using ( \* ).

I tried to have a little fun with the page. There is a little-known Peugeot model 404 vehicle they built in the 60’s. If you enter a bad URL, an image of a 404 Cabriolet Model is displayed. Source is cited in the README.

### Problems & Resolutions:

Using ReactJS with Bootstrap 5 can be frustrating. Adding class names to create the navbar was easy. Trying to make the navbar do anything else, like toggle closed when a user clicks on a page link, is not easy. As of now, I do not have a resolution to this issue. I have tried using state and making the navbar close manually, but this appears to break the bootstrap navbar.

Building my project cards created repeat code. This annoyed me and would be easy to fix in C or C++ using an OOP approach. In ReactJS classes are not the normal implementation, though classes are supported in recent releases. The fix was creating and exporting components. Learning and building these components was fun. Trying to figure out the correct method of mapping through my data and passing the data properties to my components ... Not Fun.

Now that I understand how React wants object data passed to a component, it makes sense but was not readily apparent when first attempting this. I still don’t understand ‘context’ but I am not reusing that data anywhere else so my current implementation should be ok.

### Final Words:

This was a fun project which helped me understand several concepts about html, CSS, and combining other libraries and frameworks together. Many times I have found myself fighting to achieve a particular goal and the final solution to most of those issues was a very simple solution. Using this bit of knowledge, when I find myself creating a mess of code I can stop and evaluate why it’s needed and if a library I am using may have a simple solution to resolve the problem.

Definitely looking forward to the next course on Front-End.
