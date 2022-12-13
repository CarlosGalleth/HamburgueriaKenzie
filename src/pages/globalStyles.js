import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
 
:root {
  --color-brand-1: #27ae60;
  --color-brand-2: #EB5757;
  --color-grey-1: #333333;
  --color-grey-2:#828282;
  --color-grey-3: #E0E0E0;
  --color-grey-4: #F5F5F5;
  --fixed-white: white;
  --success: #168821;
  --failed: #E60000;
  --warning: #FFCD07;
  --information: #155BCB;

  --gap-1: 64px;
  --gap-2: 56px;
  --gap-3: 48px;
  --gap-4: 40px;
  --gap-5: 32px;
  --gap-6: 24px;
  --gap-7: 16px;
  --gap-8: 12px;
  --gap-9: 08px;
  --gap-10: 4px;

  --radius-1: 8px;
  --radius-2: 6px;
  --radius-3: 4px;
  --radius-4: 2px;
}

body {
  font-family: "Inter";
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
  font-family: "Inter";
}
input, select {
  font-family: "Inter";
  padding-left: 15px;
}
label {
  width: max-content;
}
`;
