# Squads Matchmaking - KSU Group Project

## Scrum Team
* Dickson Diku - Product Owner
* Brad Griffith - Scrum Master/Lead Developer
* Halil Gunduz - Developer/Tester 
* Matthew Parker - Developer
* Marcus Dorsey - Developer 
* Srikanth Ramakrishna - Developer/Tester

---

# Sprint 3

## Story Points Forecast
In Sprints 1 & 2, the team completed 14 story points each, which included 12 tasks each. The story points were completed just in time for review both times, but the team felt that we could continue at that velocity for Sprint 3. So a total of 14 story points was again forecast for Sprint 3, which this time totaled 20 tasks due to the increased complexity of the additional functionality.

## [Sprint Backlog and Kanban Board](https://trello.com/b/qfcXvM8Z)

## Burndown Chart 
(by # of tasks to complete our 14 story points)
![Sprint 3 Burndown Chart](https://github.com/dev-brad/Squads-Matchmaking/blob/ddc3a9777cd1221682d5b4ef832e473a9fa4f1f3/readme-images/Sprint%203%20Burndown%20Chart.PNG)

## [Daily Scrum Notes](https://kennesawedu-my.sharepoint.com/:w:/g/personal/bgriff77_students_kennesaw_edu/EbXHWtoPGc1KuPcfTJhNF4IBxTecQ0nlukg995JUoZRA0A?e=Y4BA4a)

## Paired Programming Sessions
* [Working Toward Teammate and Squads Process Development (Brad + Marcus)](https://web.microsoftstream.com/video/6be547d5-28a1-4fd3-9437-ab8e592b359a)
* [Working on User Profile Template to View Other Gamers' Profiles (Brad + Matthew)](https://web.microsoftstream.com/video/5ff87f04-96fc-47cd-adb5-2f20367c524d)

## Test Suites
### Unit Tests
![Unit Tests](https://github.com/dev-brad/Squads-Matchmaking/blob/ddc3a9777cd1221682d5b4ef832e473a9fa4f1f3/readme-images/Squads%20Sprint%203%20Unit%20Tests.PNG)
### UAT Tests
![UAT Tests](https://github.com/dev-brad/Squads-Matchmaking/blob/3c25e49ff862ecd663f6e02c83cd81527ee7524b/readme-images/IMG_7744.PNG)
### CI & CD Testing
We used Buddy CI tool to run unit tests when code is merged from our Dev GitHub branch to our Master GitHub branch. We are hosting the application in Heroku where we have test and production pipelines. The test pipeline builds automatically when code is merged to the Master GitHub branch. We were not able to set up CD for the Heroku production pipeline due to an issue running MongoDB within Heroku (the add-on for MongoDB seems to be discontinued). However, we were able to manually test in our test pipeline before promoting code to production at the end of each Sprint.
#### Buddy CI
![Buddy CI Overview](https://github.com/dev-brad/Squads-Matchmaking/blob/ddc3a9777cd1221682d5b4ef832e473a9fa4f1f3/readme-images/Buddy%20CI%20overview.PNG)
![Buddy CI Detail](https://github.com/dev-brad/Squads-Matchmaking/blob/ddc3a9777cd1221682d5b4ef832e473a9fa4f1f3/readme-images/Buddy%20CI%20detail.PNG)
#### Heroku Pipeline
![Heroku Pipeline](https://github.com/dev-brad/Squads-Matchmaking/blob/ddc3a9777cd1221682d5b4ef832e473a9fa4f1f3/readme-images/Heroku%20pipeline.PNG)

## Sprint Review Meeting
### [Sprint 3 Review Meeting](https://web.microsoftstream.com/video/94796f13-5fec-4693-8fd5-92aa095fc73c)

## [Working Prototype: Squads Matchmaking](https://squads-matchmaking.herokuapp.com/index)

### Increment includes:
* Minor Edit to User Preference Form
* Ability to View Other User Profiles
* Ability to Send, Accept, and Reject Teammate Requests
* Ability to Form Teams with One or More Teammates

---

# Sprint 2

## Story Points Forecast
In Sprint 1 the team completed 14 story points, which included 13 tasks. The story points were completed just in time for review, but the team felt that we could continue at that velocity for Sprint 2. So a total of 14 story points was again forecast for Sprint 2, which this time totaled 12 tasks.

## [Sprint Backlog and Kanban Board](https://trello.com/b/qfcXvM8Z)

## Burndown Chart 
(by # of tasks to complete our 14 story points)
![Sprint 2 Burndown Chart](https://github.com/dev-brad/Squads-Matchmaking/blob/decfefe28f1b111c625531d74c12696e8a376b3d/readme-images/Sprint%202%20Burndown%20Chart.PNG)

## [Daily Scrum Notes](https://kennesawedu-my.sharepoint.com/:w:/g/personal/bgriff77_students_kennesaw_edu/EchZzDAXABtBobOCyc6gvsABUof2H5lb8M5LfJC2dlhEyw?e=dcfE8c)

## Paired Programming Sessions
* [Working Toward Player Matching Queries (Brad + Marcus)](https://web.microsoftstream.com/video/64f2ebb8-9f56-44fe-9078-486fa09dff53)

## Test Suites
### Unit Tests
![Unit Tests](https://github.com/dev-brad/Squads-Matchmaking/blob/decfefe28f1b111c625531d74c12696e8a376b3d/readme-images/Squads%20Sprint%202%20Unit%20Tests.PNG)
### CI & CD Testing
We have tried a couple of different CI tools looking for one to work well with NodeJS. This is still in progress. We are hosting the application in Heroku where we have test and production pipelines. The test pipeline builds automatically when code is merged to the Master GitHub branch. We were not able to set up CD for the Heroku production pipeline due to an issue running MongoDB within Heroku (the add-on for MongoDB seems to be discontinued). However, we were able to manually test in our test pipeline before promoting code to production at the end of each Sprint.
#### Heroku Pipeline
![Heroku Pipeline](https://github.com/dev-brad/Squads-Matchmaking/blob/ff5b52b7c7f63b84906e14690a6c9625f9431970/readme-images/Heroku%20pipeline.PNG)

## Sprint Review & Retrospective Meeting
For some reason, our recording of our Review meeting for Sprint 2 did not post and become available. Below is a screen capture of our meeting.
![Sprint 2 Review Meeting](https://github.com/dev-brad/Squads-Matchmaking/blob/9dc54be83ef8ca73a702e383acc157e08a4f252c/readme-images/Sprint%202%20Review%20Meeting.PNG)

## [Working Prototype: Squads Matchmaking](https://squads-matchmaking.herokuapp.com/index)

### Increment includes:
* Bootstrap Styling
* Logout Button
* Display Registration Errors to the User
* Matchmaking Process

---

# Sprint 1

## Story Points Forecast
Going into Sprint Planning, the team had a total of 43 story points in our Product Backlog. The story points were calculated by the team using planning poker. We divided the number of story points by 3 (the number of Sprints in the semester) giving a result of ~14 story points per sprint. We decided to use this average of 14 as our forecast for the first Sprint.

## [Sprint Backlog and Kanban Board](https://trello.com/b/qfcXvM8Z)

## Burndown Chart 
(by # of tasks to complete our 14 story points)
![Sprint 1 Burndown Chart](https://github.com/dev-brad/Squads-Matchmaking/blob/bd46a4768584e852ef65f4d1da7d168c4695e3ec/readme-images/Sprint%201%20Burndown%20Chart.PNG)

## [Daily Scrum Notes](https://kennesawedu-my.sharepoint.com/:w:/g/personal/bgriff77_students_kennesaw_edu/EU4EYBiYQCNKs415EpWHmb8ByJ5Syioy62i3dDnV53Bokw?e=lUloeO)

## Paired Programming Sessions
* [Creating User Preference Table Schema (Brad + Marcus)](https://web.microsoftstream.com/video/dca1d007-7467-4ce6-a279-79267b717aeb)
* [Setting Up API Call to Apex Legends (Brad + Marcus)](https://web.microsoftstream.com/video/8523143f-36ae-43c0-a2ea-4ff7ab535919)
* [Creating and Posting Data to EJS Template for User Profile (Brad + Matthew)](https://web.microsoftstream.com/video/c8997516-bdd2-4a82-af77-b135f85841e5)

## Test Suites
### Unit Tests
![Unit Tests](https://github.com/dev-brad/Squads-Matchmaking/blob/bd46a4768584e852ef65f4d1da7d168c4695e3ec/readme-images/Squads%20Sprint%201%20Unit%20Tests.PNG)
### Automated UAT Tests
![UAT Tests](https://github.com/dev-brad/Squads-Matchmaking/blob/bd46a4768584e852ef65f4d1da7d168c4695e3ec/readme-images/UAT%20Test%20Results.PNG)

## [Sprint Review & Retrospective Meeting](https://web.microsoftstream.com/video/38560f2d-4848-40bb-a69a-4d55fc02d057)

## [Working Prototype: Squads Matchmaking](https://squads-matchmaking.herokuapp.com/index)
### NOTE: If registering for new account, leave Fortnite name and Apex Legends name blank unless you have a real gamer tag for those platforms.
### Increment includes:
* Landing page
* New Account registration
* Signin page
* Session management and user authentication
* User preference settings
* User game stats via API connection to Fortnite and Apex Legends
* User profile page

---

# Product Info

## Product Vision
Our vision is to create a better gaming experience for players across multiple platforms, called Squads Matchmaking.  Unlike other matchmaking services that are mostly based on players skill set, Squad Matchmaking is a better approach to maximize players' affinities beyond their playstyle and skill set. Squad Matchmaking is a web-based service that provides features that improves matchmaking to take in account of users personal preferences, regions, playstyle and other player inputs for a better multiplayer user experience.The product will match like minded players with teammates beyond in-game statistics.  Squads Matchmaking will support two first person shooter games, however the long term vision is to include more shooter games and more genres of games.  The targeted audience will include all multiplayer online gamers of legal age.  Our vision is to create an experierence where users can be matched based on in-game data and users personal preferences while giving the users the ability to connect as friends and form teams with friends.


## Product Backlog
### [Link to Trello board](https://trello.com/b/qfcXvM8Z)

### Order Rationale
Backlog items are ordered first by Priority (High to Low) and then by Story Points (lowest number to highest). This ordering will help the team identify which items are of highest value and can most efficiently be included in the Sprint. 

### Definition of Ready
The Definition of Ready for all Product Backlog items includes:
* Title
* User Story
* Additional Details
* Story Points
* Priority
