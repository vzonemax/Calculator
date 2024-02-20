
import Wrapper from "./Component/Wrapper";
import Screen from "./Component/Screen";
import ButtonBox from "./Component/ButtonBox";
import Button from "./Component/Button";
import CalcProvider from "./Context/CalcContext";

function App() {

  const btnValues = [
    ["C", "CE", "/", "*"],
    [7, 8, 9, "-"],
    [4, 5, 6, "+"],
    [1, 2, 3, "="],
    ["%", 0, "."],
  ];

  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button 
              key={i} 
              value={btn} 
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
