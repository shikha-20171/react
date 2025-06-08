export function CourseGoal({title,description}) 
  {
    return (
      <li>
      <h2>{title}</h2>
      <p>{description}</p>
      </li>
    );
  }

  function App() {
    return (
      <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals</p>
      <ul>
        <CourseGoal title="Learn React"
        description="In- depth" />
        <CourseGoal title="Master Javascript"
        description="step-be-step with projects" />
      </ul>
      </div>
    );
  }
  export default App;