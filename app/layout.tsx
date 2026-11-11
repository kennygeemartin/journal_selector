import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Journal Compass — Journal finder and comparison',description:'Find an evidence-led home for your manuscript. Compare journal scope, publishing routes and verified fees.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
