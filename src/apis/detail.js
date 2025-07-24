import httpInstance from "@/utils/http";
import request from "@/utils/http";

export const getDetail = (id) => {
  return request({
    url: "/goods",
    params: {
      id,
    },
  });
};
