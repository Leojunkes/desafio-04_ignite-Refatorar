import { Component, createRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';

import Input from '../Input/index';

interface propsModalFood {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
  
}

export default function ModalAddFood(props: propsModalFood) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit({ setIsOpen, handleAddFood }) {
    handleAddFood(props);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={this.formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
