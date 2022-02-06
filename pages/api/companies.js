import companyDetails from "../../src/assets/companiesDetails";

export default function handler(req, res) {
  res.status(200).json(companyDetails)
}
