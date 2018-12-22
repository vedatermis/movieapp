import React, { Component } from 'react'
import { Button, Form, Image } from 'semantic-ui-react'

export class NewMovieForm extends Component {
    state = {
        title: "",
        cover: ""
    };

    render() {
        return (
            <div>
                <h2>Add New Movie</h2>

                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input 
                        id = "title"
                        value = { this.state.title }
                        onChange = { this.handleChange }
                        placeholder='Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Cover Url</label>
                        <input 
                        id = "cover"
                        value = { this.state.cover }
                        onChange = { this.handleChange }
                        placeholder='Cover Url' />
                    </Form.Field>
                    <Image src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5856/5856500_sa.jpg;maxHeight=640;maxWidth=550' size='small' />
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default NewMovieForm;