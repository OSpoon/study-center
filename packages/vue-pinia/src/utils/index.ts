import Mock from "mockjs";

// 生成商品名称
export const generateProductName = () => {
  const adjectives = ["精美的", "时尚的", "高品质的", "独特的", "豪华的"];
  const nouns = ["手表", "包包", "鞋子", "衬衫", "项链"];
  const adjective = Mock.Random.pick(adjectives);
  const noun = Mock.Random.pick(nouns);
  return `${adjective}${noun}`;
};

// 生成金额
export const generatePrice = () => {
  return Mock.Random.float(10, 10000, 2, 2); // 生成10到10000之间的金额，保留2位小数
};
