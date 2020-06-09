const companies = [
  { name: 'company one', category: 'tech', start: 1981, end: 2003 },
  { name: 'company two', category: 'finance', start: 1992, end: 2008 },
  { name: 'company three', category: 'retail', start: 1999, end: 2007 },
  { name: 'company four', category: 'tech', start: 1989, end: 2010 },
  { name: 'company five', category: 'ecommerce', start: 2009, end: 2014 },
  { name: 'company six', category: 'retail', start: 1987, end: 2010 },
  { name: 'company seven', category: 'finance', start: 1986, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21];

// let i = 0;
// for (i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function (badass) {
//   console.log(badass.name);
// });

/////////1111111111111111111
// const canDrink = [];
// let howOld = ages.length;
// for (i = 0; i < howOld; i++) {
//   if (ages[i] > 20) {
//     canDrink.push(ages[i]);
//   }
// }

// console.log(canDrink);

////////222222222222222222222
// const canDrink1 = ages.filter(function (opAge) {
//   if (opAge > 20) {
//     return true;
//   }
// });

// console.log(canDrink1);

////////333333333333333333333
// const canDrink1 = ages.filter((opAge) => opAge > 20);

// console.log(canDrink1);

// //////////////////filter for retail companies

// const allRetailers = companies.filter(function (company) {
//   if (company.category === 'retail') {
//     return true;
//   }
// });
// console.log(allRetailers);

///////////////using arrow functions
// const retailers = companies.filter((company) => company.category === 'retail');

// console.log(retailers);

///// filter for companies founded in the 80s
// const companiesinEighties = companies.filter(function (company) {
//   if (company.start > 1979 && company.start < 1990) {
//     return true;
//   }
// });
// console.log(companiesinEighties);

// const companiesinEighties = companies.filter(
//   (company) => company.start > 1979 && company.start < 1990
// );
// console.log(companiesinEighties);

///// filter for companies that lasted more than 10 years

// const tenyearsPlus = companies.filter(
//   (company) => company.end - company.start > 9
// );

// console.log(tenyearsPlus);

const companyNames = companies.map(function (company) {
  return company.name;
});

console.log(companyNames);
