import Input from "./Input";

export default function UserInput({ funct, values }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          funct={funct}
          name="initialInvestment"
          heading="Initial Investment"
          values={values.initialInvestment}
        />
        <Input
          funct={funct}
          name="annualInvestment"
          heading="Annual Investment"
          values={values.annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          funct={funct}
          name="expectedReturn"
          heading="Expected Return"
          values={values.expectedReturn}
        />
        <Input
          funct={funct}
          name="duration"
          heading="Duration"
          values={values.duration}
        />
      </div>
    </section>
  );
}
