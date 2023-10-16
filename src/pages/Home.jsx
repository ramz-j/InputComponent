import React from 'react'
import '../styles/Home.css'
import Input from '../components/Input'

export default function Home() {
  return (
    <div className='container'>
      <h1>Inputs</h1>
      <div className='line'>
        <Input />
      </div>
      <div className='line'>
        <Input error />
      </div>
      <div className='line'>
        <Input disabled />
      </div>   
      <div className='line'>
        <Input helperText='Some interesting here' />
        <Input helperText='Some interesting here' error />
      </div>
      <div className='line'>
        <Input icon='home' startIcon='material-symbols-outlined' />
        <Input icon='shopping_cart' startIcon='material-symbols-outlined' />
        <Input icon='search' startIcon='material-symbols-outlined' />
      </div>
      <div className='line'>
        <Input icon='directory_sync' endIcon='material-symbols-outlined' />
        <Input icon='group' endIcon='material-symbols-outlined' />
        <Input icon='location_on' endIcon='material-symbols-outlined' />
      </div>
      <div className='line'>
        <Input value='text' />
      </div>
      <div className='line'>
        <Input size='sm' />
        <Input size='md' />
        <Input size='lg' />
      </div>
      <div className='line'>
        <Input fullWidth />
      </div>
      <div className='line'>
        <Input multiline row='4' />
      </div>
      <div className='footer'>
        <p>Created by <u><strong>ramz-j</strong></u> - devChallenges.io</p>
      </div>
    </div>
  )
}
