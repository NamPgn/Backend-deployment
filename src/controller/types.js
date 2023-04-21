import Types from "../module/types";


export const GetAllTypeCategorys = async (req, res) => {
  try {
    const data = await Types.find().sort({ 'path': 1 }).populate('categorymain.cates').populate('products');
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
    const data = await Types.findById(id).populate('categorymain.cates').populate('products');
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
    const body = req.body;
    const s = await Types.findByIdAndUpdate(body.TypeId, { //tìm thằng categorymain
      $pull: { categorymain: { cates: { $in: [id] } } },
    });
    const d = await Products.findByIdAndDelete(id);
    return res.json({
      success: true,
      dataProduct: d,
      dataCateMain: s
    });
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