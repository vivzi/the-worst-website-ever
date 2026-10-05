import './App.css'
import lamp from './assets/lamp.jpeg'

function App() {
  return (
    <main>
      <nav>
        <p className="navTitle">The Worst Website Ever</p>
        <a>Home</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a>
        <a>Products</a>
        <a>Home</a>
      </nav>
      <div className="landing">
        <h1>Subscriptions for Everything.</h1>
        <p>Ever looked at your phone, your lamp and thought "What if I sell this to a company and buy it
           back as a subscription?" Well fear not, because we do exactly that.
        </p>
        <div className="productContainer">
          <div className="productTitle">Night Lamp</div>
          <img src={lamp} width="176" height="131" alt="Night Lamp" />
          <div className="productDescription">Originally for $10, now at $14.99/mo</div>
        </div>
        <p>As you can see, we take the products you use and put a monthly charge
           on them higher than the charge you paid to buy it. Oh and also we added AI to
           appeal to investors!
        </p>
        <h1>The Next Unicorn Startup?</h1>
        <p>Lorem ipsum</p>
      </div>
    </main>
  )
}

export default App
