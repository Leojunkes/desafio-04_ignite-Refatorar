import { FiEdit3, FiTrash } from 'react-icons/fi';
import { FoodAdd } from '../../pages/Dashboard/index';
import { Container } from './styles';
import api from '../../services/api';
import { useState } from 'react';

interface FoodsProps {
  food: FoodAdd;
  handleEditFood: (food: FoodAdd) => void;
  handleDelete: (id: number) => void;
}

export default function Food({
  food,
  handleEditFood,
  handleDelete,
}: FoodsProps) {
  const [isavailable, setIsAvailable] = useState(food.available);

  async function toggleAvailable() {
    await api.put(`/foods/${food.id}`, {
      ...food,
      available:!isavailable
    })
    setIsAvailable(!isavailable);
  }

  function setEditingFood() {
    handleEditFood(food);
  }

  return (
    <Container >
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            data-testid={`edit-food-${food.id}`}
            onClick={setEditingFood}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isavailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isavailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
}
