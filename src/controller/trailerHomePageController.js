import { editTrailerHomePageUrlSevices, getTrailerHomePageUrlSevices, getTrailerUrlSevices } from "../services/trailerHomePageSevices";

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
    const  id  = req.params.id;
    console.log("url", url)
    const data = await editTrailerHomePageUrlSevices(id, url);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}

export const getTrailerController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getTrailerUrlSevices(id);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}