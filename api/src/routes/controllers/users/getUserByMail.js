// Controller para buscar un usuario por correo (como si fuera por id pero por email)
const { User } = require('../../../db');


const getUserByMail = async(req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({where: { email }});
        res.status(200).json(user)
    } catch(error) {
        res.status(400).json({ error: "Ha ocurrido un error en el controller getUserByMail " + error })
    }
}



module.exports = { getUserByMail }