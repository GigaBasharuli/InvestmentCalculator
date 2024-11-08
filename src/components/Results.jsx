import { formatter } from "../util/investment";

export default function Results({ results }) {
  return (
    <table id="result">
      <thead>
        <tr className="center">
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {results.map((element, index) => (
          <tr key={index}>
            <td className="center">{element.year}</td>
            <td className="center">
              {formatter.format(element.valueEndOfYear)}
            </td>
            <td className="center">{formatter.format(element.interest)}</td>
            <td className="center">
              {formatter.format(element.totalInterest)}
            </td>
            <td className="center">
              {formatter.format(element.annualInvestment)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
