import companyDetails from "../../src/assets/companiesDetails";

export default function handler(req, res) {
    const { id } = req.query
    const companyDetail = companyDetails.filter((company) => {
        return company.id === parseInt(id)
    })
    res.status(200).json(companyDetail)
}