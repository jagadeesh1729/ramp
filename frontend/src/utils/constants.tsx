export const RAMP_CATEGORTY_LABEL="Ramp category"
export const RAMP_CATEGORTY_PLACEHOLDER="Enter Ramp category"
export const ICON_NOT_FOUND="not found icon"
export const RAMP_CATEGORTY_HEADER="Ramp categories"
export const RAMP_CATEGORTY_TITLE="Create Ramp category "
export const RAMP_CATEGORTY_DESCRIPTION="Ramp automatically categorizes your card transactions. You can set a default QuickBooks Category for each Ramp Category below."
export const RAMP_CATEGORTY_BUTTON="Add new"
export const HEADER_TEXT="Setup guide"
export const NAME="Lynk";
export const QUICKBOOKS="QuickBooks";
import Eye from "../../public/images/settings.svg"
import Logout from "../../public/images/logout.svg"
import searchSvg from "../../public/images/find.svg";
import Calendar from "../../public/images/calendar.svg";
export const AVATAR_POP_OVER_DATA_WITHOUT_ICONS=  [
    {
      text: "My Ramp",
      icon: "-1",
      isHeading: true,
    },
    {
      text: "Create Ramp category",
      icon: "-1",
    },
    {
      text: "View Ramp category",
      icon: "-1",
    },
    {
      text: "Delete Ramp category",
      icon: "-1",
    },
  ];
  export const AVATAR_POP_OVER_DATA_WITH_ICONS=[
    {
        text: "Settings",
        icon: Eye,
          route:"/",
      },
      {
        text: "Logout",
        icon: Logout,
        route:"/logout"
      },
  ]
  export const NAVBAR_DATA=[
    {name:"Insights",routes:"/insights"},{name:"Transaction",routes:""},{name:"Cards",routes:""},{name:"Company",routes:""},{name:"Bill Pay",routes:""},{name:"Vendors",routes:""},{name:"Reimbursement",routes:"/reimbursement",menu:[{name:"Draft"},{name:"Payments",route:"/payments"}]},{name:"Accounting",routes:"/accounting"},{name:"Ramp Perks",routes:""}
  ]
  export const SIGNIN_HEADING="Sign in to your account";
  export const SIGINUP_HEADING="Sign up with Google"
  export const EMAIL_LABEL="Email"
  export const PASSWORD_LABEL="Password"
  export const FORGOT_PASSWORD="Forgot your password ?"
  export const STAY_SIGNED="Stay signed in for a week"
  export const CONTINUE="Continue"
  export const OR_TEXT="OR"
  export const SIGN_WITH_GOOGLE="Sign in with Google"
  export const NO_ACCOUNT_LABEL="Don’t have an account?"
  export const SIGNUP="Sign up"
export const SIGNIN = "Sign In";
export const SIGNINBUTTON="Sign in"
export const NAME_LABEL = "Full name";
export const ALREADY_HAVE_ACCOUNT = "Already have an account";

export const MENU = ['Trave', 'Advertising', 'Travel meals', 'Hotels'];
export const MERCHANT_HEADER = "Create merchant rule"; 
export const CATEGORTY_RULE_HEADER="Create category rule";
export const MENU_ITEMS = ['Expense', 'Travel', 'Travel meals', 'Hotels'];
export const CATEGORY_MODAL={
  heading:"Create Ramp category",
  button1:"Cancel",
  button2:"Create rule"
}
export const RAMP_CONTENT =
  "Ramp automatically categorizes your card transactions. You can set a default QuickBooks Category for each Ramp Category below.";
export const CATEGORY_RULES = "Category Rules";
export const ACTIVE_RULES = "Active Rules";
export const RECENT_CATEGORY = "Recent categories";
export const NO_OF_CATEGORIES = "What are category rules?";
export const CATEGORY_DESCRIPTION =
  "Category rules allow you to set a dafault QuickBooks Category for all transactions from a specific Ramp Category.";
export const ALL_CATEGORIES = "See all categories ";
export const TRANSACTIONS = "TRANSACTIONS";
export const SEARCH_TIPS = "Search tips";
export const SHOW_RESULTS = "Show all results for";
export const AUTOMOBILE = "Automobile Fuel";
export const DUES = "Dues & Subscription";
export const QUICKBOOKS_CATEGEORY = "Quickbooks category";
export const QUICKBOOKS_CATEGEORY_LABEL = "Quickbooks category";
export const INVOICE_TEXT = "Invoice Text";
export const RAMP_DATA = [
  {
    rampCategory: "Airlines",
    quickbooksCategory: "Travel",
  },
  {
    rampCategory: "Fuel and Gas",
    quickbooksCategory: "Automobile",
  },
  {
    rampCategory: "Saas / Software",
    quickbooksCategory: "Dues",
  },
];
export const SPECIAL_RULE={
  ramp:"Advertising",
  quickbooks: "Quickbooks category",
}
export const RULES_DATA = [
  {
    rampCategory: "Shipping",
    quickbooksCategory: "Quickbooks category",
  },
  {
    rampCategory: "Other",
    quickbooksCategory: "Quickbooks category",
  },
];

