'use client'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

export const ModalButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with');
    console.log({
      name, pet, phone, address
    });
  }

  return (
    <>
      <Button onPress={onOpen}>Añadir cliente</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <form className='px-2' onSubmit={handleSubmit}>
                <ModalBody>
                  <label htmlFor="nombre">Nombre y Apellido
                    <input id='nombre' type="text" placeholder='Nombre de cliente' className='block border rounded p-1' onChange={(event) => setName(event.target.value)} />
                  </label>
                  <label htmlFor="mascota">Mascota
                    <input id="mascota" type="text" placeholder='Mascota' className='block border rounded p-1' onChange={(event) => setPet(event.target.value)} />
                  </label>
                  <label htmlFor="celular">Nro de celular
                    <input id="celular" type="text" placeholder='Celular' className='block border rounded p-1' onChange={(event) => setPhone(event.target.value)} />
                  </label>
                  <label htmlFor="direccion">Dirección
                    <input id="direccion" type="text" placeholder='Dirección' className='block border rounded p-1' onChange={(event) => setAddress(event.target.value)} />
                  </label>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Añadir
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
