import { dataDegree } from "../../store/database-reducer/dataDegree";
import { dataGender } from "../../store/database-reducer/dataGender";

export const getImagePath = (path = "/logo192.png") => `assets/image/${path}`;

export const idToDegree = (id) => {
  return dataDegree[id]?.degree || "";
};
export const genderToGender = (id) => {
    return dataGender.find(g => g.id === id).gender
}
