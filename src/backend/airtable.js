import Airtable from "airtable";
const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

function createRecord(email) {
  return base("signups").create({
    email: email,
  });
}

export { createRecord };
