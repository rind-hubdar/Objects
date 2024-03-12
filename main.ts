let country :{
    country_name:string,
    provinces: number,
    capital:string,
    isGood:boolean,
}={
    country_name: "Pakistan",
    capital: "Islamabad",
    provinces:4,
    isGood: true
}

console.log(country);
console.log(country.country_name,country.capital,country.provinces,country.isGood);


// EXAMPLE-TWO 




let fruit ={
    fruit_name: "Durian",
    otherName: "The King of Fruits",
    aboutThisFruit:{

        appearnce:{
                     howItLook:"The durian is a tropical fruit known for its large size and distinctive appearance."
        } ,
        odor:{
                     howISItsSmell:" Durian is notorious for its strong and pungent odor, often described as a combination of rotten onions, turpentine, and raw sewage.",
        },
        taste:{
                     itsTest :"Despite its strong odor, durian is prized for its rich and complex flavor."
        },
        culturalSignificance : {
                     itsCultureSignificance:`Durian holds a special place in the cultures of Southeast Asia, where it is often referred to as the "King of Fruits"`,
        },
        healthBenefits : {
                     itsBenifits:[" Durian is a nutritious fruit packed with vitamins,antioxidants,minerals."],
                     vitamins: "itamins are organic compounds that are essential for the proper functioning of the human body.",
        }
        
    },

    price: 1200,
}
console.log(`Name = ` + fruit.fruit_name);
console.log(`OtherName = ` + fruit.otherName);
console.log(`Price =  ${fruit.price} per K.G`);
console.log(`About This Fruit = ` + fruit.aboutThisFruit);
console.log(`Appearnce = ` + fruit.aboutThisFruit.appearnce.howItLook);
console.log(`Cultural Significance = ` + fruit.aboutThisFruit.culturalSignificance.itsCultureSignificance);
console.log(`Odor = ` + fruit.aboutThisFruit.odor.howISItsSmell);
console.log(`its-BENIFITS = `+ fruit.aboutThisFruit.healthBenefits.itsBenifits[0]);
console.log(`Vitamins = `+ fruit.aboutThisFruit.healthBenefits.vitamins);