export const NEW_BILL = {
  heading:"New bill",
  question1:"Who's it for ?",
  question2:"What for ?",
  name:"Julie Mendez",
  buttonText:"Billable",
  status:"No previous payment to this vendor.",
  cardText:"Ramp has retrieved data from this invoice and prefilled this bill",
  button:{
    text1:"Save changes",
    text2:"Review"
  },
  defaultData:{
    label1:"Employee contact",
    value1:["Vendor contact","ygodiwala@ramp.com"],
    label2:"Invoice number",
    value2:["Invoice number","2353464575"],
    label3:"Invoice date",
    value3:["Date","09/12/23"],
    label4:"Bill due date",
    value4:["Date","05/12/23"],
    label5:"Quickbooks location",
    value5:["Location","London"],
    label6:"Memo",
    value6:["","London"],
    label7:"Amount",
    value7:["","$800.00"],
    label8:"Quickbook Description",
    value8:["","London"],
    label9:"Category",
    value9:["","Equipment rental"],
    label10:"Class",
    value10:["","Rent"],
    label11:"Custom/job",
    value11:["","Manager"],
    text:"Invoice total",
    cost:"$1286.00",
    label12:"ACH send date",
    value12:["","09/12/23"],
    label13:"Vender receive date",
    value13:["","09/12/23"],
    label14:"Pay from account",
    value14:["","Manual Account (1873)"],
    label15:"Send payment to",
    value15:["","Gold Mining Outfitters (8532)"],
  },
  footer:{
    button1:"Add another line",
    text:"Payment details",
    label:"Payment type",
    placeholder:"Select",
    time:"ACH delivery time",
    days:"5 working days",
    approvel:"To be approved by",
    approved:"Auto approved",
  },
  select:[
    {
      title:"ACH (Direct deposit)",
      description:"Ramp will mail a check to your vendor’s mailing address. You will be debited once the check is cashed"
    },
    {
      title:"Check by mail",
      description:"Ramp will mail a check to your vendor’s mailing address. You will be debited once the check is cashed"
    },
    {
      title:"One-time virtual card",
      description:"Create a ramp virtual card for this bill. The card will expire once used. 1.5% cashback."
    }
  ]
}
export const REPORTING_BODY = {
  partner: {
    title: "Partner reward found",
    description:
      "You're paying for Amazon Web Services - leverage our partnership",
    button: "Go to partner reward",
    imageText: "Potential Savings",
    savings: "$5,000.00",
  },
  card: {
    title: "Lower pricing plan found",
    description:
      "Lower your annual cost for Asana by switching to an annual plan.",
    button: "Go to partner reward",
    imageText: "Potential Savings",
    savings1: "$250.00",
    savings2: "$430.00",
    savings3: "$2500.00",
  },
  content: {
    placeholder: "Search & filter",
    label1: "Payment types",
    label2: "Daily",
    text: "May28-Jun3",
  },
  heading: "Reporting",
};

export const NOT_FOUND = {
  image: "image not found",
  icon: "icon not found",
};
export const LAST_LOOK = "One last look";
export const PAY = "Pay";
export const TO = "to";
export const PAYMENT_METHOD = "Payment method";
export const APPROVED_BY = "To be approved by";
export const AUTO_APPROVED = "Auto approved";
export const  EMAIL_PLACEHOLDER="john.doe@gmail.com"
export const NAME_PLACEHOLDER="John doe"
export const PASSWORD_PLACEHOLDER="orders@supertodo.me"
export const RAMP_HEADING="Ramp"
export const RAMPCARDS_HEADING="Ramp Cards";
export const SEARCH_PLACEHOLDER="Search cards";
export const SYNC_BUTTON="Sync";
export const BUTTON_DELETE="Delete";
export const BUTTON_1_TEXT="Cancel";
export const BUTTON_2_TEXT="Create rule";

export const MODAL = {
  cancel:"Cancel",
  create:"Create rule"
}
export const DRAFTS_TITLE="Drafts";
export const PAYMENTS_TITLE="Payments";
export const SEARCH_STYLES = [
  {
    placeholder:"Search cards",
    sx:{width: "456px", height: "40px",},
    src:searchSvg
  },
  {
    placeholder:"All cards",
    sx:{width: "122px", height: "28px",},
    src:Calendar
  },
]
export const CLICK="Click "
export const HERE="here"
export const LOGIN_AGAIN=" to login again"
export const SUCCESSFUL_LOGIN="You have been successfully logged out"
export const BILL="New Bill"
export const CREATE_BILL={
  amount:2864.50,
  name:"Julie Mendez",
  paymentMethod:"ACH (Direct deposit)",
  scheduledDate:"24 August 2023",
  estimatedArrival:"August 31 2022",
  sendTo:"Gold Mining Outfitters (8532)",
  addedBy:"James Smith",
  withdrawFrom:"Manual Account (1873)",
  savingAccount:"477,776,213.090",
}
export const GET_STARTED="Get started";
export const INVOICE_MSG="Drop your invoice or click here to upload";
export const SAVE_TIME="Save time with uploading invoice"
export const UPLOAD_INVOICE="Upload an invoice on the right and Ramp will read the invoice and prefill the bill for you. Or alternatively, do it the old fashioned way :"
export const SKIP="Skip Prefilling";
export const EDIT="Edit"
export const CREATE="Create bill";
export const PASSWORD = 'john@1997';

