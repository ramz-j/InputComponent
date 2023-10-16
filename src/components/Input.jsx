import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Input.css'

const Input = ({ basic, 
                  error,
                  disabled,
                  helperText,
                  icon,
                  startIcon,
                  endIcon,
                  value,
                  size,
                  fullWidth, 
                  multiline,
                  row
                }) => {

  if (multiline) {
    return (
      <div className='cont-basic'>
        <p>&lt;Input multiline row="{`${row}`}" /&gt;</p>
        <label htmlFor='basic'>Label</label> 

        <textarea 
          rows={row}
          placeholder='Placeholder'
          readOnly
        />
    
      </div>
    )
  }


  if (fullWidth) {
    return (
      <div className='cont-basic'>
        <p>&lt;Input fullWidth /&gt;</p>
        <label htmlFor='basic'>Label</label>          
        <input
          className='intpt basic fullWidth'
          id='basic'
          type='text'
          placeholder='Placeholder'
        />      
      </div>
    )
  }

  if (value) {

    const newValue = () => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return (
      <div className='cont-basic'>
        <p>&lt;Input value={`${value}`} /&gt;</p>


        <label htmlFor='basic'>Label</label>
        
        <input
          className='intpt basic'
          id='basic'
          type='text'
          placeholder='Placeholder'
          value={newValue()}
        />
                
      </div>
    )
  }
  
  if (endIcon) {
    return (
      <div className='cont-basic'>
        <p>&lt;Input endIcon /&gt;</p>
        <label htmlFor='basic'>Label</label>
        <div className='cont-endIcon'>
          <input
            className='intpt basic npt-endIcon'
            id='basic'
            type='text'
            placeholder='Placeholder'
          />      
          <span className={`${endIcon}`}>{`${icon}`}</span>    
        </div>
      </div>
    )
  }
  
  if (startIcon) {
    return (
      <div className='cont-basic'>
        <p>&lt;Input startIcon /&gt;</p>
        <label htmlFor='basic'>Label</label>
        <div className='cont-startIcon'>
          <span className={`${startIcon}`}>{`${icon}`}</span>
          <input
            className='intpt basic npt-startIcon'
            id='basic'
            type='text'
            placeholder='Placeholder'
          />          
        </div>
      </div>
    )
  }
  
  if(disabled){
    basic=false
    return (
      <div className='cont-disabled'>
        <p>&lt;Input disabled /&gt;</p>
        <label htmlFor='disabled'>Label</label>
        
        <input
          className='intpt disabled'
          id='disabled'
          type='text'
          placeholder='Placeholder'
          disabled
        />
        
      </div>
    )
  }

  if(error){
    basic=false
    return (
      <div className='cont-error'>

        {helperText 
          ? <p>&lt;Input helperText={`"${helperText}"`} error /&gt;</p>
          : <p>&lt;Input error /&gt;</p>
        }

        <label className='lbl-error' htmlFor='error'>Label</label>
        
        <input
          className='intpt error'
          id='error'
          type='text'
          placeholder='Placeholder'
        />

        {
          helperText
            ? <span className='helper-error'>{`${helperText}`}</span>
            : <></>
        }
      </div>
    )
  }

  if (size) {
    if (size==='sm') {
      return (
        <div className='cont-basic'>
          <p>&lt;Input size="{`${size}`}" /&gt;</p>
          <label htmlFor='basic'>Label</label>          
          <input
            className='intpt basic sm'
            id='basic'
            type='text'
            placeholder='Placeholder'
          />      
        </div>
      )
    }
    if (size==='md') {
      return (
        <div className='cont-basic'>
          <p>&lt;Input size="{`${size}`}" /&gt;</p>
          <label htmlFor='basic'>Label</label>          
          <input
            className='intpt basic md'
            id='basic'
            type='text'
            placeholder='Placeholder'
          />      
        </div>
      )
    }
    if (size==='lg') {
      return (
        <div className='cont-basic'>
          <p>&lt;Input size="{`${size}`}" /&gt;</p>
          <label htmlFor='basic'>Label</label>          
          <input
            className='intpt basic lg'
            id='basic'
            type='text'
            placeholder='Placeholder'
          />      
        </div>
      )
    }
  }

  if(basic){

    return (
      <div className='cont-basic'>
        {helperText 
          ? <p>&lt;Input helperText={`"${helperText}"`} /&gt;</p>
          : <p>&lt;Input /&gt;</p>
        }

        <label htmlFor='basic'>Label</label>
        
        <input
          className='intpt basic'
          id='basic'
          type='text'
          placeholder='Placeholder'
          value={value}
        />

        {
          helperText
            ? <span className='helper-basic'>{`${helperText}`}</span>
            : <></>
        }
                
      </div>
    )
  }

}

Input.propTypes = {
  basic: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  icon: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  row: PropTypes.number
} 

Input.defaultProps = {
  basic: true,
  error: false,
  disabled: false,
  helperText: '',
  icon: '',
  startIcon: '',
  endIcon: '',
  value: '',
  size: '',
  fullWidth: false,
  row:1,
}

export default Input
