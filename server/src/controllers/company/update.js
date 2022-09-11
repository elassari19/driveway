import company from '../../models/company'
import db from '../../services'

export default () => async (req, res) => {

  try {

    // update data
    const companies = await db.findOneAndUpdate('Company', company, {_id: req.query.id}, req.body)

    res.status(200).send(companies)
  } catch (error) {
    res.status(200).send(error)
  }
}