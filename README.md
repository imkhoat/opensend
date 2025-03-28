# Opensend dashboard application

## Overview
The Opensend Dashboard Application is a dynamic and interactive dashboard built with React and TypeScript. It features a login form, conditional routing, and a customizable dashboard with editable, draggable, and resizable metric widgets.


## Setup
To set up the project, follow these steps:

1. Install dependencies:

```sh
npm install
```

2. Create .env file with following content on root folder

```
VITE_API_BASE_URL=https://stgapp-bwgkn3md.opensend.com
```

3. Start the development server:

 ```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see the application in action.


## Task
 **Task 01: Build a Login Form with React and TypeScript**
- [x] Create new react app with vite + typescript
- [x] Setup nessesary and requirement library (ui lib, RTK Query, font, brand color...)
- [x] Implement login UI
- [x] Add unittest

**Task 02: Conditional Routing**
- [x] Config repository and service for login form
- [x] Connect with api to validate login
- [x] Add react router to handle routing
- [x] Create simple layout component
- [x] Implement three sample page
- [x] Implement middleware and guard for authentication and authorization

**Task 03: Build a dynamic dashboard with editable, draggable, and resizable metric widgets.**
- [ ] Setup draggable lib
- [ ] Metric widget component
- [ ] Widget size editable
- [ ] Widget editable
- [ ] Code review
