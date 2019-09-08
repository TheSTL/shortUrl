import React from 'react';
import { Button, Input, Form, Label,Grid } from 'semantic-ui-react'

export default function Homecomponent({
  shortUrl,
  longUrl,
  message,
  onChangeShortUrl,
  onChangeLongUrl,
  onSave
}) {
    return (
        <Grid centered style={{marginTop: '5vh'}}>
               <Grid.Column width={4} > 
                   <h2
                    style={{
                        fontWeight: 400,
                        marginBottom: '1em',
                        border: '1px solid #555',
                        textAlign: 'center',
                        color: '#00BCD4',
                        padding: '0.5em',
                        fontWeight: 'bolder'

                    }}
                    >
                   Short Url Home Page
                    </h2>
                </Grid.Column>
                
                    <Grid.Row centered >
                    <Grid.Column width={3}>
                        <Form.Field >
                        <Label color="black"  >Short Url</Label>
                        </Form.Field>
                        <Form.Field>
                        <Input placeholder='gg' value={shortUrl} onChange={onChangeShortUrl}   style={{ marginTop: '2vh', boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                        </Form.Field>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <Form.Field>
                        <Label color="black">Long Url</Label>
                        </Form.Field>
                        <Form.Field>
                        <Input placeholder='Ex: https://google.com' value={longUrl} onChange={onChangeLongUrl} style={{marginTop: '2vh',boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} />
                        </Form.Field>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Button 
                          color="green" 
                          type='submit' 
                          onClick={onSave}
                          style={{marginLeft: '15vh'}}
                        >Save</Button>    
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        {message}
                    </Grid.Row>
                    <Grid.Row>
                        Made with ❤️ by Ashu
                    </Grid.Row>

                    
  </Grid>
    );
}
