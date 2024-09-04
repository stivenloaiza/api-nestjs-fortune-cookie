export function calc(num1: number, num2: number) {
  return num1 + num2;
}

export function generateName(fail: boolean) {
  if (fail) {
    throw new Error('Failed');
  } else {
    return new Date().toString();
  }
}

export const fetchData = async () => {
  try {
    const response = await fetch('https://api.exchange.com/usdtocop');
    const data = await response.json();
    return data;
  } catch (e) {
    return `Error ${e}`;
  }
};

export const getUserData = async () => {
  const data = await fetchData();
  return data.user;
};
