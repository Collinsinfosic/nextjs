import {inter} from './ui/fonts';
import {lusitana} from './ui/fonts'
import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased标识模型抗锯齿 */}
      <body >{children}</body>
    </html>
  );
}
