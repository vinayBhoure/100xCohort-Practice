const zod = require('zod');
const asyncError = require('./asyncError');

const validateUser = asyncError(async (req, res, next) => {
    
    const schema = zod.object({
        name: zod.string().min(3),
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const {data, error} = schema.safeParse(req.body);
    if (error) {
        return res.status(400).json({
            success: "false",
            message: error.issues[0].message
        });
    }
    next();
});

module.exports = { validateUser };