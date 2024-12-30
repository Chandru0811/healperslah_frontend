import toast from "react-hot-toast";
import api from "../../config/URL";

const fetchAllServiceGroupWithIds = async () => {
  try {
    const response = await api.get("admin/service");
    return response.data.data;
  } catch (error) {
    toast.error("Error fetching center data:", error);
    throw error;
  }
};

export default fetchAllServiceGroupWithIds;