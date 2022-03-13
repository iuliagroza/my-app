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
import BoxImage from "./components/Box/BoxImage";
import BoxTitle from "./components/Box/BoxTitle";
import BoxBody from "./components/Box/BoxBody";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

/*Test*/
/*Test2*/
function App() {
  return (
    <div className="App">
      <Navbar />
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
          <Box>
            <BoxImage src={online} />
            <BoxTitle text={"Online Banking"} />
            <BoxBody
              text={
                "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
              }
            />
          </Box>

          <Box>
            <BoxImage src={budgeting} />
            <BoxTitle text={"Simple Budgeting"} />
            <BoxBody
              text={
                "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
              }
            />
          </Box>

          <Box>
            <BoxImage src={onboarding} />
            <BoxTitle text={"Fast Onboarding"} />
            <BoxBody
              text={
                "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
              }
            />
          </Box>

          <Box>
            <BoxImage src={api} />
            <BoxTitle text={"Open API"} />
            <BoxBody
              text={
                "Manage your savings, invest in pension and much more in your account. Tracking your money has never been easier."
              }
            />
          </Box>
        </div>
      </div>

      <div className="bg-light-gray container">
        <Title text={"Latest Articles"} />
        <div className="row">
          <Card
            image={currency}
            author={"by Claire Robinson"}
            title={"Receive money in any currency with no fees"}
            body={
              "The world is getting smaller and we're becoming more mobile. So why should you be forced to receive money in a single..."
            }
          />

          <Card
            image={restaurant}
            author={"by Wilson Hutton"}
            title={"Treat yourself without worring about money"}
            body={
              "Our simple budgeting feature allows you to separate out your sepnding and set realistic limits each month. That means you..."
            }
          />

          <Card
            image={plane}
            author={"by Wilson Hutton"}
            title={"Take your Easybank card wherever you want"}
            body={
              "We want you to enjoy your travels. Ths is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
            }
          />

          <Card
            image={confetti}
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
