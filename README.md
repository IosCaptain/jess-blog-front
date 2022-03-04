# ReadyJessGo.com

This is a website run by a travel blogger who also owns a dating consulting business. She edits and creates profiles for
clients on apps and sites such as Tinder and Match.com. Visitors to this site can get travel tips and dating advice, as
well as place an order to have their dating profile edited or created.

## Display

### Main Page:
![image](https://user-images.githubusercontent.com/88467364/152479138-b38ee520-acd3-4584-aaea-6e6e5df012fe.png)

### Blog Page
![image](https://user-images.githubusercontent.com/88467364/152479579-d9949915-9d4f-4a69-b631-0570cf4e8b6a.png)

### Service Request Page
![image](https://user-images.githubusercontent.com/88467364/152479678-51f7c542-2a53-4199-bfb1-0744eabf721b.png)


Technologies used:
- <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
- <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
- <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
- <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
- <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
- <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
- <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
- <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />

Main pages for this website

1. Landing page
2. Blog main page
3. Article (dynamic)
4. Service Request main page
5. Service Request Form
6. About Page

### MVP User stories:
- User should be able to see the main page of the website
- User should be able to see the blog mainpage
- User should be able to see a full article.
- User should be able to request service through a form.
- When the user submits an service request, it needs to be saved and a reference number for it, provided.

### Some Extras
- "About" page included
- 3 differente products added
- External links added
- Featured and reviews sections

### ERD: 

![image](https://user-images.githubusercontent.com/88467364/151222411-15797562-f93f-4ed6-a17a-3116c744afaf.png)

### Models:

1. Service requests for profile in dating app (SR)

- Name
- Email
- Pourpuse(Casual, Long-Term, Something in between) Option input
- Partner Carateristic(What type of person you are looking for) Text input
- Fun facts (text input)
- Childreen (Yay or nay) Option input
- Pets (yay or nay)
- Img drop (link to dropbox or an img submition thing) API
- App you are most interested (Text input)
- Hobbies (Text input)
- Sex(Option input)
- Location(Text input)
- Origin(Text input)
- Height(option input maybe)
- Goals(text input)
- Date

2. Article

- Title
- Article
- Category (FK => Blogs Category ID)
- Link to actual website (if applicable)
- Date published

3. Article Category 

- Id 
- Name (Dating, Travel Tips, Travel Stories)
- Description

### Nice Features:
- Flashy loading page when fetching articles from the database and submitting a form.
- Zoom when you hover over the pictures

### Challenges:
- CORS Configuration
- Layout and Bootstrap Implementation
- Database design
- TDF (Template Driven Forms) testing

### Realizations:
- Importance of a good planning. You end up paying a high price. 
- Importance of datbase design, dictates data display.
- I need to keeppractizing Styling
- This is the most challenging, significant and fun project I have done.

### Next for this project
- Admin view to manage the Service Requests
- internal communication to the clients

Content From:
- https://github.com/StartBootstrap/startbootstrap-blog-post
- https://github.com/StartBootstrap/startbootstrap-blog-home
- https://github.com/getarrays/employeemanager
- https://github.com/startbootstrap/startbootstrap-business-frontpage
- https://github.com/startbootstrap/startbootstrap-modern-business
