import { useState, useEffect } from 'react';
import Card from './Card';
import styles from './Services.module.css';

interface CardListProps {
  limit?: number;
}

const CardList: React.FC<CardListProps> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [limit]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.cardList}>
      {cards.map(card => (
        <Card
          key={card.id}
          title={card.title}
          body={card.body}
          imageUrl="https://via.placeholder.com/150" 
        />
      ))}
    </div>
  );
};

export default CardList;