
const myarr = [
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R LXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.54 Lakh - 6.44 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R VXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.01 Lakh - 6.89 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R ZXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.36 Lakh - 7.24 Lakh",
     "Car Average (kmpl)": "20.52 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R ZXi+",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AGS",
     "Price Range Lakh (INR)": "6.83 Lakh - 7.42 Lakh",
     "Car Average (kmpl)": "20.52 (MT), 21.50 (AGS)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R LXi CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.44 Lakh - 6.89 Lakh",
     "Car Average (kmpl)": 33.54
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Wagon R VXi CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.90 Lakh - 7.24 Lakh",
     "Car Average (kmpl)": 33.54
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire LXi",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.23 Lakh - 6.90 Lakh",
     "Car Average (kmpl)": "21.21 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire VXi",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.68 Lakh - 7.35 Lakh",
     "Car Average (kmpl)": "21.21 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire ZXi",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.22 Lakh - 8.04 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire ZXi+",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.69 Lakh - 8.32 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire LXi CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.39 Lakh - 7.62 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Dzire VXi CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.85 Lakh - 8.08 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift LXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.39 Lakh - 6.22 Lakh",
     "Car Average (kmpl)": "21.6 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift VXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "5.82 Lakh - 7.09 Lakh",
     "Car Average (kmpl)": "21.6 (MT), 22.3 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift ZXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.21 Lakh - 7.57 Lakh",
     "Car Average (kmpl)": "20.9 (MT), 22.1 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift ZXi+",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.62 Lakh - 8.00 Lakh",
     "Car Average (kmpl)": "20.9 (MT), 22.1 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift LXi CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.08 Lakh - 6.41 Lakh",
     "Car Average (kmpl)": 30.9
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Swift VXi CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.54 Lakh - 6.87 Lakh",
     "Car Average (kmpl)": 30.9
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto 800 STD",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "3.59 Lakh - 3.92 Lakh",
     "Car Average (kmpl)": "24.35 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto 800 LXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "3.73 Lakh - 4.06 Lakh",
     "Car Average (kmpl)": "24.35 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto K10 STD",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "4.46 Lakh - 4.94 Lakh",
     "Car Average (kmpl)": "24.97 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto K10 LXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "4.63 Lakh - 5.11 Lakh",
     "Car Average (kmpl)": "24.97 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto K10 VXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "5.05 Lakh - 5.53 Lakh",
     "Car Average (kmpl)": "24.39 (MT), 21.14 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto K10 ZXi",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "5.46 Lakh - 5.94 Lakh",
     "Car Average (kmpl)": "24.07 (MT), 21.14 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Alto K10 CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.66 Lakh - 5.99 Lakh",
     "Car Average (kmpl)": 35.54
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Sigma",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.84 Lakh - 6.16 Lakh",
     "Car Average (kmpl)": "20.89 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Delta",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.11 Lakh - 6.43 Lakh",
     "Car Average (kmpl)": "20.89 (MT), 20.89 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Zeta",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.46 Lakh - 6.78 Lakh",
     "Car Average (kmpl)": "20.89 (MT), 20.89 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Alpha",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.81 Lakh - 7.13 Lakh",
     "Car Average (kmpl)": "20.89 (MT), 20.89 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Sigma CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.76 Lakh - 7.08 Lakh",
     "Car Average (kmpl)": 27.42
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Delta CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.03 Lakh - 7.35 Lakh",
     "Car Average (kmpl)": 27.42
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Zeta CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.38 Lakh - 7.60 Lakh",
     "Car Average (kmpl)": 27.42
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ignis Alpha CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.73 Lakh - 8.05 Lakh",
     "Car Average (kmpl)": 27.42
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Sigma MT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.61 Lakh - 6.94 Lakh",
     "Car Average (kmpl)": "22.35 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Delta MT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.00 Lakh - 7.33 Lakh",
     "Car Average (kmpl)": "22.35 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Zeta MT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.45 Lakh - 7.78 Lakh",
     "Car Average (kmpl)": "21.54 (MT), 24.43 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Alpha MT\/AT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "8.06 Lakh - 8.85 Lakh",
     "Car Average (kmpl)": "21.12 (MT), 18.69 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Sigma CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.49 Lakh - 7.82 Lakh",
     "Car Average (kmpl)": 30.61
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Delta CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.86 Lakh - 8.19 Lakh",
     "Car Average (kmpl)": 30.61
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Zeta CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.31 Lakh - 8.64 Lakh",
     "Car Average (kmpl)": 30.61
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Baleno Alpha CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.76 Lakh - 9.09 Lakh",
     "Car Average (kmpl)": 30.61
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ciaz Sigma MT",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.98 Lakh - 7.31 Lakh",
     "Car Average (kmpl)": "20.54 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ciaz Delta MT",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.35 Lakh - 7.68 Lakh",
     "Car Average (kmpl)": "20.54 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ciaz Zeta MT\/AT",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "7.80 Lakh - 8.63 Lakh",
     "Car Average (kmpl)": "20.45 (MT), 17.96 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Ciaz Alpha MT\/AT",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "8.29 Lakh - 9.12 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 17.96 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "XL6 Zeta",
     "Body Type": "MPV",
     "Fuel Type": "Petrol",
     "Car Seats": 6,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "11.29 Lakh - 12.79 Lakh",
     "Car Average (kmpl)": "20.97 (MT), 20.27 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "XL6 Alpha",
     "Body Type": "MPV",
     "Fuel Type": "Petrol",
     "Car Seats": 6,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "12.56 Lakh - 14.06 Lakh",
     "Car Average (kmpl)": "20.97 (MT), 20.27 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "XL6 Zeta CNG",
     "Body Type": "MPV",
     "Fuel Type": "CNG",
     "Car Seats": 6,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.56 Lakh - 13.06 Lakh",
     "Car Average (kmpl)": 26.32
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "XL6 Alpha CNG",
     "Body Type": "MPV",
     "Fuel Type": "CNG",
     "Car Seats": 6,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "13.16 Lakh - 14.66 Lakh",
     "Car Average (kmpl)": 26.32
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Invicto Zeta+",
     "Body Type": "MPV",
     "Fuel Type": "Hybrid Electric",
     "Car Seats": 7,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "24.82 Lakh - 28.42 Lakh",
     "Car Average (kmpl)": "23.24 (Combined)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Invicto Zeta+",
     "Body Type": "MPV",
     "Fuel Type": "Hybrid Electric",
     "Car Seats": 7,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "24.82 Lakh - 28.42 Lakh",
     "Car Average (kmpl)": "23.24 (Combined)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Jimny Zeta MT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "12.74 Lakh - 13.69 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Jimny Alpha MT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "13.69 Lakh - 14.64 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Jimny Alpha AT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "14.64 Lakh - 15.05 Lakh",
     "Car Average (kmpl)": "20.52 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Jimny Alpha Dual Tone MT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "13.94 Lakh - 14.89 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Jimny Alpha Dual Tone AT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "14.94 Lakh - 15.05 Lakh",
     "Car Average (kmpl)": "20.52 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Sigma",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.46 Lakh - 7.79 Lakh",
     "Car Average (kmpl)": "21.79 (MT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Delta",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.95 Lakh - 8.28 Lakh",
     "Car Average (kmpl)": "21.79 (MT), 21.50 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Delta+",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.42 Lakh - 8.75 Lakh",
     "Car Average (kmpl)": "21.79 (MT), 21.50 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Zeta Turbo",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "9.74 Lakh - 10.07 Lakh",
     "Car Average (kmpl)": "20.52 (MT), 21.50 (AMT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Alpha Turbo",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "11.63 Lakh - 13.13 Lakh",
     "Car Average (kmpl)": "20.52 (MT), 18.69 (AT)"
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Sigma CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.41 Lakh - 8.74 Lakh",
     "Car Average (kmpl)": 33.54
    },
    {
     "Car Brand": "Maruti Suzuki",
     "Car Variant": "Fronx Delta CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.28 Lakh - 9.61 Lakh",
     "Car Average (kmpl)": 33.54
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XE",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.60 Lakh - 6.90 Lakh",
     "Car Average (kmpl)": "21.21 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.08 Lakh - 7.35 Lakh",
     "Car Average (kmpl)": "21.21 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM+",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.38 Lakh - 7.65 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM+(S)",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.57 Lakh - 7.84 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.86 Lakh - 8.13 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.31 Lakh - 8.58 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ+(S)",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.72 Lakh - 9.00 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Turbo",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/DCT",
     "Price Range Lakh (INR)": "9.73 Lakh - 10.62 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Plus S Dark Edition",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "9.15 Lakh - 9.43 Lakh",
     "Car Average (kmpl)": "20.36 (MT), 23.15 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZA DCT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "DCT",
     "Price Range Lakh (INR)": "10.28 Lakh - 10.56 Lakh",
     "Car Average (kmpl)": "17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Plus S Turbo",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/DCT",
     "Price Range Lakh (INR)": "10.01 Lakh - 10.90 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Plus S Turbo Dark Edition",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/DCT",
     "Price Range Lakh (INR)": "10.44 Lakh - 10.73 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZA Plus S DCT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "DCT",
     "Price Range Lakh (INR)": "10.83 Lakh - 11.12 Lakh",
     "Car Average (kmpl)": "17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XE CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.39 Lakh - 7.62 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.85 Lakh - 8.08 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM+ CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.14 Lakh - 8.37 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM+(S) CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.33 Lakh - 8.56 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XT CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.60 Lakh - 8.83 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.05 Lakh - 9.31 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ+(S) CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.46 Lakh - 9.72 Lakh",
     "Car Average (kmpl)": 31.12
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XE Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.54 Lakh - 7.79 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM Plus Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.79 Lakh - 9.05 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XM Plus S Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.24 Lakh - 9.49 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XT Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.34 Lakh - 9.59 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.84 Lakh - 10.10 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Plus S Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.38 Lakh - 10.64 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Altroz XZ Plus S Dark Edition Diesel",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.73 Lakh - 10.99 Lakh",
     "Car Average (kmpl)": "23.64 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XE",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "15.20 Lakh - 15.46 Lakh",
     "Car Average (kmpl)": "18.50 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XM",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "16.23 Lakh - 17.71 Lakh",
     "Car Average (kmpl)": "18.50 (MT), 17.35 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XT",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "17.51 Lakh - 19.05 Lakh",
     "Car Average (kmpl)": "18.50 (MT), 17.35 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XZ",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "19.19 Lakh - 20.73 Lakh",
     "Car Average (kmpl)": "18.50 (MT), 17.35 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XZ+",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "21.70 Lakh - 22.24 Lakh",
     "Car Average (kmpl)": "17.35 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XT+",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "19.43 Lakh - 20.97 Lakh",
     "Car Average (kmpl)": "15.63 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Harrier XZ+(P)",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "21.41 Lakh - 21.95 Lakh",
     "Car Average (kmpl)": "15.63 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XE",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.43 Lakh - 5.68 Lakh",
     "Car Average (kmpl)": "25.20 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XM",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.72 Lakh - 5.97 Lakh",
     "Car Average (kmpl)": "25.20 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XT",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.01 Lakh - 6.43 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XZ",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.30 Lakh - 6.72 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XZ+",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.59 Lakh - 7.01 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XE CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.96 Lakh - 6.21 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XM CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.25 Lakh - 6.50 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XT CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.54 Lakh - 6.88 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XZ CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.83 Lakh - 7.17 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tiago XZ+ CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.12 Lakh - 7.46 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XE",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.30 Lakh - 6.55 Lakh",
     "Car Average (kmpl)": "25.20 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XM",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.59 Lakh - 6.84 Lakh",
     "Car Average (kmpl)": "25.20 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XT",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.88 Lakh - 7.30 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XZ",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.17 Lakh - 7.59 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XZ+",
     "Body Type": "Sedan",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.46 Lakh - 7.88 Lakh",
     "Car Average (kmpl)": "25.20 (MT), 23.40 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XE CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.63 Lakh - 6.88 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XM CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.92 Lakh - 7.17 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XT CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.21 Lakh - 7.46 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XZ CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.50 Lakh - 7.75 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Tigor XZ+ CNG",
     "Body Type": "Sedan",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT LEATHERETTE",
     "Price Range Lakh (INR)": "7.79 Lakh - 8.04 Lakh",
     "Car Average (kmpl)": 33.44
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XE",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.56 Lakh - 7.81 Lakh",
     "Car Average (kmpl)": "18.15 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XM",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "7.85 Lakh - 8.10 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XM+(S)",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.14 Lakh - 8.39 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.43 Lakh - 8.68 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZ",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "8.72 Lakh - 9.12 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (AMT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZ+(P)",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/DCT",
     "Price Range Lakh (INR)": "9.55 Lakh - 10.04 Lakh",
     "Car Average (kmpl)": "18.15 (MT), 17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZA+S DCT",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "DCT",
     "Price Range Lakh (INR)": "10.10 Lakh - 10.39 Lakh",
     "Car Average (kmpl)": "17.64 (DCT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XE Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.75 Lakh - 10.00 Lakh",
     "Car Average (kmpl)": "23.00 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XM Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.72 Lakh - 10.97 Lakh",
     "Car Average (kmpl)": "23.00 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XM+(S) Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.01 Lakh - 11.26 Lakh",
     "Car Average (kmpl)": "23.00 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XT Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.30 Lakh - 11.55 Lakh",
     "Car Average (kmpl)": "23.00 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZ Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.59 Lakh - 11.84 Lakh",
     "Car Average (kmpl)": "23.00 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZ+ Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "12.78 Lakh - 13.32 Lakh",
     "Car Average (kmpl)": "23.00 (MT), 22.40 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Nexon XZA+S Diesel Dark Edition",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "13.57 Lakh - 13.72 Lakh",
     "Car Average (kmpl)": "22.40 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XE",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "16.19 Lakh - 16.44 Lakh",
     "Car Average (kmpl)": "16.3 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XM",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "17.26 Lakh - 17.51 Lakh",
     "Car Average (kmpl)": "16.3 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XM+",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "18.33 Lakh - 18.58 Lakh",
     "Car Average (kmpl)": "16.3 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XT",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "19.40 Lakh - 21.70 Lakh",
     "Car Average (kmpl)": "16.3 (MT), 16.0 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XZ",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "20.47 Lakh - 22.92 Lakh",
     "Car Average (kmpl)": "16.3 (MT), 16.0 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XZ+",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "22.63 Lakh - 25.08 Lakh",
     "Car Average (kmpl)": "16.3 (MT), 16.0 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari XZ+ Dark",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "23.28 Lakh - 25.73 Lakh",
     "Car Average (kmpl)": "16.3 (MT), 16.0 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari Adventure (O)",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "19.52 Lakh - 19.77 Lakh",
     "Car Average (kmpl)": "14.5 (MT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari Adventure+",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "20.59 Lakh - 23.94 Lakh",
     "Car Average (kmpl)": "14.5 (MT), 14.1 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari Accomplished",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "22.76 Lakh - 26.21 Lakh",
     "Car Average (kmpl)": "14.5 (MT), 14.1 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari Accomplished+",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "23.83 Lakh - 27.28 Lakh",
     "Car Average (kmpl)": "14.5 (MT), 14.1 (AT)"
    },
    {
     "Car Brand": "Tata ",
     "Car Variant": "Safari Accomplished+ Dark",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "24.48 Lakh - 27.93 Lakh",
     "Car Average (kmpl)": "14.5 (MT), 14.1 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Thar AX (MT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 4,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.99 Lakh - 10.35 Lakh",
     "Car Average (kmpl)": "16.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Thar LX (MT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 4,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.87 Lakh - 11.23 Lakh",
     "Car Average (kmpl)": "16.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Thar LX (AT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 4,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "12.83 Lakh - 13.19 Lakh",
     "Car Average (kmpl)": "15.2 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago AX (MT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 4,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.35 Lakh - 9.71 Lakh",
     "Car Average (kmpl)": "17.5 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago LX (MT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 4,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.23 Lakh - 10.59 Lakh",
     "Car Average (kmpl)": "17.5 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago LX (AT)",
     "Body Type": "Off-road SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 4,
     "Car Transmissions": "Automatic",
     "Price Range Lakh (INR)": "12.20 Lakh - 12.56 Lakh",
     "Car Average (kmpl)": "16.2 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio S5",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "16.54 Lakh - 16.80 Lakh",
     "Car Average (kmpl)": "14.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio S9",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "17.79 Lakh - 20.23 Lakh",
     "Car Average (kmpl)": "14.2 (MT), 10.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio Z2",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "18.63 Lakh - 21.07 Lakh",
     "Car Average (kmpl)": "14.2 (MT), 10.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio Z2 AWD",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "19.06 Lakh - 21.50 Lakh",
     "Car Average (kmpl)": "13.8 (MT), 10.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio S3",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "14.63 Lakh - 14.89 Lakh",
     "Car Average (kmpl)": "17.4 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio S7",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "15.88 Lakh - 16.14 Lakh",
     "Car Average (kmpl)": "17.4 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio S11",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "17.13 Lakh - 19.57 Lakh",
     "Car Average (kmpl)": "17.4 (MT), 16.5 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio Z4",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "18.01 Lakh - 20.45 Lakh",
     "Car Average (kmpl)": "17.4 (MT), 16.5 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Scorpio Z4 AWD",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "18.44 Lakh - 20.89 Lakh",
     "Car Average (kmpl)": "16.3 (MT), 16.5 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B2 (STD)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.69 Lakh - 8.95 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B2 (DX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.02 Lakh - 9.28 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B4 (STD)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.37 Lakh - 9.63 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B4 (DX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "9.70 Lakh - 9.96 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B4 (LX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.03 Lakh - 10.29 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B6 (STD)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "10.82 Lakh - 11.08 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B6 (DX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.15 Lakh - 11.41 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero B6 (LX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.48 Lakh - 11.74 Lakh",
     "Car Average (kmpl)": "17.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero PowerPlus B12 (LX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "11.96 Lakh - 12.22 Lakh",
     "Car Average (kmpl)": "16.4 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Bolero PowerPlus B15 (LX)",
     "Body Type": "Utility Vehicle",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "12.49 Lakh - 12.75 Lakh",
     "Car Average (kmpl)": "16.4 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "XUV300 W4",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.49 Lakh - 8.75 Lakh",
     "Car Average (kmpl)": "13.2 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "XUV300 W6",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "9.00 Lakh - 9.50 Lakh",
     "Car Average (kmpl)": "13.2 (MT), 12.7 (AMT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "XUV300 W8",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT\/Automatic",
     "Price Range Lakh (INR)": "9.50 Lakh - 10.75 Lakh",
     "Car Average (kmpl)": "13.2 (MT), 12.7 (AMT), 11.9 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "XUV300 W8 (O)",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT\/Automatic",
     "Price Range Lakh (INR)": "10.32 Lakh - 11.68 Lakh",
     "Car Average (kmpl)": "13.2 (MT), 12.7 (AMT), 11.9 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago W4",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "8.99 Lakh - 9.25 Lakh",
     "Car Average (kmpl)": "20.0 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago W6",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "9.50 Lakh - 10.00 Lakh",
     "Car Average (kmpl)": "20.0 (MT), 19.3 (AMT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago W8",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT\/Automatic",
     "Price Range Lakh (INR)": "10.00 Lakh - 11.35 Lakh",
     "Car Average (kmpl)": "20.0 (MT), 19.3 (AMT), 17.5 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "Tiago W8 (O)",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT\/Automatic",
     "Price Range Lakh (INR)": "10.82 Lakh - 12.18 Lakh",
     "Car Average (kmpl)": "20.0 (MT), 19.3 (AMT), 17.5 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 MX",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "13.99 Lakh - 14.25 Lakh",
     "Car Average (kmpl)": "16.0 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX3",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "16.39 Lakh - 18.43 Lakh",
     "Car Average (kmpl)": "16.0 (MT), 15.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX5",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "17.69 Lakh - 19.35 Lakh",
     "Car Average (kmpl)": "16.0 (MT), 15.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX7",
     "Body Type": "SUV",
     "Fuel Type": "Petrol",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic\/Luxury Pack",
     "Price Range Lakh (INR)": "21.29 Lakh - 25.59 Lakh",
     "Car Average (kmpl)": "16.0 (MT), 15.4 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 MX Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "14.82 Lakh - 15.08 Lakh",
     "Car Average (kmpl)": "20.5 (MT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX3 Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "17.64 Lakh - 19.77 Lakh",
     "Car Average (kmpl)": "20.5 (MT), 19.8 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX5 Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "18.43 Lakh - 20.55 Lakh",
     "Car Average (kmpl)": "20.5 (MT), 19.8 (AT)"
    },
    {
     "Car Brand": "Mahindra ",
     "Car Variant": "700 AX7 Diesel",
     "Body Type": "SUV",
     "Fuel Type": "Diesel",
     "Car Seats": 7,
     "Car Transmissions": "Manual\/Automatic\/Luxury Pack\/AWD",
     "Price Range Lakh (INR)": "22.95 Lakh - 26.57 Lakh",
     "Car Average (kmpl)": "20.5 (MT), 19.8 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Era",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "5.66 Lakh - 5.92 Lakh",
     "Car Average (kmpl)": "20.3 (MT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Magna",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.01 Lakh - 6.71 Lakh",
     "Car Average (kmpl)": "20.3 (MT), 19.0 (AMT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Sportz",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT",
     "Price Range Lakh (INR)": "6.39 Lakh - 7.09 Lakh",
     "Car Average (kmpl)": "20.3 (MT), 19.0 (AMT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Nios",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/AMT\/Automatic",
     "Price Range Lakh (INR)": "6.74 Lakh - 7.95 Lakh",
     "Car Average (kmpl)": "20.3 (MT), 19.0 (AMT), 17.7 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Magna CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "6.80 Lakh - 7.50 Lakh",
     "Car Average (kmpl)": "27.1 (MT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Sportz CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.18 Lakh - 7.88 Lakh",
     "Car Average (kmpl)": "27.1 (MT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "Grand i10 Nios Nios CNG",
     "Body Type": "Hatchback",
     "Fuel Type": "CNG",
     "Car Seats": 5,
     "Car Transmissions": "Manual",
     "Price Range Lakh (INR)": "7.53 Lakh - 8.73 Lakh",
     "Car Average (kmpl)": "27.1 (MT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Magna",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "7.83 Lakh - 9.70 Lakh",
     "Car Average (kmpl)": "18.5 (MT), 17.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Sportz",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "8.29 Lakh - 10.16 Lakh",
     "Car Average (kmpl)": "18.5 (MT), 17.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Asta",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "9.05 Lakh - 11.02 Lakh",
     "Car Average (kmpl)": "18.5 (MT), 17.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 N Line",
     "Body Type": "Hatchback",
     "Fuel Type": "Petrol",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "10.21 Lakh - 12.08 Lakh",
     "Car Average (kmpl)": "18.5 (MT), 17.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Magna",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "8.96 Lakh - 10.83 Lakh",
     "Car Average (kmpl)": "24.0 (MT), 22.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Sportz",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "9.42 Lakh - 11.29 Lakh",
     "Car Average (kmpl)": "24.0 (MT), 22.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 Asta",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "10.20 Lakh - 12.07 Lakh",
     "Car Average (kmpl)": "24.0 (MT), 22.0 (AT)"
    },
    {
     "Car Brand": "Hyundai",
     "Car Variant": "i20 N Line",
     "Body Type": "Hatchback",
     "Fuel Type": "Diesel",
     "Car Seats": 5,
     "Car Transmissions": "Manual\/Automatic",
     "Price Range Lakh (INR)": "11.36 Lakh - 13.23 Lakh",
     "Car Average (kmpl)": "24.0 (MT), 22.0 (AT)"
    }
   ];

const carBrand = document.getElementById('Car-Brand');
const budget = document.getElementById('Budget');
const bodyType = document.getElementById('BodyType');
const fuelType = document.getElementById('Fuel-Type');
const CarSeats = document.getElementById('Car-Seats');
const CarTransmissions = document.getElementById('Car-Transmissions');

const submitBtn = document.getElementById('submitBtn');
const selectForms = document.querySelectorAll('.choosemain');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

function checkAllOptions(){

    for(let i=0; i<selectForms.length; i++){
        if(selectForms[i].selectedIndex == 0){
            alert("Please Select " + selectForms[i].id);
            return;
        }
    }

    getSimilarVariants();
}

function ShowCars(variant, carContainerDiv){
    let mydiv = document.createElement('div');
    for(const key in variant){
        let newPara = document.createElement('p');
        let txt = `${key}`;
        let val = `${variant[key]}`;
        newPara.textContent = txt +" : " + val;

        mydiv.appendChild(newPara);
    }
    mydiv.classList.add('car-varient');
    carContainerDiv.appendChild(mydiv);
}

function getSimilarVariants(){
    let cBrand = carBrand[carBrand.selectedIndex].innerText;
    let bType = bodyType[bodyType.selectedIndex].innerText;
    let fType = fuelType[fuelType.selectedIndex].innerText;
    let cSeats = CarSeats[CarSeats.selectedIndex].innerText;
    let cTransmission = CarTransmissions[CarTransmissions.selectedIndex].innerText;
    
    const filtered_exculding_budget = myarr.filter((variant) => (variant["Car Brand"] == cBrand && variant["Body Type"] == bType && variant["Fuel Type"] == fType && variant["Car Seats"] == cSeats && variant["Car Transmissions"] == cTransmission))

    let bdgtRange = budget[budget.selectedIndex].innerText;
    let minBdgt = parseInt(bdgtRange.substring(0,2));
    let maxBdgt = parseInt(bdgtRange.substring(3,5));

    const filtered = filtered_exculding_budget.filter((variant) => {
        let priceRange = variant["Price Range Lakh (INR)"];
        
        let minPrice = Math.floor(parseFloat(priceRange.substring(0,4)));
        let maxPrice = Math.ceil(parseFloat(priceRange.substring(12, 16)));

        if(minBdgt >= minPrice && minBdgt <= maxPrice) return true;
        
        if(maxBdgt >= minPrice && maxBdgt <= maxPrice) return true;
        
        return false;
    });
    
    if(filtered.length == 0){
        alert('No cars Found');
        return;
    }
    console.log(filtered);

    //Sort and Get Only Three
    filtered.sort(function(a,b){
        let priceRange_a = a["Price Range Lakh (INR)"];
        let minPrice_a = Math.floor(parseFloat(priceRange_a.substring(0,4)));

        let priceRange_b = b["Price Range Lakh (INR)"];
        let minPrice_b = Math.ceil(parseFloat(priceRange_b.substring(12, 16)));
        
        if(minPrice_a < minPrice_b) return -1;
        return 1;
    });

    let carContainerDiv = document.createElement('div');
    for(let i = 0; i<Math.min(3, filtered.length); i++){
        ShowCars(filtered[i], carContainerDiv);
    }

    // filtered.forEach((variant) => {
    //     ShowCars(variant, carContainerDiv);
    // });

    document.body.appendChild(carContainerDiv);
    carContainerDiv.classList.add('car-container');
    section1.classList.add('result-active');
    section2.classList.add('result-active');
}

submitBtn.addEventListener('click', checkAllOptions);
