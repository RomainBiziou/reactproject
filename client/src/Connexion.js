import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Pseudo" {...register("Pseudo", {required: true, maxLength: 80})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true, maxLength: 100})} />
      
      <input type="submit" onClick={event => (window.location.href = "/Theme")} />
    </form>
  );
  /** Bouton pour aller à theme */
}