import { editTrailerHomePageUrlSevices, getTrailerHomePageUrlSevices } from "../services/trailerHomePageSevices";

export const getUrlTrailerControllers = async (req, res) => {
  try {
    const data = await getTrailerHomePageUrlSevices();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}


export const editTrailerHomePageUrlController = async (req, res) => {
  try {
    const url = req.body;
    const { _id } = req.params;
    const data = await editTrailerHomePageUrlSevices(_id, url);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}