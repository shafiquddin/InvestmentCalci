import Input from "./Input";

export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input label="Initial Investment" onChange={onChange} value={userInput.initialInvestment}/>
        <Input label="Annual Investment" onChange={onChange} value={userInput.annualInvestment}/>
      </div>
      <div className="input-group">
        <Input label="Initial Investment" onChange={onChange} value={userInput.expectedReturn}/>
        <Input label="Duration" onChange={onChange} value={userInput.duration}/>
      </div>
    </section>
  );
}
