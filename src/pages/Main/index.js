import React from 'react'

import Autocomplete from '~/components/Autocomplete'
import InputTag from '~/components/InputTag'

import { Container, Content, Title } from './styled'

export default function Main() {
  return (
    <Container>
      <Content>
        <Title>Search some success of Queen Bey here</Title>
        <Autocomplete
          suggestions={[
            'Crazy in Love',
            'Sorry',
            'Formation',
            'Halo',
            'Flawless',
            'Single Ladies',
            'Irreplaceble',
            'Don\'t hurt yourself',
            'Drunk in Love',
            'Diva',
            'Love on Top',
            'Run the World',
            'Freedom',
            'Naughty Girl',
            'Ego',
            'Partition',
            'Yoncé',
            '7/11',
            'Deja Vu',
            'Hold Up',
            'All Night',
            'Brown Skin Girl',
          ]}
        />
        <Title>Now here you can classify</Title>
        <InputTag />
      </Content>
    </Container>
  )
}
