import Program from '../models/program_model.js'


const getAll = async(req, res)=>{
    const all_program = await Program.find();

    res.status(200).json({
        message:"getting all programs",
        status:200,
        data: all_program,
    });
}


export default {getAll,


        }