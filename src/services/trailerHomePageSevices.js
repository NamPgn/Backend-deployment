import trailerHomePageModel from "../module/trailerHomePageModel";

export const getTrailerHomePageUrlSevices = async () => {
  return await trailerHomePageModel.find();
}

export const editTrailerHomePageUrlSevices = async (id, data) => {
  return await trailerHomePageModel.findByIdAndUpdate(id, data);
}

export const getTrailerUrlSevices = async (id) => await trailerHomePageModel.findOne({ '_id': id });