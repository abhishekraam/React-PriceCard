import './App.css';
import Card from './Card'

function App() {
  return (
    <div className="App">
      <div className="outerContainer">
        <Card cardType="F R E E" user="Single User" storage="5GB Storage"  private={false} phone={false} domain={false} report={false} />
        <Card cardType="P L U S" user="5 Users" storage="50GB Storage"  private={true} phone={true} domain={true}  report={false}/>
        <Card cardType="P R O" user="Unlimited Users" storage="150GB Storage"  private={true} phone={true} domain="unlimited"  report={true}/>
      </div>
    </div>
  );
}
export default App;
