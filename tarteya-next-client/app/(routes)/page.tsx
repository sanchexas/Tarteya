import Header from "../_layouts/Header";
import RootLayout from "./layout";
import MainContainer from "../_layouts/MainConteiner";
import Footer from "../_layouts/Footer";

const MainPage = () =>{
  return(
    <RootLayout>
      <Header/>
      <MainContainer/>
      <Footer/>
    </RootLayout>
  );
}

export default MainPage;