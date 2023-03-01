import { Component } from "react";
import css from './TodoCreateForm.module.css'

export class TodoCreateForm extends Component {
  state = {
        title: '',
        description: '',
        titleError: null,
        descriptionError: null
    }

   handleSubmit = event => {
     event.preventDefault();
     const { title, description } = this.state;

    if (!title.trim()) {
      this.setState({ titleError: 'This field is empty' });
      return;
     }
      if (!description.trim()) {
      this.setState({ descriptionError: 'This field is empty' });
      return;
    }

       this.props.onSubmit(this.state)
       this.reset();
  } 
  
  handleChange = event => {
    const { name, value } = event.currentTarget;
      this.setState({ [name]: value, [`${name}Error`]: null })
      
    };   
    reset = () => {
        this.setState({ title: '', description: '', titleError: null, descriptionError: null });
    }
  
  render() {
      const { title, description, titleError, descriptionError } = this.state;
       return (
         
           <form onSubmit={this.handleSubmit}> 
             <label >Title:
             <input
               className={titleError ? css.error : ''}
                 onChange={this.handleChange}
                 type="text"
                 value={title}
                 name="title"
                 id={this.titleInputId}
                 placeholder='Enter title'
                 
             />
             {titleError && <div className={css.errorText}>This field is empty</div>}
             </label>
             <label >Description:
             <input
               className={descriptionError ? css.error : ''}
                 onChange={this.handleChange}
                 type="text"
                 value={description}
                 name="description"
                 id={this.descriptionInputId}
                 placeholder='Enter description'
                 
               />
            {descriptionError && <div className={css.errorText}>This field is empty</div>}
             </label>
       
             <button type="submit" >Create</button>
           </form >
           
         
         
       )
    }
}