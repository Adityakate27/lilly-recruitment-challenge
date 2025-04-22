# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
To start the challenge, I first spent a bit of time understanding how the backend and frontend were set up. I wanted to make sure I didn’t jump into coding without knowing what was already there. I went through each file, saw how the FastAPI backend handled routes, and looked at how the frontend fetched and displayed medicine data.

I decided to begin with the backend changes, especially since calculating the average price required modifying the API. Once that part was working, I connected it to the frontend and made sure the data showed up as expected. I tried to keep things clean and build everything step by step so I could test as I went.

For references, I mainly used FastAPI's official docs, MDN for JavaScript fetch methods, and occasionally Stack Overflow when I ran into errors.

## Objectives - Innovative Solutions
One of the main additions I made was the /average-price endpoint on the backend. It calculates the average price of all valid medicine entries — meaning only those that have a non-empty name and a real number for the price. This makes the average more accurate, especially considering the sample data had some empty and null values.

On the frontend, I created a section at the top to show this average price when the page loads. I also made sure to clean up how each medicine is displayed and added fallbacks for missing values so nothing breaks or looks confusing on the UI.

Another thing I added was basic input validation on the frontend. For example, users can’t leave the name or description empty, and prices have to be numbers greater than zero. These checks are simple, but they make the form a lot more reliable.

Even though the original challenge didn’t include a description field, I thought it was useful for a more complete interface. So I added it to the frontend form and made sure it showed up with each medicine card.

## Problems Faced
One of the first issues I ran into was a CORS error. The frontend couldn’t fetch data from the backend at first. I fixed this by enabling CORS in FastAPI, which allowed cross-origin requests and solved the problem quickly.

Another issue came up with the data itself. A few medicines in data.json had either missing names or prices. This caused problems during the average price calculation. To fix this, I added a check in the backend to skip over any entries that didn’t have both a name and a valid number for the price.

Lastly, I had to fix the JavaScript function that submits new medicine data. At first, it didn’t actually send anything to the backend. After adjusting the fetch call to send form data correctly, it worked as expected.

## Evaluation
Overall, I really liked the challenge. It gave me a chance to work with both backend and frontend code, and I got to practice connecting the two with live data. Once I got the hang of how the FastAPI backend was structured, the rest came together fairly smoothly.

If I had more time, I’d like to add better error and success messages on the frontend when actions are completed. I’d also probably add backend-side validation and maybe even make it possible to edit or delete medicines directly from the UI.

But overall, I’m happy with what I was able to build and the improvements I made to both the frontend and backend.
