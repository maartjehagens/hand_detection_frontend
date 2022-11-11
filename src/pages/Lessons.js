import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Lessons = () => (
    <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header></Card.Header>
            <Card.Meta>
                <span className='date'></span>
            </Card.Meta>
            <Card.Description>
                Matthew leert je de handgebaren aan van A tot Z
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                Les 1
            </a>
        </Card.Content>
    </Card>
)

export default Lessons