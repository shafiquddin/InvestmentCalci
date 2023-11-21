import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment"

export default function Results({ userInput }) {
    const tableData = calculateInvestmentResults(userInput);
    const initialInvestment = tableData[0].valueEndOfYear - tableData[0].interest - tableData[0].annualInvestment;
    return <>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(dataYear => {
                    const totalInterest = dataYear.valueEndOfYear - dataYear.annualInvestment * dataYear.year - initialInvestment;
                    const totalInvestment = dataYear.valueEndOfYear - totalInterest;
                    return <tr key={dataYear.year}>
                        <td>{dataYear.year}</td>
                        <td>{formatter.format(dataYear.valueEndOfYear)}</td>
                        <td>{formatter.format(dataYear.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalInvestment)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}