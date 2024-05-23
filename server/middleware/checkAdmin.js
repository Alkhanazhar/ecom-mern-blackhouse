import { User } from "../models/userSchema.js";

export const checkAdmin = async (userid) => {
    const user = await User.findById(userid);
    if (user.role !== "admin" || user.role !== "Admin") {
        return false;
    }
  
}