import React from 'react'
import Form from "../../components/Form/Form"
import Nav from '../../components/Nav/Nav'
import style from './createActivity.module.css'
export const CreateActivity = () => {
  return (
    <>
      <div className={style.FormBox}>
        <Nav/>
        <h1 className={style.title} >Crea una actividad</h1>
        <Form/>
      </div>
    </>
  )
}

export default CreateActivity;