import './globals.css';
import { Navbar } from '@/components';

export const metadata = {
    title: 'Car Lover',
    description: 'Discover the best cars in the world.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
            </body>
        </html>
    )
}
