export default function multiply<T>(data: T, qty: number = 10): T[] {
  let datas: T[] = [];
  for (let i = 0; i < qty; i++) {
    datas.push(data);
  }
  return datas;
}
