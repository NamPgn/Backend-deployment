import trailerHomePageModel from "../module/trailerHomePageModel";

export const getTrailerHomePageUrlSevices = async () => {
  return await trailerHomePageModel.find();
}

export const editTrailerHomePageUrlSevices = async (id, data) => {
  return await trailerHomePageModel.findOneAndUpdate({ '_id': id }, data);
}