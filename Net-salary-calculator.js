function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax brackets and rates lists
    const TAX_BRACKETS = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 500000, rate: 0.2 },
        { min: 500001, max: 800000, rate: 0.25 },
        { min: 800001, max: Infinity, rate: 0.35 }
    ];

    // Constants for NHIF and NSSF rates
    // aproximates by use of the first   [tier(150/5999)* 100 ] = 2.5 %
    const NHIF_RATE = 0.025; 
    const NSSF_RATE_EMPLOYEE = 0.06;
    const NSSF_RATE_EMPLOYER = 0.06; 

    // calculations of the deductions
    const grossSalary = basicSalary + benefits;
    const nhifDeduction = grossSalary * NHIF_RATE;
    const nssfDeductionEmployee = grossSalary * NSSF_RATE_EMPLOYEE;
    const taxableIncome = grossSalary - nhifDeduction - nssfDeductionEmployee;

    // Calculate PAYE (Tax)
    //  I did use my bash scripting knowledge to attempt to fix the tax  paye
    let totalTax = 0;
    for (let i = 0; i < TAX_BRACKETS.length; i++) {
        if (taxableIncome > TAX_BRACKETS[i].max) {
            totalTax += (TAX_BRACKETS[i].max - TAX_BRACKETS[i].min + 1) * TAX_BRACKETS[i].rate;
        } else {
            totalTax += (taxableIncome - TAX_BRACKETS[i].min + 1) * TAX_BRACKETS[i].rate;
            break;
        }
    }

    // Calculate net salary
    const netSalary = grossSalary - totalTax - nhifDeduction - nssfDeductionEmployee;

    // Return results
    return {
        grossSalary: grossSalary,
        nhifDeduction: nhifDeduction,
        nssfDeductionEmployee: nssfDeductionEmployee,
        totaltax: totalTax,
        netSalary: netSalary
    };
}

// test case
const basicSalary = 50000;
const benefits = 10000; 

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails)