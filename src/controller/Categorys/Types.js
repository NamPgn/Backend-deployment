import Types from "../../module/categorys/types";


export const GetAllTypeCategorys = async (req, res) => {
  try {
    const data = await Types.find().sort({ 'path': 1 }).populate('categorymain.cates');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const GetOneTypeCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Types.findById(id).populate('categorymain.cates');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}


export const CreateType = async (req, res) => {
  try {
    const body = req.body;
    const data = await new Types(body).save();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const DeleteType = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Types.findByIdAndDelete(id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const UpdatedType = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await Types.findByIdAndUpdate(id, body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    })
  }
}