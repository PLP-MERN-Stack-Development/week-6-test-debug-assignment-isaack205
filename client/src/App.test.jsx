import { render, screen } from '@testing-library/react';
Object.defineProperty(import.meta, 'env', {
	value: { VITE_SERVER_URL: 'http://localhost:3000' },
	writable: true,
});
import App from './App';


test('renders main application component', () => {
	render(<App />);
	const linkElement = screen.getByText(/your main app text/i);
	expect(linkElement).toBeInTheDocument();
});