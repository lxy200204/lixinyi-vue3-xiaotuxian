import request from "@/utils/http";

// 获取支付信息
export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`,
  });
};
