import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock the useFoodData hook to return mock data
vi.mock('../hooks/useFoodData', () => ({
  useFoodData: () => ({
    data: [
      {
        id: 5,
        title: "Panetoni Casseiro",
        price: 13.25,
        image: "https://moinhoglobo.com.br/wp-content/uploads/2019/07/14-panetone-caseiro-300x200.jpg"
      },
      {
        id: 3,
        title: "Pão frances",
        price: 3.49,
        image: "https://moinhoglobo.com.br/wp-content/uploads/2019/10/p%c3%a3o-315x315.jpg"
      },
      {
        id: 4,
        title: "Capeletti",
        price: 10.99,
        image: "https://moinhoglobo.com.br/wp-content/uploads/2019/10/capeletti-300x200.jpg"
      },
      {
        id: 6,
        title: "Hamburguer",
        price: 39.9,
        image: "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer-300x200.jpeg"
      },
      {
        id: 9,
        title: "Coxinha",
        price: 3.5,
        image: "https://moinhoglobo.com.br/wp-content/uploads/2018/02/coxinha-tradicional-300x175.png"
      }
    ]
  })
}));

// Mock CreateModal to avoid rendering its internals
vi.mock('../create-modal/CreateModal', () => ({
  CreateModal: ({ closeModal }: { closeModal: () => void }) => (
    <div data-testid="modal">
      <button onClick={closeModal}>Fechar Modal</button>
    </div>
  )
}));

// const renderWithClient = (ui) => {
//   const queryClient = new QueryClient();
//   return render(
//     <QueryClientProvider client={queryClient}>
//       {ui}
//     </QueryClientProvider>
//   );
// };


describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the page and shows the cardápio title', () => {
    render(<App />);
    expect(screen.getByText(/Cardápio do Restaurante/i)).toBeInTheDocument();
  });

  it('renders all food cards', () => {
    render(<App />);
    expect(screen.getByText(/Panetoni Casseiro/i)).toBeInTheDocument();
    expect(screen.getByText(/Pão frances/i)).toBeInTheDocument();
    expect(screen.getByText(/Capeletti/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburguer/i)).toBeInTheDocument();
    expect(screen.getByText(/Coxinha/i)).toBeInTheDocument();
  });

  it('renders the "Criar Novo Item" button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /Criar Novo Item/i })).toBeInTheDocument();
  });

  it('opens and closes the modal when clicking the button', () => {
    render(<App />);
    const openButton = screen.getByRole('button', { name: /Criar Novo Item/i });
    fireEvent.click(openButton);
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeButton = screen.getByText(/Fechar Modal/i);
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });
});

describe('App Component', () => {
  it('renders the page and shows the cardápio title', () => {
    render(<App />);
    expect(screen.getByText(/Cardápio/i)).toBeInTheDocument();
  });
});
