'use client'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

export const ModalButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [name, setName] = useState('');
  const [pet, setPet] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, onClose: () => void) => {
    event.preventDefault();
    console.log('Form submitted with');
    console.log({
      name, pet, phone, address
    });
    onClose()
  }

  return (
    <>
      <Button onPress={onOpen} className='bg-success text-background font-bold'>Añadir cliente</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Completa el formulario</ModalHeader>
              <form className='px-2' onSubmit={(event) => handleSubmit(event, onClose)}>
                <ModalBody>
                  <label htmlFor="nombre">Nombre y Apellido
                    <input required id='nombre' type="text" placeholder='Nombre de cliente' className='block border rounded p-1' onChange={(event) => setName(event.target.value)} />
                  </label>
                  <label htmlFor="mascota">Mascota
                    <input required id="mascota" type="text" placeholder='Mascota' className='block border rounded p-1' onChange={(event) => setPet(event.target.value)} />
                  </label>
                  <label htmlFor="celular">Nro de celular
                    <input required id="celular" type="text" placeholder='Celular' className='block border rounded p-1' onChange={(event) => setPhone(event.target.value)} />
                  </label>
                  <label htmlFor="direccion">Dirección
                    <input required id="direccion" type="text" placeholder='Dirección' className='block border rounded p-1' onChange={(event) => setAddress(event.target.value)} />
                  </label>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button className='bg-success text-background font-bold' type="submit">
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
