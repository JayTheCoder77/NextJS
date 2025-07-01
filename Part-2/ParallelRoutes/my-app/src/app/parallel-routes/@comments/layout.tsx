import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  // cant use error.tsx as we are using components and not pages

  // if(2 < 5){
  //     throw new Error('error')
  // }
  return (
    <div>
      <h1>{children}</h1>
      <div className="flex"></div>
    </div>
  );
};
export default Layout;
