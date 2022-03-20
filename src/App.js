import online from "./images/icon-online.svg";
import budgeting from "./images/icon-budgeting.svg";
import onboarding from "./images/icon-onboarding.svg";
import api from "./images/icon-api.svg";

import currency from "./images/image-currency.jpg";
import restaurant from "./images/image-restaurant.jpg";
import plane from "./images/image-plane.jpg";
import confetti from "./images/image-confetti.jpg";

import "./App.css";
import Title from "./components/Title";
import Card from "./components/Card/Card";
import Description from "./components/Description";
import Box from "./components/Box/Box";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  return (
    <div className="App">
      <Navbar handleShowMenu={handleShowMenu} showMenu={showMenu} />
      {showMenu && <Menu />}
      <Banner />
      <div className="bg-dark-gray container">
        <Title text={"Why choose Easybank?"} />
        <Description
          text={
            "We leverage Open Banking to turn your bank account into your financial hub."
          }
        />
        <Description text={"Control you finances like never before."} />

        <div className="row">
          <Box
            image={online}
            alt={"hand holding credit cards"}
            title={"Online Banking"}
            body={
              "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            }
          />

          <Box
            image={budgeting}
            alt={"phone with a dollar sign"}
            title={"Simple Budgeting"}
            body={
              "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
            }
          />

          <Box
            image={onboarding}
            alt={"people talking"}
            title={"Fast Onboarding"}
            body={
              "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
            }
          />

          <Box
            image={api}
            alt={"microchip"}
            title={"Open API"}
            body={
              "Manage your savings, invest in pension and much more in your account. Tracking your money has never been easier."
            }
          />
        </div>
      </div>

      <div className="bg-light-gray container">
        <Title text={"Latest Articles"} />
        <div className="row">
          <Card
            image={currency}
            alt={"banknotes"}
            author={"by Claire Robinson"}
            title={"Receive money in any currency with no fees"}
            body={
              "The world is getting smaller and we're becoming more mobile. So why should you be forced to receive money in a single..."
            }
          />

          <Card
            image={restaurant}
            alt={"meal in a restaurant"}
            author={"by Wilson Hutton"}
            title={"Treat yourself without worring about money"}
            body={
              "Our simple budgeting feature allows you to separate out your sepnding and set realistic limits each month. That means you..."
            }
          />

          <Card
            image={plane}
            alt={"plane wing"}
            author={"by Wilson Hutton"}
            title={"Take your Easybank card wherever you want"}
            body={
              "We want you to enjoy your travels. Ths is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
            }
          />

          <Card
            image={confetti}
            alt={"confetti"}
            author={"by Claire Robinson"}
            title={"Our invite-only Beta accounts is now live!"}
            body={
              "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
            }
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
