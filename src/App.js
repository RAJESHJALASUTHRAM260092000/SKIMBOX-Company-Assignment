import {Component} from 'react'
import {BiRadioCircleMarked, BiRadioCircle} from 'react-icons/bi'
import {AiFillCaretDown} from 'react-icons/ai'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="bg">
          <p className="bor1"> </p>
          <h1 className="heading">Bundle & Save</h1>
          <p className="bor1"> </p>
        </div>
        <div className="border-container sub-container">
          <div className="sub subss">
            <div className="Pair-container">
              <BiRadioCircle size={30} color="#D9D9D9" className="Icon" />
              <div>
                <p className="para">1 Pair</p>
                <h1 className="head">DKK 195.00</h1>
              </div>
            </div>

            <div className="Pair-containers">
              <h1 className="headss">50% OFF</h1>
            </div>
          </div>
        </div>
        <div className="border-container">
          <div className="sub">
            <div className="Pair-container">
              <BiRadioCircleMarked size={35} color="red" className="Icon" />
              <div>
                <p className="para">2 Pair</p>
                <h1 className="head">DKK 345.00</h1>
              </div>
            </div>
            <p className="para text">DKK 195.00</p>
            <div className="Pair-containers">
              <h1 className="heads">Most Popular</h1>
              <h1 className="headss">40% OFF</h1>
            </div>
          </div>
          <div className="Input-container">
            <div className="Size-container">
              <p className="para ttt">Size</p>
              <div className="class">
                <p className="para">#1</p>
                <div className="S1-container">
                  <p className="heading-s">S</p>
                  <AiFillCaretDown size={20} />
                </div>
              </div>
              <div className="class">
                <p className="para">#2</p>
                <div className="S1-container">
                  <p className="heading-s">S</p>
                  <AiFillCaretDown size={20} />
                </div>
              </div>
            </div>
            <div className="Size-container">
              <p className="para ttt">Color</p>
              <div className="class">
                <div className="S1-container">
                  <p className="heading-s">Color</p>
                  <AiFillCaretDown size={20} />
                </div>
              </div>
              <div className="class">
                <div className="S1-container r">
                  <p className="heading-s">Color</p>
                  <AiFillCaretDown size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-container sub-container">
          <div className="sub subss">
            <div className="Pair-container">
              <BiRadioCircle size={30} color="#D9D9D9" className="Icon" />
              <div>
                <p className="para">3 Pair</p>
                <h1 className="head">DKK 528.00</h1>
              </div>
            </div>

            <div className="Pair-containers">
              <h1 className="headss">50% OFF</h1>
            </div>
          </div>
        </div>
        <div className="border">
          <h1 className="head sub-head">Free 2Day Shipping</h1>
          <h1 className="head ff">Total :DKK 528.00</h1>
        </div>
        <button className="button" type="button">
          + Add To Cart
        </button>
      </div>
    )
  }
}

export default App
