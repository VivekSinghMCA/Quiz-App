const questions = [
    {
        question: " What does the color of the stars depend on?",
        answers: [
            {text: "radius", correct: false},
            {text: "atmospheric pressure", correct: false},
            {text: "temperature", correct: true},
            {text: "distance", correct: false},
        ]
    },

    {
        question: " Which one of the following is not an electronic banking delivery channel?",
        answers: [
            {text: "Internet banking", correct: true},
            {text: "Mobile Phone Banking", correct: false},
            {text: "Mobile Van", correct: false},
            {text: "Tele banking", correct: false},
        ]
    },

    {
        question: " Which of the following cards has a higher credit risk to the bank?",
        answers: [
            {text: "ATM Card", correct: false},
            {text: "Credit Card", correct: true},
            {text: "Debit Card", correct: false},
            {text: "ALL OF THE ABOVE", correct: false},
        ]
    },

    {
        question: " What type of loan is given by banks for the purchase of luxury goods?",
        answers: [
            {text: "Mortgage Loan", correct: false},
            {text: "Housing Loans", correct: false},
            {text: "Sustainable Consumer Goods Loans", correct: true},
            {text: "Consumption loan", correct: false},
        ]
    },

    {
        question: " Fixed and Recurring Deposits?",
        answers: [
            {text: "estion Add Direction Title", correct: false},
            {text: "are refundable after the agreed period", correct: false},
            {text: "Repayable after death of depositors", correct: false},
            {text: "refundable on demand", correct: true},
        ]
    },

    {
        question: " Which bank has been declared the best small bank for 2016?",
        answers: [
            {text: "Dena Bank", correct: false},
            {text: "Yes Bank", correct: false},
            {text: "Karur Vysya Bank", correct: true},
            {text: "None of these", correct: false},
        ]
    },

    {
        question: " Which country of rivers is called?",
        answers: [
            {text: "Bangladesh", correct: true},
            {text: "Spain", correct: false},
            {text: "Brazil", correct: false},
            {text: "India", correct: false},
        ]
    },

    {
        question: " Where is the head office of Life Insurance Corporation of India (LIC)?",
        answers: [
            {text: "Jaipur", correct: false},
            {text: "New Delhi", correct: false},
            {text: "Mumbai", correct: true},
            {text: "Ahmedabad", correct: false},
        ]
    },

    {
        question: " Which of the following is not a fixed time for withdrawal of debentures?",
        answers: [
            {text: "Readable debentures", correct: false},
            {text: "Irrevocable debentures", correct: false},
            {text: "Irresistible debentures", correct: true},
            {text: "None of these", correct: false},
        ]
    },

    {
        question: " In how many languages is the denomination of a note mentioned on an Indian rupee note?",
        answers: [
            {text: "17 languages", correct: false},
            {text: "16 languages", correct: false},
            {text: "15 languages", correct: true},
            {text: "14 languages", correct: false},
        ]
    },

    {
        question: " Which bank has foreign exchange related functions?",
        answers: [
            {text: "Of Offshore Banking", correct: true},
            {text: "State Bank of India", correct: false},
            {text: "Merchant Bank", correct: false},
            {text: "None of these", correct: false},
        ]
    },

    {
        question: " What currency are notes and coins issued by the government and central bank of the country?",
        answers: [
            {text: "Legitimate currency", correct: true},
            {text: "contiguous currency", correct: false},
            {text: "Statutory Currency", correct: false},
            {text: "acceptable currency", correct: false},
        ]
    },

    {
        question: " Which of the following measures does the Reserve Bank of India take to control inflation in our country?",
        answers: [
            {text: "Increasing repurpose repo rate", correct: true},
            {text: "increase CRR", correct: false},
            {text: "increase in SLR", correct: false},
            {text: "Money supply contraction", correct: false},
        ]
    },

    {
        question: " Interest payable on Savings Bank?",
        answers: [
            {text: "Not regulated by Reserve Bank of India", correct: false},
            {text: "is regulated by the Reserve Bank of India", correct: true},
            {text: "is regulated by the Central Government", correct: false},
            {text: "is regulated by the state governments", correct: false},
        ]
    },

    {
        question: " Which of the following organizations provide the borrowers with a loan background?",
        answers: [
            {text: "CIBIL", correct: true},
            {text: "CAMELS", correct: false},
            {text: "SEBI", correct: false},
            {text: "RBI", correct: false},
        ]
    },

    {
        question: " What is an acronym for GVA?",
        answers: [
            {text: "General Value Area", correct: false},
            {text: "Goods Value Algorithm", correct: false},
            {text: "Generalized Voluntary Action", correct: false},
            {text: "Gross Value Added", correct: true},
        ]
    },

    {
        question: " SIDBI stands for?",
        answers: [
            {text: "Small-scale Industries Deployment Bank Industry", correct: false},
            {text: "Small Industries Development Bank of India", correct: true},
            {text: "Small Interactive Deployment Bank Industry", correct: false},
            {text: "Small Investment Development Bank of India", correct: false},
        ]
    },

    {
        question: " Which is the biggest loan portal set up by SIDBI to facilitate anywhere any time access to MUDRA loans?",
        answers: [
            {text: "SIDBI Venture Capital Limited", correct: false},
            {text: "Udyami Mitra", correct: true},
            {text: "SMERA Ratings Limited", correct: false},
            {text: "Startup Mitra", correct: false},
        ]
    },

    {
        question: " What does C stands for in CGTMSE?",
        answers: [
            {text: "Capital", correct: false},
            {text: "Central", correct: false},
            {text: "Credit", correct: true},
            {text: "Conceptualized", correct: false},
        ]
    },

    {
        question: " Which of the following organizations is the Mutual Fund market regulator in India?",
        answers: [
            {text: "CIBIL", correct: false},
            {text: "ICICI", correct: false},
            {text: "RBI", correct: false},
            {text: "SEBI", correct: true},
        ]
    },

    {
        question: " What happens when CRR is increased?",
        answers: [
            {text: "It decreases money supply", correct: false},
            {text: "It increases demand for money", correct: false},
            {text: " It decreases inflation", correct: false},
            {text: "All of the above", correct: true},
        ]
    },

    {
        question: " What do we call the money that is lent for one day in the call money market?",
        answers: [
            {text: "Call Money", correct: true},
            {text: "Notice Money", correct: false},
            {text: "Term Money", correct: false},
            {text: "Day Money", correct: false},
        ]
    },

    {
        question: " Which pension plan provides benefits of pension by employer of organization?",
        answers: [
            {text: "discretionary plan", correct: false},
            {text: "non-contributory plan", correct: true},
            {text: "contributory plan", correct: false},
            {text: "Non-discretionary plan", correct: false},
        ]
    },

    {
        question: " The Lead Bank Scheme was finalised to adopt a which of the following for intensive development?",
        answers: [
            {text: "Town", correct: false},
            {text: "District", correct: false},
            {text: "State", correct: false},
            {text: "Village", correct: true},
        ]
    },

    {
        question: " Self Help groups is related to which of the following models?",
        answers: [
            {text: "Banking Model", correct: false},
            {text: "Indian Microfinance Model", correct: true},
            {text: "Financial Inclusion model", correct: false},
            {text: "VK Mehta Model", correct: false},
        ]
    },

    {
        question: " Which of the following has availed the Liberalised Remittance Scheme?",
        answers: [
            {text: "NABARD", correct: false},
            {text: "Government of India", correct: false},
            {text: "RBI", correct: true},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: " Which among the following are known as Narrow Money?",
        answers: [
            {text: "M1 and M2", correct: true},
            {text: "M2 and M3", correct: false},
            {text: "M3 and M4", correct: false},
            {text: "M1 and M4", correct: false},
        ]
    },

    {
        question: " Core Investment Company holds not less than how much percent of its net assests in the form of investment?",
        answers: [
            {text: "50%", correct: false},
            {text: "70%", correct: false},
            {text: "90%", correct: true},
            {text: "80%", correct: false},
        ]
    },

    {
        question: " Which of the following credit facilities comes under Infrastructure Laon?",
        answers: [
            {text: "Transport", correct: false},
            {text: "Energy", correct: false},
            {text: "Water and Sanitation", correct: false},
            {text: "All of the above", correct: true},
        ]
    },

    {
        question: " How much per cent of the total assets of the company should be deployed in the infrastructure loans?",
        answers: [
            {text: "60%", correct: false},
            {text: "75%", correct: true},
            {text: "80%", correct: false},
            {text: "50%", correct: false},
        ]
    },

    {
        question: " Credit facility in Infrastructure finance companies is related to which of the following?",
        answers: [
            {text: "Equity", correct: false},
            {text: "Shares", correct: false},
            {text: "Loan", correct: true},
            {text: "Infrastructures", correct: false},
        ]
    },

    {
        question: " Which among the following NBFC is not excluded from the Ombudsman scheme for NBFC?",
        answers: [
            {text: "Deposit accepting NBFCs", correct: true},
            {text: "NBFC-IFC", correct: false},
            {text: "Core Investment Company (CIC)", correct: false},
            {text: "IDF-NBFC", correct: false},
        ]
    },

    {
        question: " Which of the following are functions of financial services?",
        answers: [
            {text: "Mobilization of savings", correct: false},
            {text: "Allocation of fund", correct: false},
            {text: "Specialized services", correct: false},
            {text: "All of the above", correct: true},
        ]
    },

    {
        question: " Which company recently become the first depository to record over 60 million Demat accounts?",
        answers: [
            {text: "Delta Corp", correct: false},
            {text: "CDSL", correct: true},
            {text: "Quess Corp", correct: false},
            {text: "Info Edge", correct: false},
        ]
    },

    {
        question: " Which state has started the ‘Mukhyamantri Mitaan Yojana’ to provide 100 public services at the doorstep?",
        answers: [
            {text: "Telangana", correct: false},
            {text: "Jammu & Kashmir", correct: false},
            {text: "Chhattisgarh", correct: true},
            {text: "Himachal Pradesh", correct: false},
        ]
    },

    {
        question: " Which state government has signed a Memorandum of Understanding (MOU) with the NIXI-CSC Data Services Centre to create an international grade data center?",
        answers: [
            {text: "Tripura", correct: true},
            {text: "Nagaland", correct: false},
            {text: "Assam", correct: false},
            {text: "Manipur", correct: false},
        ]
    },

    {
        question: " Following the SWIFT ban, which nation has pushed India to restart the letter of credit mechanism?",
        answers: [
            {text: "Iran", correct: false},
            {text: "Russia", correct: true},
            {text: "USA", correct: false},
            {text: "North Korea", correct: false},
        ]
    },

    {
        question: " What is the sensitive index of the National Stock Exchange of India also known as?",
        answers: [
            {text: "SENSEX", correct: false},
            {text: "CRIS", correct: false},
            {text: "MCS", correct: false},
            {text: "NIFTY", correct: true},
        ]
    },

    {
        question: " At the time of periodical review, which of the following rates are reviewed by the Reserve Bank of India?",
        answers: [
            {text: "Repo Rate", correct: false},
            {text: "Bank Rate", correct: false},
            {text: "Both", correct: true},
            {text: "None", correct: false},
        ]
    },

    {
        question: " Where is the headquarters of the Asian Development Bank?",
        answers: [
            {text: "China", correct: false},
            {text: "Philippines", correct: true},
            {text: "India", correct: false},
            {text: "Indonesia", correct: false},
        ]
    },

    {
        question: " The money a commercial bank needs to preserve in the form of cash, or gold or Bonds before providing credit to their own customers is known as?",
        answers: [
            {text: "Statutory Liquidity Ratio", correct: true},
            {text: "Cash Reserve Ratio", correct: false},
            {text: "Liquidity adjustment facility", correct: false},
            {text: "None of the Above", correct: false},
        ]
    },

    {
        question: " Who was the first Indian Governor of RBI?",
        answers: [
            {text: "Sir Bengal Rama Rau", correct: false},
            {text: "L.K. Jha", correct: false},
            {text: "N.C. Sen Gupta", correct: false},
            {text: "Sir C.D. Deshmukh", correct: true},
        ]
    },

    {
        question: " Where a cheque bears across its face crossing with the name of a banker, such a crossing will be called?",
        answers: [
            {text: "General Crossing", correct: false},
            {text: "Special Crossing", correct: true},
            {text: "Restrictive Crossing", correct: false},
            {text: "Double Crossing", correct: false},
        ]
    },

    {
        question: " To combat the menace of money laundering, which of the following financial institutions has introduced the ‘Know Your Customer’ Scheme?",
        answers: [
            {text: "IDBI", correct: false},
            {text: "NABARD", correct: false},
            {text: "RBI", correct: true},
            {text: "SIDBI", correct: false},
        ]
    },

    {
        question: " Monetary policy is concerned with?",
        answers: [
            {text: "the changes in the supply of money", correct: false},
            {text: "buying and selling of financial instruments", correct: false},
            {text: "reducing unemployment", correct: false},
            {text: "All (1), (2) & (3)", correct: true},
        ]
    },

    {
        question: " NFS is operated by?",
        answers: [
            {text: "India Post", correct: false},
            {text: "NPCI", correct: true},
            {text: "RBI", correct: false},
            {text: "CCIL", correct: false},
        ]
    },

    {
        question: " Which of the following institutions is entrusted with the responsibility of Inspection of Regional Rural Banks?",
        answers: [
            {text: "NABARD", correct: true},
            {text: "State Bank of India", correct: false},
            {text: "Reserve Bank of India", correct: false},
            {text: "Respective State Government", correct: false},
        ]
    },

    {
        question: " Which taxes at the Central level are being subsumed into GST?",
        answers: [
            {text: "Central Excise Duty", correct: false},
            {text: "Additional Excise Duty", correct: false},
            {text: "Service Tax", correct: false},
            {text: "All the given options", correct: true},
        ]
    },

    {
        question: " Which of the following sectors contributes maximum in deciding the growth in income of the states in India?",
        answers: [
            {text: "Energy", correct: false},
            {text: "Tourism", correct: false},
            {text: "Service", correct: true},
            {text: "Agriculture", correct: false},
        ]
    },

    {
        question: " According to RBI guidelines, the ‘Payments Banks’ are ‘permitted’ to?",
        answers: [
            {text: "Accept NRI deposits", correct: false},
            {text: "Issue Credit/Debit Cards", correct: false},
            {text: "Distribute pension/mutual fund & insurance products", correct: true},
            {text: "Offer other financial/non-financial services of promoters", correct: false},
        ]
    },

    {
        question: " In which year, the first five year plan was launched in India?",
        answers: [
            {text: "1981", correct: false},
            {text: "1941", correct: false},
            {text: "1961", correct: false},
            {text: "1951", correct: true},
        ]
    },

    {
        question: "  ‘Financial Stability Report (FSR)’ is released by which institution?",
        answers: [
            {text: "World Bank", correct: false},
            {text: "Securities Exchange Board of India (SEBI)", correct: false},
            {text: "Reserve Bank of India (RBI)", correct: true},
            {text: "Asian Development Bank (ADB)", correct: false},
        ]
    },

    {
        question: " What is the maximum limit of Aadhaar-enabled cash withdrawal transactions, per customer, per terminal per day, as per NPCI?",
        answers: [
            {text: "10", correct: false},
            {text: "5", correct: true},
            {text: "8", correct: false},
            {text: "6", correct: false},
        ]
    },

    {
        question: " Which of the following statement/statements is/are correct regarding the 'Overdraft' facility of the Banks?",
        answers: [
            {text: "Bank provides this facility to current account holders.", correct: false},
            {text: "Account holder can withdraw money anytime up to the provided limit.", correct: false},
            {text: "Account holder needs to pay interest only on borrowed amount for the period for which he took loan.", correct: false},
            {text: "All are Correct", correct: true},
        ]
    },

    {
        question: " If a cheque bears the date later than the date on which it is drawn, then this type of check is known as?",
        answers: [
            {text: "Post-Dated Cheque", correct: true},
            {text: "Ante-Dated cheque", correct: false},
            {text: "Not Negotiable", correct: false},
            {text: "Out-dated cheque", correct: false},
        ]
    },

    {
        question: " Brown Label ATMs are owned and maintained by?",
        answers: [
            {text: "non-bank entities, which have been incorporated under Companies Act 1956.", correct: false},
            {text: "a service provider, but cash management and connectivity to banking networks is provided by a sponsor bank.", correct: true},
            {text: "Bank", correct: false},
            {text: "None is Correct", correct: false},
        ]
    },

    {
        question: " In which kind of 'crossing of cheques', the payment can be made through bank account only?",
        answers: [
            {text: "Special Crossing", correct: false},
            {text: "Restrictive Crossing", correct: false},
            {text: "Double Crossing", correct: false},
            {text: "General Crossing", correct: true},
        ]
    },

    {
        question: " What is 'C' stand for in the CORE of CORE Banking Solutions(CBS)?",
        answers: [
            {text: "Centralized", correct: true},
            {text: "Core", correct: false},
            {text: "Computerized", correct: false},
            {text: "Cost", correct: false},
        ]
    },

    {
        question: " Usha Thorat Committee is related to?",
        answers: [
            {text: "RNBCs", correct: false},
            {text: "NBFCs", correct: false},
            {text: "Small Finance Banks", correct: true},
            {text: "Public Sector Banks", correct: false},
        ]
    },

    {
        question: " What is the minimum paid-up equity capital for small finance banks?",
        answers: [
            {text: "50 Crore", correct: false},
            {text: "200 Crore", correct: true},
            {text: "150 Croreoan", correct: false},
            {text: "130 Crore", correct: false},
        ]
    },

    {
        question: " Which type of Non-Banking financial Company(NBFC) Receives deposits under any scheme or arrangement by government?",
        answers: [
            {text: "Mutual Benefit Financial Companies (MBFC)", correct: false},
            {text: "Residuary Non- Banking Company (RNBC)", correct: true},
            {text: "Miscellaneous Non- Banking Company (MNBC)", correct: false},
            {text: "None is Correct", correct: false},
        ]
    },

    {
        question: " ‘Masala Bond’ term is coined by which organization/institution?",
        answers: [
            {text: "Reserve Bank of India (RBI)", correct: false},
            {text: "Securities and Exchange Board of India (SEBI)", correct: false},
            {text: "State Bank of India", correct: false},
            {text: "International Financial Corporation (IFC)", correct: true},
        ]
    },

    {
        question: " India is not a member of which of the following International Financial Organisations?",
        answers: [
            {text: "International Bank for Reconstruction and Development (IBRD)", correct: false},
            {text: "International Finance Corporation (IFC)", correct: false},
            {text: "International Development Association (IDA)", correct: false},
            {text: "International Centre for Settlement of Investment Disputes (ICSID)", correct: true},
        ]
    },

    {
        question: " Which of the following International Financial Organisations has a feature of allotting Special Drawing Rights(SDRs)?",
        answers: [
            {text: "International Monetary Fund (IMF)", correct: true},
            {text: "Asian Infrastructure Investment Bank (AIIB)", correct: false},
            {text: "World Bank", correct: false},
            {text: "Asian Infrastructure Investment Bank (AIIB)", correct: false},
        ]
    },

    {
        question: " Who is the current President of World Bank Group (WBG)?",
        answers: [
            {text: "Jim Yong Kim", correct: false},
            {text: "Ajay Banga", correct: true},
            {text: "Christine Lagarde", correct: false},
            {text: "Jin Liqun", correct: false},
        ]
    },

    {
        question: " India's Executive Director also represents which of the following country/countries in International Monetary Fund (IMF)?",
        answers: [
            {text: "Bhutan", correct: false},
            {text: "Sri Lanka", correct: false},
            {text: "Bangladesh", correct: false},
            {text: "All of the Above ", correct: true},
        ]
    },

    {
        question: " Uruguay Round negotiations resulted in the establishment of?",
        answers: [
            {text: "OECD", correct: false},
            {text: "World Trade Organisation", correct: true},
            {text: "African Development Bank", correct: false},
            {text: "None is Correct", correct: false},
        ]
    },

    {
        question: "  'Fortaleza Declaration' is related to which of the following International Financial Organisation?",
        answers: [
            {text: "New Development Bank(NDB)", correct: true},
            {text: "European Bank for Reconstruction and Development (EBRD)", correct: false},
            {text: "World Trade Organisation", correct: false},
            {text: "Asian Infrastructure Investment Bank (AIIB)", correct: false},
        ]
    },

    {
        question: " The Subscribed capital of BRICS Bank is?",
        answers: [
            {text: "$ 100 Billion", correct: false},
            {text: "$ 50 Billion", correct: true},
            {text: "$ 150 Billion", correct: false},
            {text: "There is no Subscribed capital of BRICS Bank", correct: false},
        ]
    },

    {
        question: " Which of the following is not a member of Organisation for Economic Co-operation and Development(OECD)?",
        answers: [
            {text: "Brazil", correct: false},
            {text: "China", correct: false},
            {text: "India", correct: false},
            {text: "None of the Above", correct: true},
        ]
    },

    {
        question: " What Percentage of branches of a particular bank has to be opened in rural areas as mandated by RBI?",
        answers: [
            {text: "30 percent", correct: false},
            {text: "35 percent", correct: false},
            {text: "25 percent", correct: true},
            {text: "40 percent", correct: false},
        ]
    },

    {
        question: " From Where was the Reserve Bank of India(RBI)Headquarter permanently moved to Mumbai in 1937?",
        answers: [
            {text: "Jaipur", correct: false},
            {text: "Kolkata", correct: true},
            {text: "New Delhi", correct: false},
            {text: "Bangalore", correct: false},
        ]
    },

    {
        question: " The term of Insurance Regulatory And Development Authority(IRDA) chairman is?",
        answers: [
            {text: "3 years", correct: false},
            {text: "7 years", correct: false},
            {text: "2 years", correct: false},
            {text: "5 years", correct: true},
        ]
    },

    {
        question: " What Percentage of loans by a particular bank has to be provided to Priority Sector as mandated by RBI?",
        answers: [
            {text: "25 percent", correct: false},
            {text: "35 percent", correct: false},
            {text: "40 percent", correct: true},
            {text: "50 percent", correct: false},
        ]
    },

    {
        question: " When was RBI Nationalised in India?",
        answers: [
            {text: "1949", correct: true},
            {text: "1935", correct: false},
            {text: "1969", correct: false},
            {text: "1950", correct: false},
        ]
    },

    {
        question: " The chairman of the Securities And Exchange Board Of India(SEBI) is appointed by?",
        answers: [
            {text: "RBI", correct: false},
            {text: "Government of India", correct: true},
            {text: "President of India", correct: false},
            {text: "None is Correct", correct: false},
        ]
    },

    {
        question: " The Banking Regulation Act, 1949, empowers the National Bank For Agriculture And Rural Development(NABARD) to conduct inspection of?",
        answers: [
            {text: "State Cooperative Banks (SCBs)", correct: false},
            {text: "Central Cooperative Banks (CCBs)", correct: false},
            {text: "Regional Rural Banks (RRBs)", correct: false},
            {text: "All of the Above", correct: true},
        ]
    },

    {
        question: " PFRDA is related to which of the following?",
        answers: [
            {text: "National Pension Scheme(NPS)", correct: true},
            {text: "EPFO", correct: false},
            {text: "Insurance", correct: false},
            {text: "Mutual Funds", correct: false},
        ]
    },

    {
        question: " Under the provisions of which act was the Securities And Exchange Board Of India(SEBI) established?",
        answers: [
            {text: "Securities and Exchange Board of India Act, 1988", correct: false},
            {text: "Securities and Exchange Board of India Act, 1992(c) Securities and Exchange Board of India Act, 1996", correct: true},
            {text: "Securities and Exchange Board of India Act, 2000", correct: false},
            {text: "Securities and Exchange Board of India Act, 2001", correct: false},
        ]
    },

    {
        question: " 'Once a bearer is always a bearer ' means that :",
        answers: [
            {text: "where a cheque is originally expressed to be the bearer to the bearer, the banker is discharged by payment in due course to the bearer.", correct: false},
            {text: "banker can pay the cheque to the bearer irrespective of any endorsement whether in full or in blank appearing thereon,notwithstanding  that any such endorsement purports  to restrict  or exclude further negotiation", correct: false},
            {text: "both A and  B", correct: true},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: " Banking Ombudsman entertains complaints involving?",
        answers: [
            {text: "delay in collection of cheques", correct: false},
            {text: "deficiency in cash transactions", correct: false},
            {text: "non-issue of demand drafts", correct: false},
            {text: "all of the above", correct: true},
        ]
    },

    {
        question: " Banks stipulate interest rate on loss and advances based on?",
        answers: [
            {text: "Borrower's experience", correct: false},
            {text: "track record", correct: false},
            {text: "credit rating", correct: true},
            {text: "None of these", correct: false},
        ]
    },

    {
        question: " Expand 'VIRUS' in computer parlance?",
        answers: [
            {text: "Variable Integrated Risks Under Surveillance", correct: false},
            {text: "vital Information Resource Under Siege", correct: true},
            {text: "Very Independent Resource Under Seizure", correct: false},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: " Expand ' SHIPI ':",
        answers: [
            {text: "EquState Bank Heritage  Private Instituteity", correct: false},
            {text: "SBI Handicapped Standards Board", correct: false},
            {text: "Self Help Promotion Institution", correct: true},
            {text: "None of the above", correct: false},
        ]
    },

    {
        question: " The full form of RBS is?",
        answers: [
            {text: "Risk Based Supervision", correct: true},
            {text: "Rating By System", correct: false},
            {text: "Role Based supervision", correct: false},
            {text: "Rating Bank security", correct: false},
        ]
    },

    {
        question: " Under hire -purchase system, the buyer becomes the owner of goods?",
        answers: [
            {text: "immediately after the delivery of goods", correct: false},
            {text: "immediately after the down Payment", correct: false},
            {text: "immediately after the signing  of the of the agreement", correct: false},
            {text: "immediately after the payment of the last instalment", correct: true},
        ]
    },

    {
        question: " National Income of India's estimated by?",
        answers: [
            {text: "central Estimates Survay Committee", correct: false},
            {text: "National sample Survey Committee", correct: false},
            {text: "Central Statistical Organisation", correct: true},
            {text: "Finance Ministry", correct: false},
        ]
    },

    {
        question: " The definition of 'Customer' is available  under?",
        answers: [
            {text: "Negotiable Instruments Act, 1881", correct: false},
            {text: "Consumer Protection  Act, 1986", correct: false},
            {text: "Banking Regulation Act, 1949", correct: false},
            {text: "KYC Guidelines", correct: true},
        ]
    },

    {
        question: " Which among the following is correct about the 'Parties to Cheque'?",
        answers: [
            {text: "Drawer - The person who signs the cheque and order for payment", correct: false},
            {text: "Drawee - It is always bank on which cheque is drawn and is ordered to pay the amount of cheque", correct: false},
            {text: "All of The Above", correct: true},
            {text: "None of The Above", correct: false},
        ]
    },

    {
        question: " Which Cheque is an uncrossed cheque which is payable at counter of the bank?",
        answers: [
            {text: "Bearer Cheque", correct: false},
            {text: "Open Cheque", correct: true},
            {text: "Cross Cheque ", correct: false},
            {text: "All of The Above", correct: false},
        ]
    },

    {
        question: " Which among the following characteristics is wrong about the 'Crossed Cheque'?",
        answers: [
            {text: "It can only be credited to the account of the payee", correct: false},
            {text: "It can't be encashed at the counter of the bank", correct: false},
            {text: "It is the cheque on which two parallel transverse lines are drawn across the top left, with or without the word - & Co, Not Negotiable, A/c Payee", correct: false},
            {text: "None of The Above ", correct: true},
        ]
    },

    {
        question: " A person who receives a document for value, before it was due and in good faith, without notice of any defect in it, he is called?",
        answers: [
            {text: "Holder in Due Course", correct: true},
            {text: "Guarantor ", correct: false},
            {text: "Nominee Party", correct: false},
            {text: "Subrogating Party", correct: false},
        ]
    },

    {
        question: " Which of the following is a primary function of a bank?",
        answers: [
            {text: "Buying, selling and keeping in safe custody, the securities on behalf of their advice", correct: false},
            {text: "Collection and payment of cheques, rent, interest, etc, on behalf of their customers", correct: true},
            {text: "Acting as trustees and executors of the property of their customers on their advice", correct: false},
            {text: "Remitting money from one place to the other through bank drafts or mail or telegraphic transfer", correct: false},
        ]
    },

    {
        question: " What do you understand by the term ‘Mortgage’?",
        answers: [
            {text: "Sale of moveable security in the event of default by the borrower", correct: false},
            {text: "Registration of charge with the Registrar of Companies", correct: false},
            {text: "Making the security of immovable property available as a cover for a home loan by the borrower", correct: true},
            {text: "Registration of charge with the Regional Transport Authority", correct: false},
        ]
    },

    {
        question: " In which year India adopted partial convertibility of rupee?",
        answers: [
            {text: "1991", correct: false},
            {text: "1993", correct: false},
            {text: "1994", correct: false},
            {text: "1992", correct: true},
        ]
    },

    {
        question: " What is financial inclusion?",
        answers: [
            {text: "To provide banking services to all those living in remote areas", correct: true},
            {text: "To provide a permanent employment to the unemloyed", correct: false},
            {text: "To provide a 100 days job to all those who are in need of a job", correct: false},
            {text: "To ensure that all financial transactions amounting Rs. 5,000/- and above are done through banks", correct: false},
        ]
    },

    {
        question: " NABARD is a?",
        answers: [
            {text: "Board", correct: false},
            {text: "Bureau", correct: false},
            {text: "Bank", correct: true},
            {text: "Department", correct: false},
        ]
    },

    {
        question: " Which of the following is not the part of the Scheduled Banking structure in India?",
        answers: [
            {text: "Money Lenders", correct: true},
            {text: "Public Sector Banks", correct: false},
            {text: "Private Sector Banks", correct: false},
            {text: "Regional rural banks", correct: false},
        ]
    },

    {
        question: " The first Bank established in India was?",
        answers: [
            {text: "Bank of India", correct: false},
            {text: "Bank of Hindustan", correct: true},
            {text: "General Bank of India", correct: false},
            {text: "State Bank of India", correct: false},
        ]
    },

    {
        question: " What is the full form of “NDTL” the term we see very frequently in newspapers?",
        answers: [
            {text: "Net Demand and Term Liability", correct: false},
            {text: "New Demand and Term Liability", correct: false},
            {text: "Net Demand and Term Liquidity", correct: false},
            {text: "Net Demand and Time Liability", correct: true},
        ]
    },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz()