import Button from "./components/Button";
import Counter from "./components/Counter";
import Loginform from "./components/Loginform";
import Userprofile from "./components/Userprofile";


const App = () => {

  const handleButtonClick = () => {
    console.log("Button clicked!");
  }

  return (
    <main>
      <h1>React Testing App</h1>

      <section>
        <h2>Button</h2>

        <Button onClick={handleButtonClick}>
          Click Me
        </Button>
      </section>

      <section>
        <Counter />
      </section>

      <section>
        <Loginform />
      </section>

      <section>
        <Userprofile
          name="Yash"
          email="tagadyash12@gmail.com"
          role="Developer"
        />
      </section>
    </main >
  )
}

export default App;
