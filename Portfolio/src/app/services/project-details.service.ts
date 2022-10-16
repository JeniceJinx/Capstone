import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  //project details

  projectDetails = [
    {
      id: 1,
      projectTitle: "Gladiator",
      projectTech: "Java ",
      basicConcept: "basic java application ",
      projectImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGphdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   "https://github.com/JeniceJinx/PerScholasProjects/tree/main/IdeaProjects/Gladiator"
      },
      {
      id: 2,
      projectTitle: "Javascript Code ",
      projectTech: "JavaScript ",
      basicConcept: "loops, if statements ",
      projectImage: "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      {
      id: 3,
      projectTitle: "Fantasy Football",
      projectTech: "SQL",
      basicConcept: "basic  SQL ",
      projectImage: "https://as1.ftcdn.net/jpg/01/73/73/65/240_F_173736505_73z0LgF11ckxmHxhuwnRBOaAiD205Fz3.jpg",
      projectUrl:   "https://github.com/JeniceJinx/NFL-Queries/blob/main/Sql"
      },
      {
      id: 4,  
      projectTitle: "Fortune Teller ",
      projectTech: "Python ",
      basicConcept: "basic python application ",
      projectImage: "https://as1.ftcdn.net/jpg/03/67/68/18/240_F_367681808_K6N6h4y5hIHL1mq6dwlUaa33a2yLh2Es.jpg",
      projectUrl:   "https://github.com/JeniceJinx/PythonPractice/blob/main/Fortune%20Cookie.py"
      },
      {
      id: 5,
      projectTitle: "Basic Web Page ",
      projectTech: "HTML CSS Javascript ",
      basicConcept: "basic web application ",
      projectImage: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      {
      id: 6,
      projectTitle: "Capstone",
      projectTech: "Angular ",
      basicConcept: "basic Angular application ",
      projectImage: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      projectUrl:   ""
      },
      {
        id: 7,
        projectTitle: "Contoso University",
        projectTech: "C# ASP.Net ",
        basicConcept: "Fictitional Unviserity Website with Registration and Student DB ",
        projectImage: "https://as1.ftcdn.net/jpg/02/86/20/92/240_F_286209293_ql7Gq3b1O5sQUG9jHM1xCBAyxeKF038g.jpg",
        projectUrl:   "https://github.com/JeniceJinx/ContosoUniversity"
        },
      
  ]
}
