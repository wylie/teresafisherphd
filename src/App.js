import Button from "./components/button";
import Type from "./components/type";

import { Wrapper } from "./AppStyled.js";

const App = ({ children }) => (
  <Wrapper>
    <Type as="h1" style={{fontWeight: "600", backgroundColor: "#ccc", padding: "1rem"}} color="black">COLORS</Type>
    <div style={{display: "flex", marginBottom: "2rem"}}>
      <div style={{margin: "1rem 1rem 1rem 0", backgroundColor: "#213b45", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}} color="white">#213B45</Type>
      </div>
      <div style={{margin: "1rem", backgroundColor: "#264653", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}} color="white">#264653</Type>
      </div>
      <div style={{margin: "1rem", backgroundColor: "#2a9d8f", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}} color="white">#2A9D8F</Type>
      </div>
      <div style={{margin: "1rem", backgroundColor: "#e9c46a", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}}>#E9C46A</Type>
      </div>
      <div style={{margin: "1rem", backgroundColor: "#f4a261", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}}>#F4A261</Type>
      </div>
      <div style={{margin: "1rem", backgroundColor: "#e76f51", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}} color="white">#E76F51</Type>
      </div>
      <div style={{margin: "1rem 0 1rem 1rem", backgroundColor: "#D7431D", width: "100%", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Type secondary style={{fontWeight: "600"}} color="white">#D7431D</Type>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Type as="h1" style={{fontWeight: "600", backgroundColor: "#ccc", padding: "1rem"}} color="black">TEXT</Type>
    <Type as="h1" primary $fontSize="lg">Read Me, Please!</Type>
    <Type secondary $fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nisl vel tortor placerat auctor. Vivamus a lacus et diam semper maximus. Aenean venenatis mauris quam, sodales ultricies neque convallis nec. Mauris finibus neque ac mauris scelerisque, <Type as="a" href="#" style={{color: "#2a9d8f"}}>quis vestibulum orci</Type> hendrerit. Curabitur tempus varius ligula, tempor rhoncus dui efficitur in. Maecenas sed faucibus nisl. Sed luctus metus ut mauris vestibulum, quis vestibulum nulla ultricies. Etiam suscipit interdum convallis.</Type>
    
    <Type as="h1" primary $fontSize="lg">Read Me, Please!</Type>
    <Type secondary $fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nisl vel tortor placerat auctor. Vivamus a lacus et diam semper maximus. Aenean venenatis mauris quam, sodales ultricies neque convallis nec. Mauris finibus neque ac mauris scelerisque, <Type as="a" href="#" style={{color: "#2a9d8f"}}>quis vestibulum orci</Type> hendrerit. Curabitur tempus varius ligula, tempor rhoncus dui efficitur in. Maecenas sed faucibus nisl. Sed luctus metus ut mauris vestibulum, quis vestibulum nulla ultricies. Etiam suscipit interdum convallis.</Type>
    <br/>
    <br/>
    <br/>
    <br/>
    <Type as="h1" style={{fontWeight: "600", backgroundColor: "#ccc", padding: "1rem"}} color="black">BUTTONS</Type>
    <br/>
    <Button primary>Click Me</Button>
    <Button secondary>Click Me</Button>
    <br/>
    <br/>
    <br/>
    <br/>
    <Type as="h1" style={{fontWeight: "600", backgroundColor: "#ccc", padding: "1rem"}} color="black">IMAGES</Type>
    <br/>
    <img src="https://i.pinimg.com/originals/e6/d0/6a/e6d06a607c8133e5152290b4b5224f63.jpg" style={{boxShadow: "0 0 0 3px #e9c46a"}} />
  </Wrapper>  
);

export default App;
