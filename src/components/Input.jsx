export default function Input({ heading, name, funct, values }) {
  return (
    <p>
      <label>{heading}</label>
      <input
        onChange={(event) => funct(event)}
        type="text"
        name={name}
        value={values}
      />
    </p>
  );
}
