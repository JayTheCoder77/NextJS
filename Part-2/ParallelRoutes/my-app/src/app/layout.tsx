import './globals.css';
import { ReactNode } from 'react';

type CP = {
  children : ReactNode;
  comments : ReactNode;
  members : ReactNode;
};

const RootLayout = ({ children , comments , members }: CP) => {
  return(
    <html>
      <body>
        <h1>{children}</h1>
        <div className="flex">
          {members}
          {comments}
        </div>
      </body>
    </html>
  )
}
export default RootLayout