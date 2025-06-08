import React from 'react';
 export const userData = {
  firstName: 'Maxmilian',
  lastName: 'Schwarmuller',
  title: 'Instructor',
 };
 export function User() {
  return(
    <div id="user" data-testid="user">
      <h2> 
        {userData.firstName} {userData.lastName}
      </h2>
      <p>
        {userData.title}
      </p>
    </div>
  );
 }
  function App() {
    return (
      <div id="app">
        <h1>Time to Practice</h1>
        <p>Welcome on board of this course! you got this</p>
        <User/>
      </div>
    );
  }
  export default App;