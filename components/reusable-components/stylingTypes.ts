export type sizes = 'xs' | 's' | 'm' | 'l' | 'xl';
export type actionType = 'default' | 'confirm' | 'cancel';

export const widthValue:Record<sizes,String> = {
  xs: "20%",
  s: "30%",
  m: "40%",
  l: "60%",
  xl: "70%",
};

export const widthValueNoMargin:Record<sizes,String> = {
  xs: "18%",
  s: "28%",
  m: "38%",
  l: "58%",
  xl: "68%",
};


export const fontSizeValue:Record<sizes,Number> = {
  xs: 5,
  s: 20,
  m: 25,
  l: 30,
  xl: 35,
}